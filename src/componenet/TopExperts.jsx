"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, Button } from "@heroui/react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { getLawyers } from "@/data/dataFetch";
import Image from "next/image";



export default function TopLegalExperts({lawyers}) {

const newLaywer = lawyers.slice(0,3)
//console.log(newLaywer, '+++++++++++++++++++++++');
   const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">

            <ShieldCheck size={16} />
            Top Rated Lawyers

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">

            Meet Our

            <span className="text-amber-400 block">
              Legal Experts
            </span>

          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">

            Trusted professionals with proven experience
            helping clients resolve legal matters with
            confidence.

          </p>

        </div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {newLaywer.map((lawyer) => (
            //console.log(lawyer),
            <motion.div
              key={lawyer._id}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                transition-all
              "
            >

              <div className="flex justify-center">
                <img width={96} height={96}  className="w-24 h-24 rounded-full" src={      lawyer?.imageUrl || <AvatarImage/>} />
      

              </div>

              <div className="text-center mt-6">

                <h3 className="text-xl font-bold">

                  {lawyer?.name}

                </h3>

                <p className="text-slate-400 mt-2">

                  {lawyer?.specialization ||
                    "Legal Consultant"}

                </p>

              </div>

              <div className="flex justify-center mt-5">

                <span
                  className="
                    bg-amber-500/10
                    text-amber-400
                    border
                    border-amber-500/20
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  Verified Lawyer
                </span>

              </div>

              {/* Stats */}

              {/* <div className="grid grid-cols-2 gap-4 mt-8">

                <div
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    text-center
                  "
                >
                  <h4 className="text-amber-400 text-xl font-bold">
                    {lawyer?.totalHires || 0}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    Hires
                  </p>
                </div>

                <div
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    text-center
                  "
                >
                  <h4 className="text-amber-400 text-xl font-bold">
                    ★ {lawyer?.rating || 5}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    Rating
                  </p>
                </div>

              </div> */}

              <Link
                href={`/lawyers/${lawyer._id}`}
              >
                <Button
                  className="
                    mt-8
                    w-full
                    bg-amber-500
                    text-white
                  "
                >
                  View Profile
                </Button>
              </Link>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}