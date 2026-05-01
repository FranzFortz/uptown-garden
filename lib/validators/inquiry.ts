import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  event_type: z.enum(['wedding', 'birthday_debut', 'corporate'], {
    errorMap: () => ({ message: 'Please select an event type' }),
  }),
  event_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date'),
  guest_count: z.coerce.number().int().positive().optional(),
  message: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
