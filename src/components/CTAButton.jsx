import React from "react";

export default function CTAButton() {
  return (
    <div className="flex justify-center my-6 px-4">
      <button
        className="
          bg-orange-500 hover:bg-orange-600 text-white 
          px-4 py-2 sm:px-6 sm:py-2 
          rounded text-sm sm:text-base font-bold uppercase 
          w-full sm:w-auto
        "
      >
        Get Free Consultation
      </button>
    </div>
  );
}
