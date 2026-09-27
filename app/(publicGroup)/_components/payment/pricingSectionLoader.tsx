import React from "react";

const PricingSectionLoader = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto mb-4 h-8 w-48 animate-pulse rounded-md bg-gray-200" />
          <div className="mx-auto h-4 w-full max-w-lg animate-pulse rounded-md bg-gray-200" />
          <div className="mx-auto mt-2 h-4 w-3/4 max-w-md animate-pulse rounded-md bg-gray-200" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              {/* Plan title */}
              <div className="mb-6 h-6 w-32 animate-pulse rounded bg-gray-200" />

              {/* Price */}
              <div className="mb-3 h-10 w-28 animate-pulse rounded bg-gray-200" />

              {/* Description */}
              <div className="mb-8 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Button */}
              <div className="mb-8 h-11 w-full animate-pulse rounded-lg bg-gray-200" />

              {/* Features */}
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-gray-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionLoader;