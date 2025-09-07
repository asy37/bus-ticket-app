import { NextResponse } from 'next/server';

import { RegisterType } from '@/lib/types/register';

export const users: Array<RegisterType> = [];

export async function POST(request: Request) {
  const { email, password, name, surname, gender, birthdate } = await request.json();

  if (users.find((u) => u.email === email)) {
    return NextResponse.json(
      { success: false, message: 'This email is already registered' },
      { status: 400 }
    );
  }

  const newUser = { email, password, name, surname, gender, birthdate };
  users.push(newUser);

  return NextResponse.json({ success: true, data: newUser, message: 'Register success' });
}
