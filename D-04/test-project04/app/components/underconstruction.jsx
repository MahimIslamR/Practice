import React from "react";

export default function UnderConstruction() {
  return (
    <div className="hero min-h-[70vh] bg-base-200 rounded-box my-6">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* Badge */}
          <div className="badge badge-warning gap-2 mb-4 p-3 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Under Construction
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Coming Soon
          </h1>

          {/* Description */}
          <p className="py-2 text-base-content/70">
            We are currently crafting our story and updating our details. Please check back later to learn more about us!
          </p>

          {/* Actions */}
          <div className="flex justify-center gap-3 mt-6">
            <a href="/" className="btn btn-primary btn-sm">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}