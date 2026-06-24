'use client';

import {
  MessageSquare,
  User,
  CalendarDays,
} from 'lucide-react';

import { FormateDateForis } from '@/action/simpleFunctions';

export default function LawyerComments({
  comments = [],
}) {

  return (

    <div className="card bg-base-200 border border-success/20 shadow-xl">

      <div className="card-body">

   


          <div>

       

            <p className="text-base-content/60">
              Verified reviews from clients who hired this lawyer.
            </p>

          

        </div>

        {comments.length === 0 ? (

          <div className="text-center py-12">

            <MessageSquare
              size={50}
              className="mx-auto opacity-20 mb-4"
            />

            <h3 className="text-xl font-semibold">
              No Reviews Yet
            </h3>

            <p className="text-base-content/60">
              Reviews from clients will appear here.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {comments.map(comment => (

              <div
                key={comment._id}
                className="bg-base-100 border border-base-300 rounded-2xl p-5"
              >

                <div className="flex gap-4">

                  <div className="avatar placeholder">

                    <div className="bg-success text-white rounded-full w-12 flex items-center justify-center">

                      <User size={18} />

                    </div>

                  </div>

                  <div className="flex-1">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">

                      <div>

                        <h3 className="font-bold text-lg">
                          {comment.user?.name}
                        </h3>

                     

                      </div>

                      <div className="flex items-center gap-2 text-sm opacity-60">

                        <CalendarDays size={14} />

                        {FormateDateForis(
                          comment.createdAt
                        )}

                      </div>

                    </div>

                    <p className="leading-relaxed text-base-content/80">
                      {comment.comment}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}