// seatSchema.ts
import { z } from 'zod';

export const seatSchema = z.object({
  gender: z.enum(['male', 'female']),
  travellerName: z.string().min(1, 'Traveller name is required'),
});

export type SeatType = z.infer<typeof seatSchema>;
