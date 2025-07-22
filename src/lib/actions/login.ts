"use server";

import { cookies } from "next/headers";

export async function loginAction({ email, password }: { email: string; password: string }) {
  if (!email || !password) {
    return { success: false, message: "Invalid credentials" };
  }

  // Set cookie as HttpOnly
  const cookie = await cookies();
  cookie.set({
    name: "token",
    value: "mocktoken",
    httpOnly: true,
  });

  return { success: true };
}
