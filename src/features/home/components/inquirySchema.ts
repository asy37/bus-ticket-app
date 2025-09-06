import { z } from 'zod';

export const inquirySchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  departureDate: z.string().min(1),
});
