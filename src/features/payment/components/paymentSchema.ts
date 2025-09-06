import { z } from 'zod';

export const PaymentSchema = z.object({
  cardNumber: z.string().min(16).max(16),
  cardDate: z.string().min(4),
  cardName: z.string(),
  cardCvv: z.string().min(3).max(3),
});
