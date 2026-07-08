'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import LanguageToggle from '@/components/features/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/context/I18nContext';
import { createSignInSchema } from '@/lib/validations/auth';
import type { SignInFormData } from '@/lib/validations/auth';
import { signInAction } from '@/server/actions/auth';

export default function SignInPage() {
  const { t, locale } = useI18n();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const signInSchema = useMemo(() => createSignInSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: SignInFormData) => {
    const result = await signInAction(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success(locale === 'vi' ? 'Đăng nhập thành công!' : 'Signed in successfully!');

    router.refresh(); // bắt AuthProviderWrapper chạy lại, lấy initialUser mới
    router.push(
      result.data.role === 'admin' ? '/admin' : result.data.role === 'staff' ? '/staff' : '/',
    );
  };

  return (
    <main className="flex min-h-screen">
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/images/store_image.jpg"
          alt="An An Mart storefront in Hoi An"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-10">
          <p className="font-heading text-3xl font-semibold text-white">An An Mart</p>
          <p className="mt-2 max-w-sm text-sm text-white/80">{t('authPage.signinPage.tagline')}</p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="absolute top-6 right-6">
          <LanguageToggle isScrolled />
        </div>

        <div className="w-full max-w-sm">
          <Link href="/" className="mb-8 flex items-center justify-center">
            <span className="border-primary/15 relative flex size-14 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm">
              <Image
                src="/images/logo.png"
                alt="An An Mart"
                width={80}
                height={80}
                priority
                className="size-full object-cover"
              />
            </span>
          </Link>

          <div className="mb-8 text-center">
            <h1 className="font-heading text-2xl font-semibold text-gray-900">
              {t('authPage.signinPage.title')}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              {t('authPage.signinPage.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                {t('authPage.signinPage.emailLabel')}
              </label>
              <div className="relative">
                <Mail className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('authPage.signinPage.emailPlaceholder')}
                  disabled={isSubmitting}
                  className="h-11 pl-10"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-destructive mt-1.5 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
                {t('authPage.signinPage.passwordLabel')}
              </label>
              <div className="relative">
                <Lock className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder={t('authPage.signinPage.passwordPlaceholder')}
                  disabled={isSubmitting}
                  className="h-11 pr-10 pl-10"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 transition hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-destructive mt-1.5 text-xs">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="h-11 w-full font-semibold">
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t('authPage.signinPage.submit')
              )}
            </Button>
          </form>

          <p className="text-muted-foreground mt-6 text-center text-sm">
            {t('authPage.signinPage.noAccount')}{' '}
            <Link href="/signup" className="text-primary font-semibold hover:underline">
              {t('authPage.signinPage.signUpLink')}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
