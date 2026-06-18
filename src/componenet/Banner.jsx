"use client";

import { Button } from "@heroui/react";
import {
  ShieldCheck,
  Briefcase,
  Building2,
  Scale
} from "lucide-react";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <ShieldCheck size={16} />
              Verified Legal Professionals
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Find Trusted
              <span className="text-amber-400 block">
                Legal Experts
              </span>
            </h1>

            <p className="text-slate-300 text-lg mt-6 max-w-xl">
              Connect with verified lawyers across criminal,
              family, corporate, property and business law.
              Hire confidently and manage cases online.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                size="lg"
                className="bg-amber-500 text-white"
              >
                Find Lawyers
              </Button>

              <Button
                size="lg"
                variant="bordered"
              >
                Become a Lawyer
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-amber-400">
                  500+
                </h3>
                <p className="text-slate-400">
                  Lawyers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-400">
                  2K+
                </h3>
                <p className="text-slate-400">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-amber-400">
                  98%
                </h3>
                <p className="text-slate-400">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative h-[500px] flex items-center justify-center">

            <div className="w-72 h-72 rounded-full bg-amber-500/20 absolute blur-3xl"></div>

            <div className="relative z-10">

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

                <div className="flex justify-center mb-6">
                  <Scale
                    size={120}
                    className="text-amber-400"
                  />
                </div>

                <h3 className="text-center text-2xl font-bold">
                  Justice Through Expertise
                </h3>

                <p className="text-center text-slate-400 mt-2">
                  Connecting clients with legal excellence.
                </p>
              </div>

              {/* Floating Cards */}

              <div className="absolute -left-16 top-10 bg-white text-slate-900 p-4 rounded-2xl shadow-xl">
                <Briefcase />
              </div>

              <div className="absolute -right-10 top-0 bg-white text-slate-900 p-4 rounded-2xl shadow-xl">
                <Building2 />
              </div>

              <div className="absolute right-0 bottom-0 bg-white text-slate-900 p-4 rounded-2xl shadow-xl">
                <ShieldCheck />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}