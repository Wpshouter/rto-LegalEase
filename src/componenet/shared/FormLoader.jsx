"use client";

import { Scale } from "lucide-react";

export default function FormLoader() {
  return (
    <div className="absolute inset-0 z-50 bg-base-200/90 backdrop-blur-sm flex items-center justify-center rounded-3xl">
      <div className="flex flex-col items-center gap-6">

        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-warning/30 animate-ping" />

          <div className="relative h-20 w-20 rounded-full bg-warning flex items-center justify-center shadow-2xl">
            <Scale
              size={38}
              className="text-white animate-pulse"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h3 className="font-bold text-xl">
            Saving Profile
          </h3>

          <p className="text-base-content/60">
            Updating your legal presence...
          </p>
        </div>

        {/* Progress Bars */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-warning animate-bounce" />
          <span
            className="h-3 w-3 rounded-full bg-warning animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-3 w-3 rounded-full bg-warning animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}