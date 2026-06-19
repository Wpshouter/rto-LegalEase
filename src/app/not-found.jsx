'use client'
import Link from "next/link";
import { Button } from "@heroui/react";
import { SearchX, Scale } from "lucide-react";

export default function NotFound() {
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
                        <SearchX
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

                <h1 className="text-6xl font-bold text-warning">
                    404
                </h1>

                <h2 className="text-3xl font-bold mt-2 text-foreground">
                    Page Not Found
                </h2>

                <p className="text-default-500 mt-4">
                    The legal document you are searching for
                    appears to be missing from our records.
                </p>

                <Button
                    as={Link}
                    href="/"
                    color="warning"
                    className="mt-8"
                >
                    Return Home
                </Button>
            </div>
        </div>
    );
}