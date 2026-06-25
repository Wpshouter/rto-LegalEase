'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
    Button,
    Checkbox,
    Divider,
    Input
} from '@heroui/react';

import {
    Lock,
    Mail,
    Scale
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { redirect, useRouter } from "next/navigation";
import { showToast } from '@/action/simpleFunctions';
import Loading from '@/app/loading';
import GoogleLoginButton from '@/componenet/shared/GoogleLoginButton';


const SigninForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        //console.log(formData);
        const { data, error } = await authClient.signIn.email({
        /**
         * The user email
         */
        ...formData,
        /**
         * A URL to redirect to after the user verifies their email (optional)
         */
        //callbackURL: "/dashboard",
        /**
         * remember the user session after the browser is closed. 
         * @default true
         */
        rememberMe: true,
        callbackURL: '/',
},
  {
    onSuccess: (ctx) => {
      const user = ctx.data?.user;
      //showToast('Login Successfull','success');
    //   if (!user) {
    //         redirect('/auth/signin');
    //   }
    setLoading(false);
      if (user.role === "lawyer" || user.role === "admin") {
            redirect('/dashboard');
      } //else {
    //           redirect('/dashboard');
    //   }
    },

    onError: (ctx) => {
            setLoading(false);
    showToast(ctx.error.message, 'error');
      //alert(ctx.error.message);
    },
  }
);
        // Better Auth Login
        // auth.signIn.email()
        // Redirect based on role
        //console.log(data, error);
    };
    if(loading) return <Loading />
    return (
        <div className="w-full max-w-md">

            <div
                className="
                bg-content1/90
                backdrop-blur-xl
                border
                border-warning/20
                rounded-[32px]
                shadow-xl
                p-8
            "
            >

                {/* Logo */}

                <div className="flex justify-center mb-6">
                    <div className="bg-warning p-4 rounded-2xl shadow-lg">
                        <Scale
                            className="text-white"
                            size={30}
                        />
                    </div>
                </div>

                {/* Heading */}

                <h2 className="text-3xl font-bold text-center text-foreground">
                    Welcome Back
                </h2>

                <p className="text-center text-default-500 mt-2 mb-8">
                    Access your LegalEase dashboard.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <Input className={`w-full`}
                        required
                        type="email"
                        label="Email Address"
                        placeholder="john@example.com"
                        onChange={(e) =>
                            setFormData(prev => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                    />

                    <Input className={`w-full`}
                    required
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                        onChange={(e) =>
                            setFormData(prev => ({
                                ...prev,
                                password:e.target.value,
                            }))
                        }
                    />

                    <div className="flex justify-end items-center">

           

                        <Link
                            href="/forgot-password"
                            className="text-sm text-warning hover:underline"
                        >
                            Forgot Password?
                        </Link>

                    </div>

                    <Button
                        type="submit"
                        color="warning"
                        size="lg"
                        className="w-full font-semibold"
                    >
                        Sign In
                    </Button>

                        <div className="divider">OR</div>

                   <GoogleLoginButton setLoading={setLoading} />

                    <p className="text-center text-sm text-default-500">
                        Don't have an account?{' '}
                        <Link
                            href="/auth/signup"
                            className="text-warning font-medium hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default SigninForm;