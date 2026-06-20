import { redirect } from "next/navigation";

import { getSession, requirerole } from "@/lib/user";

export default async function LawyerLayout({ children }) {

    await requirerole('lawyer');

   return children
}

