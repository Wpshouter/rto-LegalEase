'use client';

import { FormateDateForis } from "@/action/simpleFunctions";
import {
  DollarSign,
  Wallet,
  Users,
  CreditCard,
  User,
  Eye,
} from "lucide-react";

export default function PaymentContent({ payments = [] }) {

  const totalEarnings = payments.reduce(
    (sum, item) => sum + Number(item.fee || 0),
    0
  );

  const totalPayments = payments.length;

  const totalClients = new Set(
    payments.map(item => item.hired_by)
  ).size;

  const averagePayment =
    totalPayments > 0
      ? Math.round(totalEarnings / totalPayments)
      : 0;
  payments.map(payment => {console.log(payment.hired_by)})
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

          <div className="flex items-center gap-4">

            <div className="bg-success text-white p-4 rounded-2xl">
              <Wallet size={28} />
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                Earnings Dashboard
              </h1>

              <p className="text-base-content/70">
                Track all payments received from clients.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-base-content/60 text-sm">
                  Total Earnings
                </p>

                <h2 className="text-3xl font-bold text-success">
                  ${totalEarnings}
                </h2>

              </div>

              <DollarSign
                className="text-success"
                size={34}
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-base-content/60 text-sm">
                  Total Payments
                </p>

                <h2 className="text-3xl font-bold">
                  {totalPayments}
                </h2>

              </div>

              <CreditCard
                className="text-primary"
                size={34}
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-base-content/60 text-sm">
                  Clients Served
                </p>

                <h2 className="text-3xl font-bold">
                  {totalClients}
                </h2>

              </div>

              <Users
                className="text-warning"
                size={34}
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-base-content/60 text-sm">
                  Average Payment
                </p>

                <h2 className="text-3xl font-bold">
                  ${averagePayment}
                </h2>

              </div>

              <Wallet
                className="text-info"
                size={34}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Payment Table */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

          <div className="mb-4">

            <h2 className="card-title text-2xl">
              Payment History
            </h2>

            <p className="text-base-content/60">
              All successful client payments.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="table">

              <thead>

                <tr>

                  <th>Client</th>

                  <th>Amount</th>

                  <th>Date</th>

                  <th>Payment ID</th>

                  <th>Status</th>

               

                </tr>

              </thead>

              <tbody>

                {payments.map(payment => (
                   
                  <tr key={payment._id}>

                    <td>

                      <div className="flex items-center gap-3">

                        <div className="avatar placeholder">

                          <div className="bg-success text-white rounded-full w-12 flex items-center justify-center">

                            <User size={18} />

                          </div>

                        </div>

                        <div>

                          <div className="font-semibold">
                            {payment.user?.name ||
                              "Loading..."}
                          </div>

                          <div className="text-sm opacity-70">
                            {payment.user?.email}
                          </div>

                        </div>

                      </div>

                    </td>

                    <td>

                      <span className="font-bold text-success text-lg">
                        ${payment.fee}
                      </span>

                    </td>

                    <td>
                      {FormateDateForis(
                        payment.created_at
                      )}
                    </td>

                    <td>

                      <span className="font-mono text-xs opacity-70">
                        {payment.payment_intent_id}
                      </span>

                    </td>

                    <td>

                      <div className="badge badge-success gap-1">
                        Paid
                      </div>

                    </td>

              

                  </tr>

                ))}

              </tbody>

            </table>

            {payments.length === 0 && (

              <div className="text-center py-16">

                <Wallet
                  size={50}
                  className="mx-auto opacity-30 mb-4"
                />

                <h3 className="text-xl font-semibold">
                  No Payments Yet
                </h3>

                <p className="text-base-content/60">
                  Payments received from clients will appear here.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}