import React from "react";

export default function SectionTwo() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-[108px] w-full max-w-[1064px] mx-auto px-4 lg:px-0">
      <div className="w-full lg:w-[542px] flex flex-col gap-5 text-center lg:text-left">
        <h2 className="font-poppins font-semibold text-xl sm:text-2xl lg:text-[27px] leading-snug text-[#4F46E5]">
          Digital Strategy Consulting
        </h2>

        <p className="font-inter text-sm sm:text-base leading-relaxed text-black">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button
            className="bg-[#F28D35] rounded-[4px] font-inter font-bold text-[14px] uppercase text-white px-5 py-3"
          >
            Learn More
          </button>
        </div>
      </div>

      <img
        src="/search.png"
        alt="Digital Strategy Consulting"
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[414px] h-auto object-contain"
      />
    </div>
  );
}
