"use client";

import { Menu } from "lucide-react";

export default function MobileMenu({
  children,
}) {
  return (
    <div className="drawer lg:hidden">
      <input
        id="mobile-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content">
        <label
          htmlFor="mobile-drawer"
          className="btn btn-warning btn-sm"
        >
          <Menu />
        </label>

        {children}
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="mobile-drawer"
          className="drawer-overlay"
        />

        <div className="w-72 bg-base-200 min-h-full">
          Sidebar Here
        </div>
      </div>
    </div>
  );
}