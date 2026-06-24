'use client';

import { useState } from 'react';
import { Pencil, MessageSquare } from 'lucide-react';

export default function EditCommentModal({
  comment,
  onSubmit,
}) {

  const [text, setText] = useState(
    comment.comment
  );

  const [loading, setLoading] =
    useState(false);

  const modalId = `edit-comment-${comment._id}`;

  const handleSubmit = async () => {

    if (text.trim().length < 10) {
      alert(
        'Comment must be at least 10 characters.'
      );
      return;
    }

    try {

      setLoading(true);

      await onSubmit(text);

      document
        .getElementById(modalId)
        ?.close();

    } finally {

      setLoading(false);

    }

  };

  return (

    <>
      <button
        className="btn btn-success btn-sm btn-outline"
        onClick={() =>
          document
            .getElementById(modalId)
            ?.showModal()
        }
      >
        <Pencil size={15} />
        Edit
      </button>

      <dialog
        id={modalId}
        className="modal"
      >

        <div className="modal-box bg-base-200 border border-success/20">

          <div className="flex items-center gap-3 mb-6">

            
            <div>

           

              <p className="text-sm opacity-70">
                Update your comment.
              </p>

            </div>

          </div>

          <textarea
            className="textarea textarea-bordered w-full min-h-40"
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />

          <div className="text-xs opacity-60 mt-2">

            {text.length} characters

          </div>

          <div className="modal-action">

            <form method="dialog">

              <button className="btn">
                Cancel
              </button>

            </form>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn btn-success"
            >

              {loading
                ? 'Saving...'
                : 'Save Changes'}

            </button>

          </div>

        </div>

        <form
          method="dialog"
          className="modal-backdrop"
        >

          <button>
            close
          </button>

        </form>

      </dialog>
    </>
  );
}