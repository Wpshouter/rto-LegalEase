'use client'
import Link from "next/link";
import { Button } from "@heroui/react";
import { ShieldAlert, Scale } from "lucide-react";

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">

            {/* Decorative Blobs */}

            <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-warning/10 blur-3xl" />

            <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-warning/10 blur-3xl" />

            <div
                className="
                    w-full
                    max-w-xl
                    bg-content1/90
                    backdrop-blur-xl
                    border
                    border-warning/20
                    rounded-[32px]
                    shadow-xl
                    p-10
                    text-center
                "
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-warning p-5 rounded-3xl">
                        <ShieldAlert
                            size={50}
                            className="text-white"
                        />
                    </div>
                </div>

                <div className="flex justify-center mb-4">
                    <Scale
                        size={30}
                        className="text-warning"
                    />
                </div>

                <h1 className="text-4xl font-bold text-foreground">
                    Access Restricted
                </h1>

                <p className="text-default-500 mt-4">
                    You do not have permission to access this area.
                    This section is reserved for authorized users only.
                </p>

                <div className="flex gap-4 justify-center mt-8">

                    <Button
                        as={Link}
                        href="/"
                        color="warning"
                    >
                        Return Home
                    </Button>

                    <Button
                        as={Link}
                        href="/dashboard"
                        variant="bordered"
                    >
                        Dashboard
                    </Button>

                </div>
            </div>
        </div>
    );
}