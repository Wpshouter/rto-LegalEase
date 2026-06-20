



import DashboardSidebar from "@/componenet/dashboard/DashboardSidebar";
import { getUserProfileLaywer } from "@/data/dataFetch";
import { getSession } from "@/lib/user";

export default async function Layout({
  children,
}) {

  const session =
    await getSession();
    console.log('session from dash layout', session);
    //     const existingProfile =  await getUserProfileLaywer(session?.id);
    // console.log('exisitngProfile', existingProfile);
  return (
    <div className="drawer lg:drawer-open">
  
  <input
    id="dashboard-drawer"
    type="checkbox"
    className="drawer-toggle"
  />

  {/* Main Content */}
  <div className="drawer-content flex flex-col">

    {/* Mobile Topbar */}
    <div className="lg:hidden navbar bg-base-200 border-b border-base-300">

      <label
        htmlFor="dashboard-drawer"
        className="btn btn-square btn-ghost"
      >
        ☰
      </label>

      <span className="font-bold ml-2">
        LEGAL EASE
      </span>

    </div>

    <main className="p-6">
      {children}
    </main>

  </div>

  {/* Sidebar */}
  <div className="drawer-side z-50">

    <label
      htmlFor="dashboard-drawer"
      aria-label="close sidebar"
      className="drawer-overlay"
    />

    <DashboardSidebar role={session?.role} />

  </div>

</div>
  );
}