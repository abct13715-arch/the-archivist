import {z} from 'zod';

export const inquiryStatusEnum = z.enum([
  'pending',
  'active',
  'completed',
  'cancelled',
]);

export const inquirySchema = z.object({
  id: z.string(),
  listing_id: z.string(),
  collector_id: z.string(),
  note: z.string().nullable(),
  status: inquiryStatusEnum.default('pending'),
  created_at: z.string().nullable().optional(),
});

export type TInquiry = z.infer<typeof inquirySchema>;

export const inquiriesSchema = z.array(inquirySchema);
