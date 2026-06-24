'use client';
import { saveHiringRerequest } from "@/action/apiProfile";
import { showToast } from "@/action/simpleFunctions";
import { authClient } from "@/lib/auth-client";
import {
  Scale,
  DollarSign,
  Calendar,
  BadgeCheck,
  BriefcaseBusiness,
  MessageSquare,
  Info,
  LogIn,
} from "lucide-react";
import { redirect } from "next/navigation";
import LawyerReviewForm from "./commentForm";
import LawyerComments from "./commentDisplay";
import Link from "next/link";

export default  function LawyerDetailsPage({ comments, lawyer, canUserComment }) {
  console.log(canUserComment, 'fromdetailsaopge');
 const { data: session } = authClient.useSession()
 console.log('user from lawyer details page', session);
 console.log(comments, 'commentsfromdetailspage');
  const handle_hiring_request_click = async(e) => {
    console.log('Hiring request sent for lawyer:', e.target);
    const payload = {
      lawyerId: lawyer._id,
      lawyerName: lawyer.name,
      fee: lawyer.fee,
      requested_by: session?.user?.id, // Replace with actual user ID from your authentication system
      'status': 'pending',
      created_at: new Date(),
    }
        console.log('Payload for hiring request:', payload);
    const response = await saveHiringRerequest(payload);
    console.log('Response from hiring request:', response);
    if(response?.success) {
      showToast(response.message, 'success');
      redirect('/dashboard/user/hiring-requests');
    } else {
      showToast('Failed to send hiring request.', 'error');
    }
    // You can add code here to send the hiring request to your backend or perform any other actions needed.
  }
  const joinedDate =
    new Date(
      lawyer.createdAt
    ).toLocaleDateString();
console.log(lawyer, "lawyer from details page");
  return (
    <div className="">

      {/* HERO */}

      <div className="card bg-base-200 border border-warning/20 shadow-2xl overflow-hidden">

        <div className="grid lg:grid-cols-3 gap-0">

          {/* IMAGE */}

          <div className="relative h-[450px]">

            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          </div>

          {/* DETAILS */}

          <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-4">

              <div className="badge badge-success badge-lg">
                Available
              </div>

              <div className="badge badge-warning badge-lg">
                Verified Lawyer
              </div>

            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {lawyer.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">

              {lawyer.specializations.map(
                (spec) => (
                  <div
                    key={spec}
                    className="badge badge-outline badge-warning p-4"
                  >
                    {spec}
                  </div>
                )
              )}

            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">

              <div className="bg-base-100 rounded-2xl p-4">

                <DollarSign
                  className="text-warning mb-2"
                  size={24}
                />

                <p className="text-sm opacity-70">
                  Consultation Fee
                </p>

                <h3 className="text-2xl font-bold">
                  ${lawyer.fee}
                </h3>

              </div>

              <div className="bg-base-100 rounded-2xl p-4">

                <Calendar
                  className="text-warning mb-2"
                  size={24}
                />

                <p className="text-sm opacity-70">
                  Joined
                </p>

                <h3 className="font-semibold">
                  {joinedDate}
                </h3>

              </div>

              <div className="bg-base-100 rounded-2xl p-4">

                <BriefcaseBusiness
                  className="text-warning mb-2"
                  size={24}
                />

                <p className="text-sm opacity-70">
                  Status
                </p>

                <h3 className="font-semibold capitalize">
                  {lawyer.status}
                </h3>

              </div>

            </div>
            {
              session?.user ?     <> <button
              onClick={() =>
                document
                  .getElementById("hire_modal")
                  .showModal()
              }
              className="btn btn-warning btn-lg max-w-xs"
            >
              <Scale size={18} />
              Hire Lawyer
            </button> </> :  <>
            <Link href="/auth/signin">
            <button
              className="btn btn-warning btn-lg max-w-xs"
            >
              <LogIn size={18} />
              Login to Hire
            </button>
            </Link>
            </>
            }
       

          </div>

        </div>

      </div>

      {/* BIO */}

      <div className="card bg-base-200 border border-warning/20 shadow-xl mt-8">

        <div className="card-body">

          <div className="flex items-center gap-3 mb-3">

            <BadgeCheck
              className="text-warning"
            />

            <h2 className="text-2xl font-bold">
              Professional Summary
            </h2>

          </div>

          <p className="leading-8 text-base-content/80 whitespace-pre-line">
            {lawyer.bio}
          </p>

        </div>

      </div>

      {/* COMMENTS */}

      {
         session?.user ?   <>
                    <div className="card bg-base-200 border border-warning/20 shadow-xl mt-8">

        <div className="card-body">

          <div className="flex items-center gap-3 mb-6">

            <MessageSquare
              className="text-warning"
            />

            <h2 className="text-2xl font-bold">
              Client Comment
            </h2>

          </div>
            {
              canUserComment.canComment == true ? 
              <><div className="alert alert-info shadow-sm"><Info size={18} /><span>You can leave a comment for this lawyer because you have successfully hired their services.</span></div>
                <LawyerReviewForm userId={session?.user?.id}  lawyerId={lawyer._id} canUserComment={canUserComment}/></>
              : ''
            }
            {
              comments.length > 0 ? <LawyerComments comments={comments} /> :

                <div className="text-center py-12 opacity-60">

            No Comment yet.
              
          </div>
            }
           
        

        </div>

      </div>

      {/* HIRE MODAL */}

      <dialog
        id="hire_modal"
        className="modal"
      >

        <div className="modal-box bg-base-200">

          <h3 className="font-bold text-2xl mb-3">

            Confirm Hiring

          </h3>

          <p className="mb-4">

            You are about to hire request to
            <span className="font-bold">
              {" "}
              {lawyer.name}
            </span>

            {" "}for a consultation fee of

            <span className="font-bold text-warning">
              {" "} ${lawyer.fee}
            </span>
            {". "}You can pay from your dashboard once they accept your hiring request.
          </p>

          <div className="modal-action">

            <form method="dialog">

              <button className="btn">
                Cancel
              </button>

            </form>
            
              <button onClick={(e)=> handle_hiring_request_click(e)} className="btn btn-warning">

              Send Request

            </button>

                {/* <form action="/api/checkout_sessions" method="POST">
                <input type="hidden" name="lawyerId" value={lawyer._id} />
                <input type="hidden" name="lawyerName" value={lawyer.name} />
                <input type="hidden" name="fee" value={lawyer.fee} />
      <section>
      <button className="btn btn-warning">

              Proceed to Payment

            </button>
      </section>
    </form> */}
    {/*
    
                lawyerId: lawyer.lawyer_id,
        lawyerName: lawyer.name,
        fee: lawyer.fee,

    */}
          </div>

        </div>

      </dialog>
         </> : ''
      }



    </div>
  );
}