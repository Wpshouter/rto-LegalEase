import {
  Scale,
  Clock3,
  CheckCircle2,
  Eye,
  MessageSquare,
} from "lucide-react";

export default function HiringRequestsPage() {

  const requests = [
    {
      id: 1,
      lawyer: "Eleanor Vance",
      image:
        "https://i.ibb.co/pjmzfFR5/nussbaum-law-IOvs-EAEjn-DE-unsplash.jpg",
      specialization: "Tax Law",
      fee: 699,
      status: "accepted",
      payment: "paid",
      date: "Jun 21, 2026",
    },
    {
      id: 2,
      lawyer: "Emily Smith",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      specialization: "Criminal Law",
      fee: 386,
      status: "pending",
      payment: "paid",
      date: "Jun 20, 2026",
    },
    {
      id: 3,
      lawyer: "William Taylor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      specialization: "Family Law",
      fee: 343,
      status: "completed",
      payment: "paid",
      date: "Jun 18, 2026",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <div className="badge badge-warning gap-1">
            <Clock3 size={12} />
            Pending
          </div>
        );

      case "accepted":
        return (
          <div className="badge badge-info gap-1">
            <CheckCircle2 size={12} />
            Accepted
          </div>
        );

      case "completed":
        return (
          <div className="badge badge-success gap-1">
            <CheckCircle2 size={12} />
            Completed
          </div>
        );

      default:
        return (
          <div className="badge">
            Unknown
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-warning/20 shadow-xl">

        <div className="card-body">

          <div className="flex items-center gap-4">

            <div className="bg-warning text-white p-4 rounded-2xl">

              <Scale size={28} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                My Hiring Requests
              </h1>

              <p className="text-base-content/70">
                Track your lawyer consultations and request status.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="card bg-base-200 border border-warning/20 shadow-xl">

        <div className="card-body">

          <div className="overflow-x-auto">

            <table className="table">

              <thead>

                <tr>

                  <th>Lawyer</th>

                  <th>Fee</th>

                  <th>Hired On</th>

                  <th>Status</th>

                  <th>Payment</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {requests.map((request) => (

                  <tr key={request.id}>

                    <td>

                      <div className="flex items-center gap-3">

                        <div className="avatar">

                          <div className="w-14 rounded-full">

                            <img
                              src={request.image}
                              alt=""
                            />

                          </div>

                        </div>

                        <div>

                          <div className="font-bold">
                            {request.lawyer}
                          </div>

                          <div className="text-sm opacity-70">
                            {request.specialization}
                          </div>

                        </div>

                      </div>

                    </td>

                    <td>

                      <span className="font-semibold">
                        ${request.fee}
                      </span>

                    </td>

                    <td>
                      {request.date}
                    </td>

                    <td>
                      {getStatusBadge(
                        request.status
                      )}
                    </td>

                    <td>

                      <div className="badge badge-success">

                        Paid

                      </div>

                    </td>

                    <td>

                      <div className="flex gap-2">

                        <button className="btn btn-sm btn-outline">

                          <Eye size={16} />

                          View

                        </button>

                        <button className="btn btn-sm btn-warning">

                          <MessageSquare size={16} />

                          Message

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}