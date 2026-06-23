'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Bounce, toast } from 'react-toastify';


import { useEffect, useState } from "react";
import { showToast, uploadToImgBB } from "@/action/simpleFunctions";
import FormLoader from "@/componenet/shared/FormLoader";
import Image from 'next/image';

const UpdateFormNew = ({user}) => {

   const [saving, setSaving] = useState(false);
   const [errors, setErrors] = useState({});

   //console.log('user if rom', session?.user?.id);
   //console.log('exisitngProfile', existingProfile);
const [formData, setFormData] = useState({
  name: user?.name || null,
  image: user?.image || null,
  imagePreview: user?.image || null,
  imageUrl: user?.image || null,
});



  //state for getting exiting profile data
  const [exisitngProfile, setProfile] =
  useState(null);

useEffect(() => {



  const loadProfile =
    async () => {

      const data = formData
      setProfile(data);
       setProfile(data);

    setFormData({
      name: data?.name || "",
      image: null,
      imagePreview: "",
      imageUrl:
        data?.imageUrl || "",
    });
    };

  loadProfile();

}, [user]);
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


  if (!formData.image && !formData.imageUrl) {
    newErrors.image = "Profile image is required";
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

    }
    console.log('payload', payload);
    // const res = await createProfile(payload);
    // console.log(res, "response from profile creation");
    //   setSaving(false);
    // if(res.acknowledged){
    //   showToast('Legal Profile Updated', 'success');
    // }
    // else{
    //   showToast('Something Went Wrong', 'error');
    // }
    // imgBB upload
    // save profile
        console.log('payload', payload);
          const { name, imageUrl:imgURL} = payload;
    const {data:res, error} = await  authClient.updateUser({
                        image: imgURL,
                        name: name,
                    })
                    console.log(res, error);
                    if(error){
                          setSaving(false);
                    showToast(error.message, 'error');
                    }
                    if(res){
                          setSaving(false);
                     showToast('🦄 Update Completed!', 'success');
  };

  };

  return (
    <div className="space-y-8">
      {/* Header */}
        {saving && <FormLoader />}
   

      {/* Main Grid */}

      <div className="">
        {/* Form */}

        <div className="lg:col-span-2">
          <div className="card bg-base-200 shadow-xl border border-warning/20">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">
                User Information
              </h2>
                 <p className='text-center'><Image className='rounded-full border-gray-800  border 1 mx-auto w-[100px] h-[100px]' width={100} height={100} alt="user image" src={user?.image} /></p>
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

    
       
      </div>

   
    </div>
  );
};

export default UpdateFormNew;