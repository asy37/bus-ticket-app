import { NextResponse } from 'next/server';

import { users } from '../register/route';

// Aynı memory kullanılıyor
// Bu dosyada users array’i aynı scope’da olmalı veya import edilebilir

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    debugger;
    return NextResponse.json(
      { success: false, message: 'Geçersiz email veya şifre' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: {
      email: user.email,
      name: user.name,
      surname: user.surname,
    },
    message: 'Login başarılı',
  });
}
