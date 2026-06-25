
import { getAdminAnalytics } from '@/data/dataFetch';
import {
  Users,
  Scale,
  DollarSign,
  CreditCard,
  MessageSquare,
  FileText,
} from 'lucide-react';



export default async function AdminOverview() {
  
  const analytics =
    await getAdminAnalytics();

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-primary/20 shadow-xl">

        <div className="card-body">

          <h1 className="text-3xl font-bold">
            Admin Analytics
          </h1>

          <p className="opacity-70">
            Platform overview and
            business metrics.
          </p>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="opacity-70">
                  Total Users
                </p>

                <h2 className="text-3xl font-bold">
                  {
                    analytics.totalUsers
                  }
                </h2>

              </div>

              <Users
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

                <p className="opacity-70">
                  Total Lawyers
                </p>

                <h2 className="text-3xl font-bold">
                  {
                    analytics.totalLawyers
                  }
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

                <p className="opacity-70">
                  Hire Requests
                </p>

                <h2 className="text-3xl font-bold">
                  {
                    analytics.totalHires
                  }
                </h2>

              </div>

              <FileText
                size={34}
                className="text-warning"
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="opacity-70">
                  Total Revenue
                </p>

                <h2 className="text-3xl font-bold text-success">
                  $
                  {
                    analytics.totalRevenue
                  }
                </h2>

              </div>

              <DollarSign
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

                <p className="opacity-70">
                  Successful Payments
                </p>

                <h2 className="text-3xl font-bold">
                  {
                    analytics.totalPayments
                  }
                </h2>

              </div>

              <CreditCard
                size={34}
                className="text-info"
              />

            </div>

          </div>

        </div>

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="opacity-70">
                  User Reviews
                </p>

                <h2 className="text-3xl font-bold">
                  {
                    analytics.totalComments
                  }
                </h2>

              </div>

              <MessageSquare
                size={34}
                className="text-secondary"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}