"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import {
  Scale
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <Scale
                className="text-amber-400"
              />

              <span className="font-bold text-xl">
                LegalEase
              </span>
            </div>

            <p className="text-slate-400">
              Connecting clients with trusted legal
              professionals worldwide.
            </p>

            <div className="flex gap-3 mt-6">

              <Button isIconOnly variant="flat">
                  <FaFacebookF/>
              </Button>

              <Button isIconOnly variant="flat">
                <FaTwitter/>
              </Button>

              <Button isIconOnly variant="flat">
                <FaLinkedin/>
              </Button>

              <Button isIconOnly variant="flat">
                <FaInstagram/>
              </Button>

            </div>

          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="space-y-2 text-slate-400">
              <Link href="/">About</Link>
              <br />
              <Link href="/">Contact</Link>
              <br />
              <Link href="/">Privacy Policy</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">
              Practice Areas
            </h4>

            <div className="space-y-2 text-slate-400">
              <p>Corporate Law</p>
              <p>Family Law</p>
              <p>Criminal Law</p>
              <p>Property Law</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">
              Newsletter
            </h4>

            <p className="text-slate-400 mb-4">
              Stay updated with legal news and
              opportunities.
            </p>

            <Input
              placeholder="Email Address"
            />

            <Button
              className="mt-3 bg-amber-500 text-white w-full"
            >
              Subscribe
            </Button>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500">
          © 2026 LegalEase. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}