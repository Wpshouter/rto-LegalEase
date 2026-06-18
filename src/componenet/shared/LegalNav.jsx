"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { Search, Scale, Menu } from "lucide-react";

const LegalNav = () => {

  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Browse Lawyers", href: "/lawyers" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-base-200 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-amber-500 text-white p-2 rounded-xl">
            <Scale size={24} />
          </div>

          <div>
            <h1 className="font-bold text-xl tracking-wide">
              LEGAL EASE
            </h1>
            <p className="text-xs text-gray-500">
              Justice & Expertise
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition relative ${
                pathname === link.href
                  ? "text-amber-600"
                  : "text-slate-700"
              }`}
            >
              {link.label}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="hidden md:block w-80">
          <Input
            placeholder="Search lawyers..."
            radius="full"
     
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
            <Link href="/auth/signin">
          <Button variant="light">
            Login
          </Button>
          </Link>

            <Link href="/auth/signup">
               <Button
            className="bg-amber-500 text-white"
          >
            Join as Lawyer
          </Button>
            </Link>
       

          <Menu className="lg:hidden" />
        </div>
      </div>
    </nav>
  );

};

export default LegalNav;