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

const SignupForm = () => {


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
        formData.role = role
        console.log(formData);
        if(formData.password != formData.confirmPassword){
            alert('Password Do Not Match');
            return false;
        }
        const { data, error } = await authClient.signUp.email({
                ...formData,
                callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
            }, {
                onRequest: (ctx) => {
                    //show loading
                },
                onSuccess: (ctx) => {
                    //redirect to the dashboard or sign in page
                },
                onError: (ctx) => {
                    // display the error message
                    alert(ctx.error.message);
                },
        });
        console.log('betterauthadata', data);
        // Better Auth Signup
        // Validate passwords
        // Call auth.signUp.email()
        // Redirect after success
    };

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

                   <div>
    <label className="block text-sm font-medium mb-3 text-default-700">
        Choose Account Type
    </label>

    <div className="grid grid-cols-2 gap-3">

        <button
            type="button"
            onClick={() => setRole("client")}
            className={`
                p-4 rounded-2xl border transition-all text-left
                ${
                    role === "client"
                        ? "border-warning bg-warning/10"
                        : "border-divider bg-content2"
                }
            `}
        >
            <h4 className="font-semibold">
                Client
            </h4>

            <p className="text-xs text-default-500 mt-1">
                Hire lawyers and manage cases.
            </p>
        </button>

        <button
            type="button"
            onClick={() => setRole("lawyer")}
            className={`
                p-4 rounded-2xl border transition-all text-left
                ${
                    role === "lawyer"
                        ? "border-warning bg-warning/10"
                        : "border-divider bg-content2"
                }
            `}
        >
            <h4 className="font-semibold">
                Lawyer
            </h4>

            <p className="text-xs text-default-500 mt-1">
                Publish services and get hired.
            </p>
        </button>

    </div>
</div>

                    <Button
                        type="submit"
                        color="warning"
                        size="lg"
                        className="w-full font-semibold"
                    >
                        Create Account
                    </Button>

                 <div className="divider">OR</div>

                    <Button
                        variant="bordered"
                        size="lg"
                        className="w-full"
                    >
                        Continue with Google
                    </Button>

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