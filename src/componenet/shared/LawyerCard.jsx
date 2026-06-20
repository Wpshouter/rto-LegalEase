"use client";

import Link from "next/link";
import { BriefcaseBusiness, DollarSign } from "lucide-react";

export default function LawyerCard({ lawyer }) {
  return (
    <Link
      href={`/lawyers/${lawyer._id}`}
      className="group"
    >
      <div className="card bg-base-200 border border-warning/20 hover:border-warning/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">

        {/* Cover */}
        <div className="relative">

          <img
            src={lawyer.imageUrl}
            alt={lawyer.name}
            className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Status */}
          <div className="absolute top-4 right-4">

            {lawyer.status === "busy" ? (
              <div className="badge badge-error badge-lg">
                Busy
              </div>
            ) : (
              <div className="badge badge-success badge-lg">
                Available
              </div>
            )}

          </div>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Name */}
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="font-bold text-xl">
              {lawyer.name}
            </h2>
          </div>

        </div>

        <div className="card-body">

          {/* Specializations */}

          <div className="flex flex-wrap gap-2 mb-3">

            {lawyer.specializations
              ?.slice(0, 3)
              .map((item) => (
                <span
                  key={item}
                  className="badge badge-warning badge-outline"
                >
                  {item}
                </span>
              ))}

            {lawyer.specializations?.length >
              3 && (
              <span className="badge">
                +
                {lawyer.specializations.length -
                  3}
              </span>
            )}

          </div>

          {/* Bio */}

          <p className="text-sm text-base-content/70 line-clamp-3 min-h-[60px]">
            {lawyer.bio}
          </p>

          {/* Footer */}

          <div className="mt-5 flex justify-between items-center">

            <div className="flex items-center gap-2 font-semibold text-warning">

              <DollarSign size={18} />

              ${lawyer.fee}

            </div>

            <div className="flex items-center gap-2 text-sm text-base-content/60">

              <BriefcaseBusiness size={16} />

              Lawyer

            </div>

          </div>

        </div>
      </div>
    </Link>
  );
}