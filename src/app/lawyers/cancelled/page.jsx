"use client";

import Link from "next/link";
import {
  Scale,
  XCircle,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">

      <div className="max-w-2xl w-full">

        <div className="card bg-base-200 shadow-2xl border border-error/20">

          <div className="card-body text-center p-10">

            {/* Icon */}

            <div className="mx-auto mb-6">

              <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center">

                <XCircle
                  size={60}
                  className="text-error"
                />

              </div>

            </div>

            {/* Branding */}

            <div className="flex justify-center mb-4">

              <div className="bg-warning text-white p-3 rounded-2xl">

                <Scale size={28} />

              </div>

            </div>

            {/* Title */}

            <h1 className="text-4xl font-bold mb-3">
              Payment Cancelled
            </h1>

            <p className="text-lg text-base-content/70">
              Your consultation booking was not
              completed and no payment has been
              processed.
            </p>

            <div className="divider"></div>

            {/* Message */}

            <div className="bg-base-100 border border-base-300 rounded-2xl p-6">

              <p className="text-base-content/80">
                You can return to the lawyer profile
                at any time and continue your booking.
              </p>

            </div>

            {/* Info */}

            <div className="alert mt-6 border border-warning/20">

              <span>
                Need legal assistance? Your selected
                lawyer remains available for hire.
              </span>

            </div>

            {/* Actions */}

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

              <Link
                href="/lawyers"
                className="btn btn-outline"
              >
                <ArrowLeft size={18} />
                Browse Lawyers
              </Link>

              <button
                onClick={() => window.history.back()}
                className="btn btn-warning"
              >
                <RefreshCw size={18} />
                Try Again
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}