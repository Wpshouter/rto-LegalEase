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
export const getUserCurrent = async() => {
    const user = await getSession();
    return user;
}
export const requireUser = async() => {
    const user = await getSession();
    if(!user) {return redirect('/login')}
}
export  const canUserCommentasdsad = async( lawyerId, userId ) => {
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/can-comment/${lawyerId}/${userId}`);
  try {
    const response =
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/can-comment/${lawyerId}/${userId}`,
        {
          cache: "no-store",
        }
      );
    return await response.json();
  } catch (error) {
    console.error(error);
    return {
      canComment: false,
    };
  }
}