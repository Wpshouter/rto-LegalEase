'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    Button,
    Input,
    RadioGroup,
    Radio
} from '@heroui/react';

import {
    Lock,
    Mail,
    Scale,
    User
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { showToast } from '@/action/simpleFunctions';
import { redirect } from 'next/navigation';
import GoogleLoginButton from '@/componenet/shared/GoogleLoginButton';
import Loading from '@/app/loading';

const SignupForm =  () => {
    const [loading, setLoading] = useState(false);

    const [role, setRole] = useState("client");
        const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: role,
    });
    console.log('roleee', role);
    const handleChange = (field, e) => {
        console.log(e.target.value);
        const value = e.target.value
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        formData.role = role
        console.log(formData);
        if(formData.password != formData.confirmPassword){
            //alert('Password Do Not Match');
            showToast('Password Do Not Match', 'error');
            return false;
        }
        if(formData.name == '' || formData.email == '' ){
             //alert('Password Do Not Match');
            showToast('Please Enter All Information', 'error');
            return false;
        }
        const { data, error } = await authClient.signUp.email({
                 name: formData.name,
  email: formData.email,
  password: formData.password,
                callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
            }, {
                onRequest: (ctx) => {
                    //show loading
                    <Loading />
                },
                onSuccess: (ctx) => {
                    setLoading(false);
                    //redirect to the dashboard or sign in page
                    showToast('SignUp Successfull', 'Success');
                    redirect('/dashboard');
                },
                onError: (ctx) => {
                      setLoading(false);
                    // display the error message
                    showToast(ctx.error.message, 'error');
                    //alert(ctx.error.message);
                },
        });
        console.log('betterauthadata', data);
        // Better Auth Signup
        // Validate passwords
        // Call auth.signUp.email()
        // Redirect after success
    };
    if(loading){
        return <Loading/>
    }
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
                    Join LegalEase
                </h2>

                <p className="text-center text-default-500 mt-2 mb-8">
                    Connect with verified legal professionals and clients.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <Input className={`w-full`}
                        label="Full Name"
                        placeholder="John Doe"
                        onChange={(e) =>
                            handleChange('name', e)
                        }
                    />

                    <Input className={`w-full`}
                        type="email"
                        label="Email Address"
                        placeholder="john@example.com"
          
                        onChange={(e) =>
                            handleChange('email', e)
                        }
                    />

                    <Input className={`w-full`}
                        type="password"
                        label="Password"
                        placeholder="Create a password"
   
                        onChange={(e) =>
                            handleChange('password', e)
                        }
                    />

                    <Input className={`w-full`}
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm password"
            
             
                        onChange={(e) =>
                            handleChange('confirmPassword', e)
                        }
                    />



                    <Button
                        type="submit"
                        color="warning"
                        size="lg"
                        className="w-full font-semibold"
                    >
                        Create Account
                    </Button>

                 <div className="divider">OR</div>

            

                    <GoogleLoginButton setLoading={setLoading} />

                    <p className="text-center text-sm text-default-500">
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            className="text-warning font-medium hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default SignupForm;