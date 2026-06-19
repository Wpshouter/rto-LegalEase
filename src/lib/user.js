// lib/get-session.js

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getSession() {
  const usersession = await auth.api.getSession({
    headers: await headers(),
  });

  return usersession?.user || null;
}

export const requirerole = async(role) => {
    const user = await getSession();
    if(user?.role != role) {return redirect('/unauthorized')}
}