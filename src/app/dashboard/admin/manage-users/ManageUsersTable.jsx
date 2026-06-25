'use client';

import { changeUserRole, deleteUser } from '@/action/apiProfile';
import { showToast } from '@/action/simpleFunctions';
import {
  Users,
  Trash2,
  Shield,
} from 'lucide-react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';



export default function ManageUsersTable({
  users,
}) {


  const handleDelete =
    async (userId) => {
        console.log(userId);
      const confirmed =
        window.confirm(
          'Are you sure you want to delete this user?'
        );

      if (!confirmed) {
        return;
      }

      await deleteUser(
        userId
      );

        showToast('User Deleted!', 'error');
    };

  const handleRoleChange =
    async (
      userId,
      role
    ) => {
        if(role == '') return;
      await changeUserRole(
        userId,
        role
      );
        showToast('User role changed!', 'success');

    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="card bg-base-200 border border-primary/20 shadow-xl">

        <div className="card-body">

          <div className="flex items-center gap-4">

            <div className="bg-primary text-white p-4 rounded-2xl">

              <Users size={28} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">

                Manage Users

              </h1>

              <p className="opacity-70">

                Manage clients and lawyers.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="card bg-base-200 border border-primary/20 shadow-xl">

        <div className="card-body">

          <div className="flex justify-between items-center mb-6">

            <h2 className="card-title text-2xl">

              User Directory

            </h2>

            <div className="badge badge-primary badge-lg">

              {users.length} Users

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="table">

              <thead>

                <tr>

                  <th>User</th>

                  <th>Email</th>

                  <th>Role</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {users.map(
                  (user) => (
                    user.role === 'admin' ? null :
                    <tr
                      key={user.id}
                    >

                      <td>

                        <div className="flex items-center gap-3">

                          <div className="avatar placeholder">

                            <div className="bg-primary text-white rounded-full w-12 flex justify-center items-center">

                              <span>

                                {user.name?.charAt(
                                  0
                                )}
               
                              </span>

                            </div>

                          </div>

                          <div>

                            <div className="font-semibold">

                              {user.name}

                            </div>

                          </div>

                        </div>

                      </td>

                      <td>

                        {user.email}

                      </td>

                      <td>

                        <div
                          className={`badge ${
                            user.role ===
                            'lawyer'
                              ? 'badge-success'
                              : 'badge-info'
                          }`}
                        >

                          {user.role}

                        </div>

                      </td>

                      <td>

                        <div className="flex flex-wrap gap-8">

                          <select defaultValue=""
                            className="select select-bordered select-sm grid item-center justify-center max-w-[120px]"
                            value={
                              user.role
                            }
                            onChange={(
                              e
                            ) =>
                              handleRoleChange(
                                user?._id,
                                e.target
                                  .value
                              )
                            }
                          >
                            <option  value="">
                              Select to chnage
                            </option>
                            <option value="client">

                              Client

                            </option>

                            <option value="lawyer">

                              Lawyer

                            </option>

                          </select>

                          <button
                            onClick={() =>
                              handleDelete(
                                user?._id
                              )
                            }
                            className="btn btn-error btn-sm"
                          >

                            <Trash2
                              size={
                                15
                              }
                            />

                            Delete

                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

            {!users.length && (

              <div className="text-center py-16">

                <Shield
                  size={50}
                  className="mx-auto opacity-30 mb-4"
                />

                <h3 className="text-xl font-semibold">

                  No Users Found

                </h3>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );

}