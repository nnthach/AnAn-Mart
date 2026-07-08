import 'server-only';
import { createSupabaseServerClient } from '@/lib/db/server';
import { createUserProfile, getUserProfileById } from '@/lib/db/users';

export const authService = {
  async signUp(email: string, password: string, fullName: string) {
    const supabase = await createSupabaseServerClient();

    // create in auth
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error('Supabase signUp error:', {
        message: error.message,
        code: error.code,
        status: error.status,
      });

      if (error.code === 'user_already_exists') {
        throw new Error('EMAIL_ALREADY_EXISTS');
      }
      if (error.code === 'over_email_send_rate_limit') {
        throw new Error('EMAIL_RATE_LIMIT');
      }
      throw new Error('SIGN_UP_FAILED');
    }

    if (!data.user) {
      throw new Error('SIGN_UP_FAILED');
    }

    // Supabase trả về identities: [] thay vì lỗi khi email đã tồn tại
    if (data.user.identities?.length === 0) {
      throw new Error('EMAIL_ALREADY_EXISTS');
    }

    // create user table
    await createUserProfile({ id: data.user.id, full_name: fullName });

    const userProfile = await getUserProfileById(data.user.id);

    if (!userProfile) {
      throw new Error('PROFILE_NOT_FOUND');
    }

    return {
      id: userProfile.id,
      email: data.user.email ?? email,
      full_name: userProfile.full_name,
      role: userProfile.role,
      status: userProfile.status,
    };
  },

  async signIn(email: string, password: string) {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      throw new Error('INVALID_CREDENTIALS');
    }

    const userProfile = await getUserProfileById(data.user.id);

    if (!userProfile) {
      throw new Error('PROFILE_NOT_FOUND');
    }

    if (userProfile.status === 'banned') {
      throw new Error('ACCOUNT_BANNED');
    }

    if (userProfile.status === 'inactive') {
      throw new Error('ACCOUNT_INACTIVE');
    }

    const isStaff = userProfile.role === 'staff';

    return {
      id: userProfile.id,
      email: data.user.email ?? email,
      full_name: userProfile.full_name,
      role: userProfile.role,
      status: userProfile.status,
      ...(isStaff && { staff: userProfile.staffs?.[0] ?? null }),
    };
  },

  async getCurrentUser() {
    const supabase = await createSupabaseServerClient();

    const {
      data: { user: authUser },
      error,
    } = await supabase.auth.getUser();

    if (error || !authUser) {
      throw new Error('UNAUTHORIZED');
    }

    const userProfile = await getUserProfileById(authUser.id);

    if (!userProfile) {
      throw new Error('PROFILE_NOT_FOUND');
    }

    if (userProfile.status === 'banned' || userProfile.status === 'inactive') {
      throw new Error('ACCOUNT_NOT_ACTIVE');
    }

    const isStaff = userProfile.role === 'staff';

    return {
      id: userProfile.id,
      email: authUser.email ?? '',
      full_name: userProfile.full_name,
      role: userProfile.role,
      status: userProfile.status,
      ...(isStaff && { staff: userProfile.staffs?.[0] ?? null }),
    };
  },
};
