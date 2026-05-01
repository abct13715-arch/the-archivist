import {z} from 'zod';

export const archivistProfileSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  whatsapp_number: z.string(),
  bio: z.string().nullable(),
  location: z.string().nullable(),
  persona_inquiry_id: z.string().nullable(),
  verified_at: z.string().nullable(),
  created_at: z.string().nullable().optional(),
  user: z
    .object({
      display_name: z.string(),
      avatar_url: z.string().nullable(),
    })
    .optional(),
  listings: z
    .array(z.object({count: z.number()}))
    .optional()
    .nullable(),
});

export type TArchivistProfile = z.infer<typeof archivistProfileSchema>;

export const archivistProfilesSchema = z.array(archivistProfileSchema);
