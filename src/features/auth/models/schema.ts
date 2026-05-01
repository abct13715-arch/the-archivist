import {z} from 'zod';

// Auth schemas (from migrations)
export const userRoleEnum = z.enum(['collector', 'archivist', 'admin']);
export const userSchema = z.object({
  id: z.string(),
  role: userRoleEnum.default('collector'),
  display_name: z.string(),
  avatar_path: z.string().nullable(),
  created_at: z.string().nullable().optional(),
});

export type TUser = z.infer<typeof userSchema>;

export const usersSchema = z.array(userSchema);

// Existing auth schemas
export const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
