"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  Users,
  Building2,
  Home,
  Globe,
  Receipt,
  Briefcase,
  FileText,
  MessageSquare,
  Landmark,
} from "lucide-react";

const legalServices = [
  {
    name: "Criminal Law",
    icon: Scale,
  },
  {
    name: "Family Law",
    icon: Users,
  },
  {
    name: "Corporate Law",
    icon: Building2,
  },
  {
    name: "Property Law",
    icon: Home,
  },
  {
    name: "Immigration Law",
    icon: Globe,
  },
  {
    name: "Tax Law",
    icon: Receipt,
  },
  {
    name: "Employment Law",
    icon: Briefcase,
  },
  {
    name: "Contract Review",
    icon: FileText,
  },
  {
    name: "Legal Consultation",
    icon: MessageSquare,
  },
  {
    name: "Business Registration",
    icon: Landmark,
  },
];

export default function LegalCategories() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">

      {/* Glow */}

      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Legal
            <span className="text-amber-400 block">
              Categories
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Browse lawyers by specialization and find
            the right legal professional for your case.
          </p>

        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >

          {legalServices.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
              >
                <Link
                  href={`/lawyers?page=1&specialization=${encodeURIComponent(
                    service.name
                  )}`}
                >
                  <div
                    className="
                      h-full
                      bg-white/10
                      border
                      border-white/10
                      backdrop-blur-xl
                      rounded-3xl
                      p-6
                      transition-all
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">

                      <Icon
                        size={26}
                        className="text-amber-400"
                      />

                    </div>

                    <h3 className="text-white font-semibold mt-5">
                      {service.name}
                    </h3>

                    <p className="text-slate-400 text-sm mt-2">
                      Browse specialists
                    </p>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}