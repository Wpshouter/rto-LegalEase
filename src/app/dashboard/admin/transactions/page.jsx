import {
  DollarSign,
  User,
  CreditCard,
} from 'lucide-react';

import { FormateDateForis } from '@/action/simpleFunctions';
import { getAdminTransactions } from '@/data/dataFetch';


export default async function Page() {

  const transactions =
    await getAdminTransactions();

  const totalRevenue =
    transactions.reduce(
      (sum, item) =>
        sum +
        Number(item.fee || 0),
      0
    );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

          <div className="flex items-center gap-4">

            <div className=" text-white p-4 rounded-2xl">

              <DollarSign
                size={28}
              />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                Transactions
              </h1>

              <p className="opacity-70">
                All platform payments.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="stats shadow w-full bg-base-200">

        <div className="stat">

          <div className="stat-title">
            Total Revenue
          </div>

          <div className="stat-value text-success">
            $
            {totalRevenue}
          </div>

        </div>

        <div className="stat">

          <div className="stat-title">
            Transactions
          </div>

          <div className="stat-value">
            {
              transactions.length
            }
          </div>

        </div>

      </div>

      {/* Table */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

          <h2 className="card-title text-2xl">

            Payment History

          </h2>

          <div className="overflow-x-auto">

            <table className="table">

              <thead>

                <tr>

                  <th>User</th>

                  <th>Lawyer</th>

                  <th>Amount</th>

                  <th>Date</th>

                  <th>Payment ID</th>

                </tr>

              </thead>

              <tbody>

                {transactions.map(
                  transaction => (

                    <tr
                      key={
                        transaction._id
                      }
                    >

                      <td>

                        <div className="flex items-center gap-3">

                          <div className="avatar placeholder">

                            <div className="bg-primary text-white rounded-full w-10 flex items-center justify-center">

                              <User
                                size={
                                  16
                                }
                              />

                            </div>

                          </div>

                          <div>

                            <div className="font-semibold">

                              {
                                transaction
                                  .user
                                  ?.name
                              }

                            </div>

                            <div className="text-xs opacity-70">

                              {
                                transaction
                                  .user
                                  ?.email
                              }

                            </div>

                          </div>

                        </div>

                      </td>

                      <td>

                        <div className="flex items-center gap-3">

                          <img
                            src={
                              transaction
                                .lawyer
                                ?.imageUrl
                            }
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover"
                          />

                          <div>

                            <div className="font-semibold">

                              {
                                transaction
                                  .lawyer
                                  ?.name
                              }

                            </div>

                            <div className="text-xs opacity-70">

                              {
                                transaction
                                  .lawyer
                                  ?.specializations?.join(
                                    ', '
                                  )
                              }

                            </div>

                          </div>

                        </div>

                      </td>

                      <td>

                        <span className="font-bold text-success">

                          $
                          {
                            transaction.fee
                          }

                        </span>

                      </td>

                      <td>

                        {FormateDateForis(
                          transaction.created_at
                        )}

                      </td>

                      <td>

                        <span className="font-mono text-xs">

                          {
                            transaction.payment_intent_id
                          }

                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}