import { NextResponse } from 'next/server';

import { users } from '../register/route';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    debugger;
    return NextResponse.json(
      { success: false, message: 'Please enter a valid email!' },
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
    message: 'Login success',
  });
}
