'use client';

import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';

import { showToast } from '@/action/simpleFunctions';
import { Scale } from 'lucide-react';
import { changeUserRole, completeRegistration } from '@/action/apiProfile';

export default function ChooseRole({ user }) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');

  const handleRoleChange = async (selectedRole) => {

    try {

      setLoading(true);
      setRole(selectedRole);

    //   await changeUserRole(
    //     user.id,
    //     selectedRole
    //   );
      const res = await completeRegistration({
        role: selectedRole
        });
        console.log(res, "+++++++++++++++++++++++_______________+++++++++++++++++++");
      showToast(
        'Account type selected!',
        'success'
      );

      router.refresh();
      redirect('/dashbaord');

    } catch (error) {

   

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">

      <div className="max-w-2xl w-full">

        <div className="card bg-base-200 border border-primary/20 shadow-xl">

          <div className="card-body p-8">

            <div className="flex justify-center mb-6">

              <div className="bg-warning p-4 rounded-2xl">

                <Scale
                  size={32}
                  className="text-white"
                />

              </div>

            </div>

            <h2 className="text-3xl font-bold text-center">
              Welcome to LegalEase
            </h2>

            <p className="text-center opacity-70 mt-2 mb-8">
              Choose how you want to use the platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <button
                disabled={loading}
                onClick={() =>
                  handleRoleChange('client')
                }
                className={`
                  p-6 rounded-2xl border text-left border-success/20 transition-all
                  hover:border-primary/20 hover:bg-warning/10
                  ${role === 'client'
                    ? 'border-warning bg-warning/10'
                    : 'border-base-300'
                  }
                `}
              >
                <h4 className="font-bold text-lg">
                  Client
                </h4>

                <p className="text-sm opacity-70 mt-2">
                  Hire lawyers, request consultations,
                  track payments and manage legal matters.
                </p>

              </button>

              <button
                disabled={loading}
                onClick={() =>
                  handleRoleChange('lawyer')
                }
                className={`
                  p-6 rounded-2xl border border-primary/20 text-left transition-all
                  hover:border-success/20 hover:bg-warning/10
                  ${role === 'lawyer'
                    ? 'border-warning bg-warning/10'
                    : 'border-base-300'
                  }
                `}
              >
                <h4 className="font-bold text-lg">
                  Lawyer
                </h4>

                <p className="text-sm opacity-70 mt-2">
                  Publish legal services, receive hiring
                  requests and earn from consultations.
                </p>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}