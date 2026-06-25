import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Skeleton className="rounded-xl h-12 w-64 mb-6" />

      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            className="rounded-2xl h-64"
          />
        ))}
      </div>
    </div>
  );
}