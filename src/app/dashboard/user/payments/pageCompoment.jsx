'use client';

import { FormateDateForis } from "@/action/simpleFunctions";
import {
  DollarSign,
  Wallet,
  Users,
  CreditCard,
  Scale,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function UserPaymentsContent({
  payments = [],
}) {

  const paidRequests = payments.filter(
    item => item.payment
  );

  const totalSpent = paidRequests.reduce(
    (sum, item) =>
      sum +
      Number(
        item.payment?.fee || 0
      ),
    0
  );

  const totalLawyers = new Set(
    paidRequests.map(
      item => item.lawyerId
    )
  ).size;

  const totalPaid =
    paidRequests.length;

  const pendingRequests =
    payments.filter(
      item =>
        item.status ===
        "pending"
    ).length;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-primary/20 shadow-xl">

        <div className="card-body">

          <div className="flex items-center gap-4">

            <div className="bg-primary text-white p-4 rounded-2xl">

              <Wallet size={28} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                My Payments
              </h1>

              <p className="text-base-content/70">
                Track your lawyer consultations and payment history.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Total Spent
                </p>

                <h2 className="text-3xl font-bold text-primary">
                  ${totalSpent}
                </h2>

              </div>

              <DollarSign
                size={34}
                className="text-primary"
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Lawyers Hired
                </p>

                <h2 className="text-3xl font-bold">
                  {totalLawyers}
                </h2>

              </div>

              <Scale
                size={34}
                className="text-success"
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Paid Consultations
                </p>

                <h2 className="text-3xl font-bold">
                  {totalPaid}
                </h2>

              </div>

              <CreditCard
                size={34}
                className="text-success"
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Pending Requests
                </p>

                <h2 className="text-3xl font-bold text-warning">
                  {pendingRequests}
                </h2>

              </div>

              <Wallet
                size={34}
                className="text-warning"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Payments Table */}

      <div className="card bg-base-200 border border-primary/20 shadow-xl">

        <div className="card-body">

          <div className="mb-4">

            <h2 className="card-title text-2xl">
              Payment History
            </h2>

            <p className="text-base-content/60">
              All completed lawyer consultation payments.
            </p>

          </div>

          {paidRequests.length > 0 ? (

            <div className="overflow-x-auto">

              <table className="table">

                <thead>

                  <tr>

                    <th>Lawyer</th>

                    <th>Fee</th>

                    <th>Paid On</th>

                    <th>Payment ID</th>

                    <th>Status</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {paidRequests.map(
                    item => (

                      <tr
                        key={item._id}
                      >

                        <td>

                          <div className="flex items-center gap-3">

                            <div className="avatar">

                              <div className="w-14 rounded-full">

                                <img
                                  src={
                                    item.profile
                                      ?.imageUrl
                                  }
                                  alt={
                                    item.profile
                                      ?.name
                                  }
                                />

                              </div>

                            </div>

                            <div>

                              <div className="font-semibold">

                                {
                                  item.profile
                                    ?.name
                                }

                              </div>

                              <div className="text-sm opacity-70">

                                {item.profile?.specializations?.join(
                                  ", "
                                )}

                              </div>

                            </div>

                          </div>

                        </td>

                        <td>

                          <span className="font-bold text-primary text-lg">

                            $
                            {
                              item
                                .payment
                                ?.fee
                            }

                          </span>

                        </td>

                        <td>

                          {FormateDateForis(
                            item
                              .payment
                              ?.created_at
                          )}

                        </td>

                        <td>

                          <span className="font-mono text-xs opacity-70">

                            {
                              item
                                .payment
                                ?.payment_intent_id
                            }

                          </span>

                        </td>

                        <td>

                          <div className="badge badge-success">

                            Paid

                          </div>

                        </td>

                        <td>
                                <Link
      href={`/lawyers/${item.profile._id}`}>
                          <button className="btn btn-sm btn-outline">

                            <Eye
                              size={14}
                            />

                            View Lawyer

                          </button>
</Link>
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="text-center py-16">

              <CreditCard
                size={50}
                className="mx-auto opacity-30 mb-4"
              />

              <h3 className="text-xl font-semibold">
                No Payments Yet
              </h3>

              <p className="text-base-content/60">
                Your lawyer consultation payments will appear here.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}