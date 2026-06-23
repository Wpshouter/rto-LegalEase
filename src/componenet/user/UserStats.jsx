import {
  FileText,
  CheckCircle2,
  Clock3,
  DollarSign,
  Scale,
  CreditCard,
} from "lucide-react";

export default function UserStats({
  hiringRequests = [],
}) {

  const totalRequests =
    hiringRequests.length;

  const approvedRequests =
    hiringRequests.filter(
      item =>
        item.status ===
        "approved"
    ).length;

  const pendingRequests =
    hiringRequests.filter(
      item =>
        item.status ===
        "pending"
    ).length;

  const paidRequests =
    hiringRequests.filter(
      item => item.payment
    );
    console.log(paidRequests, 'paid request from user stats component');
  const totalSpent =
    paidRequests.reduce(
      (sum, item) =>
        sum +
        Number(
          item?.fee || 0
        ),
      0
    );

  const lawyersContacted =
    new Set(
      hiringRequests.map(
        item =>
          item.lawyerId
      )
    ).size;

  const successfulConsultations =
    paidRequests.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

      <div className="card bg-base-200 border border-primary/20 shadow-xl">
        <div className="card-body">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm opacity-70">
                Requests Submitted
              </p>

              <h2 className="text-3xl font-bold">
                {totalRequests}
              </h2>

            </div>

            <FileText
              size={34}
              className="text-primary"
            />

          </div>

        </div>
      </div>

      <div className="card bg-base-200 border border-success/20 shadow-xl">
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

      <div className="card bg-base-200 border border-warning/20 shadow-xl">
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

      <div className="card bg-base-200 border border-success/20 shadow-xl">
        <div className="card-body">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm opacity-70">
                Total Spent
              </p>

              <h2 className="text-3xl font-bold text-success">
                ${totalSpent}
              </h2>

            </div>

            <DollarSign
              size={34}
              className="text-success"
            />

          </div>

        </div>
      </div>

      <div className="card bg-base-200 border border-info/20 shadow-xl">
        <div className="card-body">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm opacity-70">
                Lawyers Contacted
              </p>

              <h2 className="text-3xl font-bold">
                {lawyersContacted}
              </h2>

            </div>

            <Scale
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

              <p className="text-sm opacity-70">
                Successful Consultations
              </p>

              <h2 className="text-3xl font-bold text-primary">
                {successfulConsultations}
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
  );
}