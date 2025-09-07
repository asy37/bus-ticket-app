import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'Please enter a valid email!' }),
  password: z.string().min(6, { message: 'The password must be at least 6 characters long!' }),
});
