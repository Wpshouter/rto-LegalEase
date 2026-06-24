'use client';

import Link from 'next/link';
import {
  MessageSquare,
  CalendarDays,
  Scale,
  ExternalLink,
  Trash2,
} from 'lucide-react';

import { FormateDateForis, showToast } from '@/action/simpleFunctions';
import { deleteComment, editComment, updateData } from '@/action/apiProfile';
import EditCommentModal from './EdiutComment';



export default function UserReviewsPage({
  user, comments = [],
}) {
    const handleDelete = async (commentId) => {

  const confirmed = window.confirm(
    'Are you sure you want to delete this comment?'
  );

  if (!confirmed) return;
  console.log(commentId);
  const res = await deleteComment(commentId, user?.id );
  console.log('delect comment response', res);
  if(res.success){
    showToast('Comment Deleted', 'success');
    updateData();
  }
  else{
    showToast(res.message, 'error');
  }
  // delete API call here
};


  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

          <div className="flex items-center gap-4">

            <div className="">

              <MessageSquare size={28} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                My Comments
              </h1>

              <p className="text-base-content/70">
                Reviews you've submitted for lawyers you've hired.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <p className="text-base-content/60 text-sm">
              Total Reviews
            </p>

            <h2 className="text-3xl font-bold text-success">
              {comments.length}
            </h2>

          </div>

        </div>

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <p className="text-base-content/60 text-sm">
              Lawyers Reviewed
            </p>

            <h2 className="text-3xl font-bold">
              {
                new Set(
                  comments.map(
                    item => item.lawyerId
                  )
                ).size
              }
            </h2>

          </div>

        </div>

        <div className="card bg-base-200 border border-success/20 shadow-xl">

          <div className="card-body">

            <p className="text-base-content/60 text-sm">
              Latest Review
            </p>

            <h2 className="text-lg font-bold">

              {comments[0]
                ? FormateDateForis(
                    comments[0]
                      .createdAt
                  )
                : '--'}

            </h2>

          </div>

        </div>

      </div>

      {/* Reviews */}

      <div className="card bg-base-200 border border-success/20 shadow-xl">

        <div className="card-body">

    

          {comments.length === 0 ? (

            <div className="text-center py-16">

              <MessageSquare
                size={56}
                className="mx-auto opacity-20 mb-4"
              />

              <h3 className="text-xl font-semibold">
                No Reviews Yet
              </h3>

              <p className="text-base-content/60">
                Reviews you leave for lawyers
                will appear here.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {comments.map(
                comment => (

                  <div
                    key={comment._id}
                    className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden"
                  >

                    <div className="p-5">

                      <div className="flex flex-col lg:flex-row gap-6">

                        {/* Lawyer */}

                        <div className="lg:w-72 shrink-0">

                          <div className="flex gap-4">

                            <img
                              src={
                                comment
                                  .lawyer
                                  ?.imageUrl
                              }
                              alt={
                                comment
                                  .lawyer
                                  ?.name
                              }
                              className="w-20 h-20 rounded-xl object-cover"
                            />

                            <div>

                              <h3 className="font-bold text-lg">

                                {
                                  comment
                                    .lawyer
                                    ?.name
                                }

                              </h3>

                              <p className="text-sm opacity-60 mb-2">
                                Lawyer
                              </p>

                              <div className="flex flex-wrap gap-2">

                                {comment.lawyer?.specializations?.map(
                                  spec => (

                                    <div
                                      key={
                                        spec
                                      }
                                      className="badge badge-outline"
                                    >

                                      {spec}

                                    </div>

                                  )
                                )}

                              </div>

                            </div>

                          </div>

                        </div>

                        {/* Review */}

                        <div className="flex-1">

                          <div className="flex flex-wrap justify-between gap-4 mb-4">

                            <div className="flex items-center gap-2 text-sm opacity-60">

                              <CalendarDays size={15} />

                              {FormateDateForis(
                                comment.createdAt
                              )}

                            </div>

                            <div className="badge badge-success">
                              Submitted
                            </div>

                          </div>

                          <div className="bg-base-200 rounded-xl p-5">

                            <p className="leading-relaxed">

                              "
                              {
                                comment.comment
                              }
                              "

                            </p>

                          </div>

                          <div className="mt-4  flex gap-3 items-center">

                            <Link
                              href={`/lawyers/${comment.lawyerId}`}
                              className="btn btn-sm btn-outline"
                            >

                              <Scale
                                size={
                                  16
                                }
                              />

                              View Lawyer

                              <ExternalLink
                                size={
                                  14
                                }
                              />

                            </Link>

                            <EditCommentModal
  comment={comment}
  onSubmit={async (newComment) => {

    const res = await editComment(
      comment._id,
      {
        userId: user?.id,
        comment: newComment,
      }
    );


    if(res.success){
        showToast('Comment Updated!', 'success');
    }
    else{
        showToast(res.message, 'error');
    }
    updateData();

  }}
/>

                              <button   onClick={() => handleDelete(comment._id)} className='btn btn-error  btn-sm btn-outline'>
                               <Trash2 size={15} /> Delete
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}