// lib/get-session.js
'use server'
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getSession() {
  const usersession = await auth.api.getSession({
    headers: await headers(),
  });

  return usersession?.user || null;
}


export async function getSessionFulljWT() {
   const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return []
    }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/token`,
    {
      headers: await headers(),
      cache: 'no-store',
    }
  );

  const data =
    await response.json();

  return data.token;
}
export const requirerole = async(role) => {
    const user = await getSession();
    if(!user){
      return redirect('/auth/signin')
    }
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
  //console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/can-comment/${lawyerId}/${userId}`);
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
export const authHeader = async() => {
  return {};
  const token = await getSessionFulljWT();
  const header = token ? {
    authorization : `Bearer ${token}`
  } : {}
  return header;
}