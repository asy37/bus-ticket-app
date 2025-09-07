import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'The name field is required!' }),
  surname: z.string().min(1, { message: 'The surname field is required!' }),
  email: z.email({ message: 'Please enter a valid email!' }),
  password: z.string().min(6, { message: 'The password must be at least 6 characters long!' }),
  gender: z.string().min(1, { message: 'The gender field is required!' }),
  birthdate: z.string().min(1, { message: 'The birthdate field is required!' }),
});
