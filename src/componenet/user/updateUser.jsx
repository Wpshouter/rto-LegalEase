'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Bounce, toast } from 'react-toastify';

const UpdateForm = ({user}) => {
   // console.log(user, 'user from udpateform');
         const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()
            const onSubmit = async(data) => {
               // console.log(data);
                const {email, name, photo_url, password} = data;
                const {data:res, error} = await  authClient.updateUser({
                    image: photo_url,
                    name: name,
                })
              //  console.log(res, error);
                if(error){
                      //alert(error.message);
                  toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                }
                if(res){
               
                   toast.success('🦄 Update Completed!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                }
            }
    return (
        <div className='my-4'>
                     <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full mx-auto border p-4">
                    <label className="label">Name</label>
                    <input required defaultValue={user.name} {...register("name")} type="text" className="input w-full" placeholder="Your Name" />
                    
                  

                    <label className="label">Photo Url</label>
                    <input  defaultValue={user.image} {...register("photo_url")}  type="url" className="input w-full" placeholder="Photo Url" />


                    <button  type="submit" className="btn btn-primary mt-4">  <SiGnuprivacyguard className='text-[20px]' ></SiGnuprivacyguard> Update</button>
    
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateForm;