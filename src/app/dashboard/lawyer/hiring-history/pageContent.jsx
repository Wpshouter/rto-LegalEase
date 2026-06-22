'use client'
import { updateHiringRequestStatus } from "@/action/apiProfile";
import { FormateDateForis } from "@/action/simpleFunctions";
import {
  Scale,
  CheckCircle2,
  XCircle,
  Clock3,
  Eye,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LawyerRequestsPage({user,requests}) {
    const router = useRouter();
    const handleApprove = async (requestId) => {
        // Implement approve logic here
        console.log("Approved request ID:", requestId);
        const payload = {
            requestId,
            user,
            status: 'approved'
        }
        console.log(payload, "payload for approve request");
        const response = await updateHiringRequestStatus(payload);
        console.log('Response from approve request:', response);
        router.refresh();

        // You can add code here to send the approval action to your backend or perform any other actions needed.
    }
/*[
    {
        "_id": "6a3984c487c9f54a7c2fc7c4",
        "lawyerId": "6a369816dfe529732b664825",
        "lawyerName": "Eleanor Vance",
        "fee": 556,
        "requested_by": "6a3984b4f2853813c1b6311a",
        "status": "pending",
        "created_at": "2026-06-22T18:53:56.090Z",
        "user": {
            "_id": "6a3984b4f2853813c1b6311a",
            "name": "client1@client.com",
            "email": "client1@client.com"
        }
    }
]*/
//   const requests = [
//     {
//       _id: "1",
//       lawyerId: "6a369816dfe529732b664825",
//       lawyerName: "Eleanor Vance",
//       fee: 556,
//       requested_by: "6a3984b4f2853813c1b6311a",
//       requesterName: "Ahmed Rahman",
//       status: "pending",
//       created_at: "2026-06-22T18:53:56.090Z",
//     },
//     {
//       _id: "2",
//       lawyerId: "6a369816dfe529732b664825",
//       lawyerName: "Eleanor Vance",
//       fee: 320,
//       requesterName: "Sarah Johnson",
//       status: "approved",
//       created_at: "2026-06-20T18:53:56.090Z",
//     },
//   ];

  const statusBadge = (status) => {

    if (status === "pending") {
      return (
        <div className="badge badge-warning gap-1">
          <Clock3 size={12} />
          Pending
        </div>
      );
    }

    if (status === "approved") {
      return (
        <div className="badge badge-success gap-1">
          <CheckCircle2 size={12} />
          Approved
        </div>
      );
    }

    return (
      <div className="badge badge-error gap-1">
        <XCircle size={12} />
        Declined
      </div>
    );
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
                Hiring Requests
              </h1>

              <p className="text-base-content/70">
                Review and manage incoming client requests.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Table */}

      <div className="card bg-base-200 border border-warning/20 shadow-xl">

        <div className="card-body">

          <div className="flex justify-between items-center mb-4">

            <div>

              <h2 className="card-title text-2xl">
                Client Requests
              </h2>

              <p className="text-base-content/60">
                Approve or decline consultation requests.
              </p>

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="table">

              <thead>

                <tr>

                  <th>Client</th>

                  <th>Fee</th>

                  <th>Requested On</th>

                  <th>Status</th>

                  <th className="text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {requests.map((request) => (

                  <tr key={request._id}>

                    <td>

                      <div className="flex items-center gap-3">

                        <div className="avatar placeholder">

                          <div className="bg-warning text-white rounded-full w-12">

                            <User size={18} />

                          </div>

                        </div>

                        <div>

                          <div className="font-semibold">
                            {request.user.name}
                          </div>

                          <div className="text-sm opacity-70">
                      
                          </div>

                        </div>

                      </div>

                    </td>

                    <td>

                      <span className="font-bold">
                        ${request.fee}
                      </span>

                    </td>

                    <td>

                       {FormateDateForis(request.created_at)}

                    </td>

                    <td>
                      {statusBadge(
                        request.status
                      )}
                    </td>

                    <td>

                      <div className="flex justify-center gap-3">


                        {request.status === "pending" && (
                          <>
                            <button onClick={() => handleApprove(request._id)} className="btn btn-sm btn-outline">
                              Approve
                            </button>

                            <button onClick={() => handleDecline(request._id)} className="btn btn-sm btn-error">
                              Decline
                            </button>
                          </>
                        )}

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