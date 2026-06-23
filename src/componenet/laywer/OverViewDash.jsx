
import {
  DollarSign,
  Users,
  FileText,
  CheckCircle2,
  Clock3,
  CreditCard,
} from "lucide-react";
import LawyerCard from "../shared/LawyerCard";

export default function LawyerOverviewContent({
  lawyerProfile,
  hiringHistory = [],
  payments = [],
}) {

  const totalEarnings = payments.reduce(
    (sum, payment) =>
      sum + Number(payment.fee || 0),
    0
  );

  const totalClients = new Set(
    payments.map(
      payment => payment.hired_by
    )
  ).size;

  const totalRequests =
    hiringHistory.length;

  const approvedRequests =
    hiringHistory.filter(
      item =>
        item.status ===
        "approved"
    ).length;

  const pendingRequests =
    hiringHistory.filter(
      item =>
        item.status ===
        "pending"
    ).length;

  const totalPayments =
    payments.length;

  const recentPayments =
    payments.slice(0, 5);

  const recentRequests =
    hiringHistory.slice(0, 5);

  return (
    <div className="space-y-8">

      {/* Welcome Banner */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

          <h1 className="text-3xl font-bold">
            Welcome Back,
            {" "}
            {lawyerProfile.name}
          </h1>

          <p className="text-base-content/70">
            Here's an overview of your legal practice and recent activity.
          </p>

        </div>

      </div>

      {/* Profile Preview */}
  <div className="cust9omsss">

      <div className=" p-4 bg-base-200  shadow-xl mb-10">

        <div className="">

          <h2 className="card-title text-2xl mb-4">
            Public Profile Preview
          </h2>

          <LawyerCard
            lawyer={lawyerProfile}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="card bg-base-200 border border-success/20 shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Total Earnings
                </p>

                <h2 className="text-3xl font-bold text-success">
                  ${totalEarnings}
                </h2>

              </div>

              <DollarSign
                size={34}
                className="text-success"
              />

            </div>

          </div>
        </div>

        <div className="card bg-base-200 border  border-success/20 shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Clients Served
                </p>

                <h2 className="text-3xl font-bold">
                  {totalClients}
                </h2>

              </div>

              <Users
                size={34}
                className="text-warning"
              />

            </div>

          </div>
        </div>

        <div className="card bg-base-200 border  border-success/20 shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Requests Received
                </p>

                <h2 className="text-3xl font-bold">
                  {totalRequests}
                </h2>

              </div>

              <FileText
                size={34}
                className="text-info"
              />

            </div>

          </div>
        </div>

        <div className="card bg-base-200 border  border-success/20 shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Approved Requests
                </p>

                <h2 className="text-3xl font-bold text-success">
                  {approvedRequests}
                </h2>

              </div>

              <CheckCircle2
                size={34}
                className="text-success"
              />

            </div>

          </div>
        </div>

        <div className="card bg-base-200 border border-success/20 shadow-xl">
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

              <Clock3
                size={34}
                className="text-warning"
              />

            </div>

          </div>
        </div>

        <div className="card bg-base-200 border  border-success/20 shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-70">
                  Total Payments
                </p>

                <h2 className="text-3xl font-bold text-primary">
                  {totalPayments}
                </h2>

              </div>

              <CreditCard
                size={34}
                className="text-primary"
              />

            </div>

          </div>
        </div>

      </div>

</div>
    </div>
  );
}