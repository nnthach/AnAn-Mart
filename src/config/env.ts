import { z } from 'zod';

// Validate biến môi trường MỘT LẦN. Thiếu/ sai kiểu → app fail ngay lúc khởi động,
// không phải lúc runtime giữa production.
const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  // Public — lộ ra client (phải có tiền tố NEXT_PUBLIC_)
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().url(),

  // mapbox 
  NEXT_PUBLIC_STORE_LNG: z.string().url(),
  NEXT_PUBLIC_STORE_LAT: z.string().url(),
  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().url(),

  // Server-side secret — thêm tại đây, ví dụ:
  DATABASE_URL: z.string().url(),
  SUPABASE_SECRET_KEY: z.string().url(),
  SUPABASE_JWKS_URL: z.string().url(),
});

export const env = EnvSchema.parse(process.env);
