"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { Search, Scale, Menu, User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { SlLogout } from "react-icons/sl";
import { useState } from "react";

const LegalNav = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } =  authClient.useSession();
  // console.log('session ', session.data.user);
  const links = [
    { label: "Home", href: "/" },
    { label: "Browse Lawyers", href: "/lawyers" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-base-200 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

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
                  : ""
              }`}
            >
              {link.label}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500"></span>
              )}
            </Link>
          ))}
          {
            session  ?  <Link
              href={`/dashboard`}
              className={`font-medium transition relative ${
                pathname.startsWith(`/dashboard`)
                  ? "text-amber-600"
                  : ""
              }`}
            >
              Dashboard

              {pathname === `/dashboard` && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500"></span>
              )}
            </Link> : ''
          }
        </div>

        {/* Search */}
        <div className="hidden lg:block w-80">
          <form action="/lawyers">   <Input name="search"
            placeholder="Search lawyers..."
            radius="full"
     
          />
          </form>
       
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
            { isPending ? <span className="loading loading-spinner text-success"></span> :
                        (session) ? 
                        <div className='flex gap-3 items-center'>   
                        <button onClick={async () => {  await authClient.signOut();       router.push("/auth/signin");
    router.refresh(); }} className='btn btn-primary btn-outline text-primary shadow-sm border-1'>
                        <SlLogout className='text-[20px]'/>
                            Logout
                        </button>
                        <Link href="/dashboard"><p><User/></p></Link>
                    </div> : 
            <>
                <Link href="/auth/signin">
              <Button variant="light">
                Login
              </Button>
              </Link>

                <Link href="/auth/signup">
                  <Button
                className="bg-amber-500 text-white"
              >
                Join
              </Button>
                </Link>
          


         
            </>
          }
                        <button id="findthis"
  className="btn btn-ghost lg:hidden"
  onClick={() =>
    setMobileOpen(!mobileOpen)
  }
>
  <Menu size={24} />
</button>
        </div>
      </div>
      {mobileOpen && (
  <div className="lg:hidden border-t border-base-300 bg-base-200">

    <div className="p-4 space-y-4">

      {/* Search */}

      <form
        action="/lawyers"
        onSubmit={() =>
          setMobileOpen(false)
        }
      >
        <Input
          name="search"
          placeholder="Search lawyers..."
        />
      </form>

      {/* Links */}

      <div className="flex flex-col">

        <Link
          href="/"
          onClick={() =>
            setMobileOpen(false)
          }
          className="py-3 border-b border-base-300"
        >
          Home
        </Link>

        <Link
          href="/lawyers"
          onClick={() =>
            setMobileOpen(false)
          }
          className="py-3 border-b border-base-300"
        >
          Browse Lawyers
        </Link>

        {session && (
          <Link
            href="/dashboard"
            onClick={() =>
              setMobileOpen(false)
            }
            className="py-3 border-b border-base-300"
          >
            Dashboard
          </Link>
        )}

      </div>

      {/* Auth */}

      {!session ? (
        <div className="flex flex-col gap-3">

          <Link
            href="/auth/signin"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <button className="btn btn-outline w-full">
              Login
            </button>
          </Link>

          <Link
            href="/auth/signup"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <button className="btn btn-warning w-full">
              Join
            </button>
          </Link>

        </div>
      ) : (
        <button
          className="btn btn-error w-full"
          onClick={async () => {

            await authClient.signOut();

            setMobileOpen(false);
            router.push("/auth/signin");
    router.refresh();
          }}
        >
          <SlLogout />
          Logout
        </button>
      )}

    </div>

  </div>
)}
    </nav>
  );

};

export default LegalNav;