"use client";

import { useEffect, useState } from "react";
import {
  Scale,
  Upload,
  BriefcaseBusiness,
  DollarSign,
  Pencil,
  Trash2,
  BriefcaseBusinessIcon,
} from "lucide-react";
import { showToast, uploadToImgBB } from "@/action/simpleFunctions";
import { createProfile, updateData } from "@/action/apiProfile";
import { authClient } from "@/lib/auth-client";
import FormLoader from "@/componenet/shared/FormLoader";
import LawyerCard from "@/componenet/shared/LawyerCard";
import { fetchReQuest, getUserProfileLaywer } from "@/data/dataFetch";


export default  function Page() {
   const { data: session, isPending } =  authClient.useSession();
   const [saving, setSaving] = useState(false);
   const [errors, setErrors] = useState({});
   const existingProfile =  getUserProfileLaywer(session?.user?.id);
   //console.log('user if rom', session?.user?.id);
   //console.log('exisitngProfile', existingProfile);
const [formData, setFormData] = useState({
  name: "",
  specializations: [],
  fee: 0,
  bio: "",
  image: null,
  imagePreview: "",
  imageUrl: ""
});
const legalServices = [
  "Criminal Law",
  "Family Law",
  "Corporate Law",
  "Property Law",
  "Immigration Law",
  "Tax Law",
  "Employment Law",
  "Contract Review",
  "Legal Consultation",
  "Business Registration",
];
 


  //state for getting exiting profile data
  const [exisitngProfile, setProfile] =
  useState(null);

useEffect(() => {

  if (!session?.user?.id)
    return;

  const loadProfile =
    async () => {

      const data =
        await getUserProfileLaywer(
          session.user.id
        );

      setProfile(data);
       setProfile(data);

    setFormData({
      name: data?.name || "",
      specializations:
        data?.specializations || [],
      fee: data?.fee || "",
      bio: data?.bio || "",
      image: null,
      imagePreview: "",
      imageUrl:
        data?.imageUrl || "",
    });
    };

  loadProfile();

}, [session]);
//console.log('profile', exisitngProfile);
//console.log('formdata', formData);
 const handleChange = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]:
      field === "fee"
        ? Number(value)
        : value,
  }));
};
  
  const handleImage = async(e) => {
    const file = e.target.files?.[0];

    if (!file) return;
    console.log('kimage chnaged');
    setFormData((prev) => ({
      ...prev,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));
    //imagebbupload
       // console.log(formData);
  

  };
  
  const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
  }

  if (!formData.specializations.length) {
    newErrors.specializations =
      "Select at least one specialization";
  }

  if (!formData.fee) {
    newErrors.fee = "Consultation fee is required";
  }

  if (!formData.bio.trim()) {
    newErrors.bio = "Professional bio is required";
  }



  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  const handleSubmit = async (e) => {
    
    e.preventDefault();
     if (!validateForm()) {
    return;
  }
    let imageUrl = "";
      setSaving(true);
    const {image, imagePreview, ...filteredformdata} = formData;
        console.log(formData.image)
    if (formData.image) {
      imageUrl = await uploadToImgBB(
        formData.image
      );
      
    }

    else if(formData.imageUrl){
      imageUrl = formData.imageUrl;
    }
    else{

    }

    //console.log(imageUrl, 'asdasdsaimage');

    const payload = {
      ...filteredformdata,
      imageUrl,
      lawyer_id : session?.user?.id,
      status : 'active',
      public : true,
      createdAt: new Date()

    }
    console.log('payload', payload);
    const res = await createProfile(payload);
    console.log(res, "response from profile creation");
      setSaving(false);
    if(res.acknowledged){
      showToast('Legal Profile Updated', 'success');
      updateData();
    }
    else{
      showToast('Something Went Wrong', 'error');
    }
    // imgBB upload
    // save profile
  };

  return (
    <div className="space-y-8">
      {/* Header */}
        {saving && <FormLoader />}
      <div className="card bg-base-200 border border-warning/20 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div className="bg-success text-white p-4 rounded-2xl">
              <BriefcaseBusinessIcon size={28} />
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
    className={`input input-bordered w-full ${
      errors.name ? "input-error" : ""
    }`}
    placeholder="John Smith"
    value={formData.name}
    onChange={(e) =>
      handleChange("name", e.target.value)
    }
  />

  {errors.name && (
    <p className="text-error text-sm mt-1">
      {errors.name}
    </p>
  )}
                </div>

                <div>
  <label className="label">
    <span className="label-text">
      Legal Services
    </span>
  </label>

  <div className="grid grid-cols-2 gap-3">
    {legalServices.map((service) => (
      <label
        key={service}
        className="label cursor-pointer justify-start gap-3 border border-base-300 rounded-lg p-3 hover:bg-base-300"
      >
        <input
          type="checkbox"
          className="checkbox checkbox-warning"
          checked={formData.specializations.includes(service)}
          onChange={(e) => {
            if (e.target.checked) {
              setFormData((prev) => ({
                ...prev,
                specializations: [
                  ...prev.specializations,
                  service,
                ],
              }));
            } else {
              setFormData((prev) => ({
                ...prev,
                specializations:
                  prev.specializations.filter(
                    (item) => item !== service
                  ),
              }));
            }
          }}
        />

        <span>{service}</span>
      </label>
      
    ))}
                                           {errors.specializations && (
    <p className="text-error text-sm mt-1">
      {errors.specializations}
    </p>
      )}
  </div>
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
                                        {errors.fee && (
    <p className="text-error text-sm mt-1">
      {errors.fee}
    </p>
      )}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Profile Image
                    </span>
                  </label>

                  <input
                    type="file"
                    className={`file-input file-input-bordered w-full ${
      errors.image ? "input-error" : ""
    }`}
                    accept="image/*"
                    onChange={handleImage}
                  />
                                                       {errors.image && (
    <p className="text-error text-sm mt-1">
      {errors.image}
    </p>
      )}
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Professional Bio
                    </span>
                  </label>

                  <textarea
                                       className={`textarea textarea-bordered h-40 w-full ${
      errors.bio ? "input-error" : ""
    }`}
                    placeholder="Describe your experience, achievements and expertise..."
                    value={formData.bio}
                    onChange={(e) =>
                      handleChange(
                        "bio",
                        e.target.value
                      )
                    }
                  />
                                                     {errors.bio && (
    <p className="text-error text-sm mt-1">
      {errors.bio}
    </p>
      )}
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

             <LawyerCard lawyer={formData} />

      



              {
                formData.bio == '' &&   <p className="text-base-content/70 mt-5">
                {
                  "Your profile preview will appear here."}
              </p>
              }
            
            </div>
          </div>
          
        </div>
       
      </div>

   
    </div>
  );
}