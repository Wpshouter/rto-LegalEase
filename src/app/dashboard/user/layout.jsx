import { redirect } from "next/navigation";

import { getSession, requirerole, requireUser } from "@/lib/user";

export default async function UserLayout({ children }) {

    await requireUser();

   return children
}