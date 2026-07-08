'use server';

import { z } from 'zod';

import { authService } from '@/server/services/auth';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const signUpSchema = z.object({
  full_name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_CREDENTIALS: 'Email hoặc mật khẩu không đúng.',
  PROFILE_NOT_FOUND: 'Không tìm thấy thông tin tài khoản.',
  ACCOUNT_BANNED: 'Tài khoản đã bị khóa.',
  ACCOUNT_INACTIVE: 'Tài khoản chưa được kích hoạt.',
  EMAIL_ALREADY_EXISTS: 'Email này đã được đăng ký.',
  SIGN_UP_FAILED: 'Đăng ký thất bại, vui lòng thử lại.',
  EMAIL_RATE_LIMIT: 'Hệ thống gửi email xác nhận đang quá tải, vui lòng thử lại sau ít phút.',
};

type SignInResult =
  | { success: true; data: Awaited<ReturnType<typeof authService.signIn>> }
  | { success: false; error: string };

export async function signInAction(input: unknown): Promise<SignInResult> {
  try {
    const { email, password } = signInSchema.parse(input);
    const user = await authService.signIn(email, password);
    return { success: true, data: user };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    console.error('Sign in error:', error);
    return {
      success: false,
      error: ERROR_MESSAGES[message] ?? 'Đăng nhập thất bại, vui lòng thử lại.',
    };
  }
}

type SignUpResult =
  | { success: true; data: Awaited<ReturnType<typeof authService.signUp>> }
  | { success: false; error: string };

export async function signUpAction(input: unknown): Promise<SignUpResult> {
  try {
    const { full_name, email, password } = signUpSchema.parse(input);
    const user = await authService.signUp(email, password, full_name);
    return { success: true, data: user };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    console.error('Sign up error:', error);
    return {
      success: false,
      error: ERROR_MESSAGES[message] ?? 'Đăng ký thất bại, vui lòng thử lại.',
    };
  }
}
