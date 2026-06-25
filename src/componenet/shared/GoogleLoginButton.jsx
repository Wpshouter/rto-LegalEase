'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLoginButton = ({setLoading}) => {
    const handle_google_login = async () => {
                setLoading(true);
                //return;
                      const data = await authClient.signIn.social({
                provider: "google",
                    callbackURL: "/dashboard"
              });
              //console.log(data);
                }
    return (
        <>
           

            <Button onClick={()=>handle_google_login()} className='btn-soft bg-primary btn-outline w-full text-base-100 mt-6 rounded-3xl text-white'><FaGoogle/> Continue with google</Button>
        </>
        
    );
};

export default GoogleLoginButton;