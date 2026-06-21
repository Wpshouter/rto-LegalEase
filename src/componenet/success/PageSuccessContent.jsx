"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Scale,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function SuccessPage({
  customerEmail,
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">

      <div className="max-w-2xl w-full">

        <div className="card bg-base-200 shadow-2xl border border-success/20">

          <div className="card-body text-center p-10">

            {/* Success Icon */}

            <div className="mx-auto mb-6">

              <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">

                <CheckCircle2
                  size={60}
                  className="text-success"
                />

              </div>

            </div>

            {/* Title */}

            <div className="flex justify-center mb-4">

              <div className="bg-warning text-white p-3 rounded-2xl">

                <Scale size={28} />

              </div>

            </div>

            <h1 className="text-4xl font-bold mb-3">
              Payment Successful
            </h1>

            <p className="text-base-content/70 text-lg">
              Your consultation request has been
              successfully submitted to the lawyer.
            </p>

            {/* Details */}

            <div className="divider"></div>

            <div className="bg-base-100 rounded-2xl p-6 border border-base-300">

              <div className="flex justify-center mb-3">

                <Mail
                  size={22}
                  className="text-warning"
                />

              </div>

              <p className="text-base-content/80">

                A confirmation email has been sent to

              </p>

              <p className="font-bold text-warning mt-2 break-all">
                {customerEmail}
              </p>

            </div>

            {/* Notice */}

            <div className="alert mt-6 border border-success/20">

              <span>
                The lawyer will review your request
                and contact you shortly.
              </span>

            </div>

            {/* Actions */}

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

              <Link
                href="/lawyers"
                className="btn btn-outline"
              >
                Browse More Lawyers
              </Link>

              <Link
                href="/dashboard"
                className="btn btn-warning"
              >
                Go To Dashboard

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}