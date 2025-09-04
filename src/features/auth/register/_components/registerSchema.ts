import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'Ad alanının doldurulması zorunludur!' }),
  surname: z.string().min(1, { message: 'Soyad alanının doldurulması zorunludur!' }),
  email: z.email({ message: 'Geçerli bir email giriniz!' }),
  password: z.string().min(6, { message: 'Parola en az 6 karakter olmalı!' }),
  gender: z.string().min(1, { message: 'Cinsiyet alanının doldurulması zorunludur!' }),
  birthdate: z.string().min(1, { message: 'Doğum tarihi alanının doldurulması zorunludur!' }),
});
