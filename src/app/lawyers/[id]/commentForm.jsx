'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Star,
  Send,
} from 'lucide-react';
import { saveComment } from '@/action/apiProfile';
import { showToast } from '@/action/simpleFunctions';

export default function LawyerReviewForm({userId, lawyerId,canUserComment}) {


  const [comment, setComment] =
    useState('');

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    const payload = {
      lawyerId,
      userId,
      comment,
      reqId: canUserComment?.reqID,
      paymentDataId: canUserComment?.paymentDataId,
      createdAt:new Date(),

    };
    if(payload.comment.trim().length < 10){
        showToast('Comment must have more than 10 character', 'error') 
        return;
    }
    console.log(payload);
    const res = await saveComment(payload);
    if(res.success){
        showToast('Comment Submitted!', 'success')
    }
    else{
          showToast(res.message, 'error') 
    }
    console.log(res, '_________________++++++++++++++++_______________');


    // submit review here

  };

  return (
    <div className="card bg-base-200 border border-success/20 shadow-xl">

      <div className="card-body">

        <div className="flex items-center gap-3 mb-6">

        

          <div>

       

            <p className="text-base-content/60">
              Share your experience with this lawyer.
            </p>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

   

          {/* Comment */}

          <div>

            <label className="font-medium mb-3 block">
              Your Comment
            </label>

            <textarea
              className="textarea textarea-bordered w-full min-h-40"
              placeholder="Tell others about your experience working with this lawyer..."
              value={comment}
              onChange={(e) =>
                setComment(
                  e.target.value
                )
              }
            />

          </div>

          {/* Submit */}

          <div className="flex justify-end">

            <button
              type="submit"
              className="btn btn-success gap-2"
            >

              <Send size={16} />

              Submit

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}