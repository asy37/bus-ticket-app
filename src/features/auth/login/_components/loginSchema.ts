import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'Geçerli bir email giriniz!' }),
  password: z.string().min(6, { message: 'Parola en az 6 karakter olmalı!' }),
});
