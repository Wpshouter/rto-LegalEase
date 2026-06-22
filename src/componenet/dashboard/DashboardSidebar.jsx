"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Scale,
  CreditCard,
  BriefcaseBusiness,
  History,
  Star,
} from "lucide-react";
import { dashboardMenus } from "./menuitem";



const iconMap = {
  Overview: LayoutDashboard,
  "Manage Users": Users,
  "Manage Lawyers": Scale,
  Transactions: CreditCard,
  "Manage Legal Profile": BriefcaseBusiness,
  "Hiring History": History,
  "Payment History": CreditCard,
  "My Hires": BriefcaseBusiness,
  Comments: Star,
};

export default function DashboardSidebar({
  role,
}) {
  const pathname = usePathname();

  const menus =
    dashboardMenus[role] || [];

  return (
    <aside
      className="
     w-72
    bg-base-200
    min-h-full
    lg:min-h-screen
    border-r
    border-base-300
    flex
    flex-col
      "
    >
      {/* Logo */}

      <div className="p-6 border-b border-base-300">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="bg-warning p-3 rounded-xl text-white">
            <Scale />
          </div>

          <div>
            <h2 className="font-bold text-xl">
              LEGAL EASE
            </h2>

            <p className="text-sm opacity-70">
              Dashboard
            </p>
          </div>
        </Link>
      </div>

      {/* Menu */}

      <div className="p-4 space-y-2">
        {menus.map((item) => {
          const Icon =
            iconMap[item.label];

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                transition-all
                ${
                  active
                    ? "bg-warning text-white"
                    : "hover:bg-base-300"
                }
              `}
            >
              {Icon && (
                <Icon size={18} />
              )}

              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}