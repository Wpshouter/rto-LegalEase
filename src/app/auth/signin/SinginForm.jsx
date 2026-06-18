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

const SigninForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        // Better Auth Login
        // auth.signIn.email()
        // Redirect based on role
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
                        type="email"
                        label="Email Address"
                        placeholder="john@example.com"
                    
                        value={formData.email}
                        onValueChange={(value) =>
                            setFormData(prev => ({
                                ...prev,
                                email: value,
                            }))
                        }
                    />

                    <Input className={`w-full`}
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                     
                        value={formData.password}
                        onValueChange={(value) =>
                            setFormData(prev => ({
                                ...prev,
                                password: value,
                            }))
                        }
                    />

                    <div className="flex justify-between items-center">

                        <Checkbox
                            isSelected={formData.remember}
                            onValueChange={(checked) =>
                                setFormData(prev => ({
                                    ...prev,
                                    remember: checked,
                                }))
                            }
                        >
                            Remember Me
                        </Checkbox>

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

                    <Button
                        variant="bordered"
                        size="lg"
                        className="w-full"
                    >
                        Continue with Google
                    </Button>

                    <p className="text-center text-sm text-default-500">
                        Don't have an account?{' '}
                        <Link
                            href="/signup"
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