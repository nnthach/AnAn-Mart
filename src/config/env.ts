import { z } from 'zod';

// Validate biến môi trường MỘT LẦN. Thiếu/ sai kiểu → app fail ngay lúc khởi động,
// không phải lúc runtime giữa production.
const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  // Public — lộ ra client (phải có tiền tố NEXT_PUBLIC_)
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),

  // mapbox
  NEXT_PUBLIC_STORE_LNG: z.string().default('108.3318'),
  NEXT_PUBLIC_STORE_LAT: z.string().default('15.88231'),
  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().min(1),

  // cloudinary
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: z.string().min(1),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),

  // Server-side secret — thêm tại đây, ví dụ:
  DATABASE_URL: z.string().default(''),
  SUPABASE_SECRET_KEY: z.string().min(1),
  SUPABASE_JWKS_URL: z.string().url().default('http://localhost:3000'),
});

export const env = EnvSchema.parse(process.env);
