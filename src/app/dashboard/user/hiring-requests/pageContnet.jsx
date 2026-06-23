import { FormateDateForis } from "@/action/simpleFunctions";
import {
  Scale,
  Clock3,
  CheckCircle2,
  Eye,
  MessageSquare,
} from "lucide-react";

export default function HiringRequestsPage({user, hiringRequests}) {

/*
[
    {
        "_id": "6a3984c487c9f54a7c2fc7c4",
        "lawyerId": "6a369816dfe529732b664825",
        "lawyerName": "Eleanor Vance",
        "fee": 556,
        "requested_by": "6a3984b4f2853813c1b6311a",
        "status": "pending",
        "created_at": "2026-06-22T18:53:56.090Z",
        "payment": null
    },
    {
        "_id": "6a3984d087c9f54a7c2fc7c5",
        "lawyerId": "6a365dc132b7a9f0eb328a34",
        "lawyerName": "Emma Thomas",
        "fee": 110,
        "requested_by": "6a3984b4f2853813c1b6311a",
        "status": "pending",
        "created_at": "2026-06-22T18:54:08.898Z",
        "payment": null
    }
]
    */
 

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <div className="badge badge-warning gap-1">
            <Clock3 size={12} />
            Pending
          </div>
        );

      case "approved":
        return (
          <div className="badge badge-soft badge-info    gap-1">
            <CheckCircle2 size={12} />
            Approved
          </div>
        );

      case "paid":
        return (
          <div className="badge badge-success gap-1">
            <CheckCircle2 size={12} />
            Paid
          </div>
        );

        
      case "declined":
        return (
          <div className="badge badge-error gap-1">
            <Clock3 size={12} />
            Declined
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

                {hiringRequests.map((request) => (

                  <tr key={request.id}>

                    <td>

                      <div className="flex items-center gap-3">

                        <div className="avatar">

                          <div className="w-14 rounded-full">

                            <img
                              src={request.profile.imageUrl || null}
                              alt=""
                            />

                          </div>

                        </div>

                        <div>

                          <div className="font-bold">
                            {request.lawyerName}
                          </div>

                          <div className="text-sm opacity-70">
                            {/* {request.specialization} */}
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
                      {FormateDateForis(request.created_at)}
                    </td>

                    <td>
                      {getStatusBadge(
                        request.status
                      )}
                    </td>

                    <td>
                 {
  request.payment ? (
    <div className="badge badge-success">
      Paid
    </div>
  ) : request.status === "declined" ? (
    <div className="badge badge-error">
      Request Declined
    </div>
  ) :
  request.status === 'approved' ? (
      <div className="badge badge-soft">
      Awaiting Payment
    </div>
  )
  :
  (
    <div className="badge badge-warning">
      Awaiting Lawyer Approval
    </div>
  )
}
                    </td>

                    <td>

                      <div className="flex gap-2">
{/*

{
    "_id": "6a399ad94af7c5fb10e86f9b",
    "lawyerId": "6a369816dfe529732b664825",
    "lawyerName": "Eleanor Vance",
    "fee": 556,
    "requested_by": "6a3968d7f2853813c1b63117",
    "status": "approved",
    "created_at": "2026-06-22T20:28:09.123Z",
    "updated_at": "2026-06-23T08:54:16.278Z",
    "payment": null,
    "profile": {
        "_id": "6a369816dfe529732b664825",
        "lawyer_id": "6a3697df3643bfb2b77e333b",
        "bio": "Eleanor Vance specializes in strategic tax planning, asset protection, and comprehensive legal consultation for high-net-worth individuals and growing businesses. With over a decade of experience navigating complex state and federal tax codes, Eleanor helps clients minimize liabilities, stay strictly compliant, and proactively prepare for audits.\n\nKnown for her sharp analytical mind and clear communication, she translates dense legal jargon into actionable business strategies. Whether structuring a new corporate entity or resolving an IRS dispute, Eleanor provides the steady, expert guidance needed to protect her clients' financial futures.",
        "createdAt": "2026-06-21T19:57:18.210Z",
        "fee": 556,
        "imageUrl": "https://i.ibb.co/pjmzfFR5/nussbaum-law-IOvs-EAEjn-DE-unsplash.jpg",
        "name": "Eleanor Vance",
        "public": true,
        "specializations": [
            "Employment Law",
            "Family Law"
        ],
        "status": "active"
    }
}

*/}
                        <form action="/api/checkout_sessions" method="POST">
                <input type="hidden" name="lawyerId" value={request.lawyerId} />
                <input type="hidden" name="lawyerName" value={request.lawyerName} />
                <input type="hidden" name="fee" value={request.fee} />
                <input type="hidden" name="reqID" value={request._id} />
      <section>
   
                        <button    disabled={request.status !== "approved"} className="btn btn-sm btn-outline">

                          <Eye size={16} />

                          Pay Now

                        </button>
      </section>
    </form>


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