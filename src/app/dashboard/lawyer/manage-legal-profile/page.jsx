"use client";

import { useState } from "react";
import {
  Scale,
  Upload,
  BriefcaseBusiness,
  DollarSign,
  Pencil,
  Trash2,
} from "lucide-react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    fee: "",
    bio: "",
    image: null,
    imagePreview: "",
  });

  const services = [
    {
      id: 1,
      name: "Divorce Consultation",
      category: "Family Law",
      fee: "$120",
      status: "Published",
    },
    {
      id: 2,
      name: "Corporate Contract Review",
      category: "Corporate Law",
      fee: "$250",
      status: "Published",
    },
    {
      id: 3,
      name: "Criminal Defense Consultation",
      category: "Criminal Law",
      fee: "$180",
      status: "Draft",
    },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // imgBB upload
    // save profile
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
                Manage Legal Profile
              </h1>

              <p className="text-base-content/70">
                Build a professional profile that inspires confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form */}

        <div className="lg:col-span-2">
          <div className="card bg-base-200 shadow-xl border border-warning/20">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">
                Lawyer Information
              </h2>

              <p className="text-base-content/60 mb-4">
                These details will be displayed on your public profile.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="label">
                    <span className="label-text">
                      Full Name
                    </span>
                  </label>

                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      handleChange(
                        "name",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Specialization
                    </span>
                  </label>

                  <select
                    className="select select-bordered w-full"
                    value={formData.specialization}
                    onChange={(e) =>
                      handleChange(
                        "specialization",
                        e.target.value
                      )
                    }
                  >
                    <option value="">
                      Select specialization
                    </option>

                    <option>
                      Criminal Law
                    </option>

                    <option>
                      Family Law
                    </option>

                    <option>
                      Corporate Law
                    </option>

                    <option>
                      Property Law
                    </option>

                    <option>
                      Immigration Law
                    </option>

                    <option>
                      Tax Law
                    </option>

                    <option>
                      Employment Law
                    </option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Consultation Fee
                    </span>
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    <DollarSign size={18} />

                    <input
                      type="number"
                      className="grow"
                      placeholder="100"
                      value={formData.fee}
                      onChange={(e) =>
                        handleChange(
                          "fee",
                          e.target.value
                        )
                      }
                    />
                  </label>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Profile Image
                    </span>
                  </label>

                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Professional Bio
                    </span>
                  </label>

                  <textarea
                    className="textarea textarea-bordered h-40 w-full"
                    placeholder="Describe your experience, achievements and expertise..."
                    value={formData.bio}
                    onChange={(e) =>
                      handleChange(
                        "bio",
                        e.target.value
                      )
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-full"
                >
                  Save Profile
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Preview */}

        <div>
          <div className="card bg-base-200 border border-warning/20 shadow-xl sticky top-24">
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                Live Preview
              </h2>

              <div className="avatar mx-auto mt-4">
                <div className="w-28 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      formData.imagePreview ||
                      "https://placehold.co/300x300"
                    }
                    alt="preview"
                  />
                </div>
              </div>

              <h3 className="font-bold text-xl mt-4">
                {formData.name ||
                  "Lawyer Name"}
              </h3>

              <div className="badge badge-warning badge-lg mt-2">
                {formData.specialization ||
                  "Specialization"}
              </div>

              <div className="badge badge-outline mt-3 gap-2">
                <BriefcaseBusiness size={14} />
                $
                {formData.fee || "0"} Consultation
              </div>

              <p className="text-base-content/70 mt-5">
                {formData.bio ||
                  "Your profile preview will appear here."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}

      <div className="card bg-base-200 border border-warning/20 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title text-2xl">
                My Legal Services
              </h2>

              <p className="text-base-content/60">
                Services available to clients.
              </p>
            </div>

            <button className="btn btn-warning">
              Add Service
            </button>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Fee</th>
                  <th>Status</th>
                  <th className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td className="font-medium">
                      {service.name}
                    </td>

                    <td>
                      {service.category}
                    </td>

                    <td>{service.fee}</td>

                    <td>
                      <div
                        className={`badge ${
                          service.status ===
                          "Published"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {service.status}
                      </div>
                    </td>

                    <td>
                      <div className="flex justify-center gap-2">
                        <button className="btn btn-sm btn-ghost">
                          <Pencil size={16} />
                        </button>

                        <button className="btn btn-sm btn-error btn-outline">
                          <Trash2 size={16} />
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