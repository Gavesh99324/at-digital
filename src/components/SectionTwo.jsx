import React from "react";

export default function SectionTwo() {
  return (
    <div className="flex items-center gap-[108px] w-[1064px] h-[416px] ml-4">
      <div className="w-[542px] h-[206px] flex flex-col gap-[20px]">
        <h2 className="w-[507px] h-[33px] font-poppins font-semibold text-[27px] leading-[33px] tracking-[0.4px] text-[#4F46E5]">
          Digital Strategy Consulting
        </h2>

        <p className="w-[542px] h-[95px] font-inter font-normal text-[16px] leading-[100%] tracking-[0%] text-black">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>

        <button
          className="w-[129px] h-[38px] bg-[#F28D35] rounded-[4px] 
                     font-inter font-bold text-[14px] leading-[100%] tracking-[-0.02em] uppercase 
                     text-white px-[20px] py-[12px]"
        >
          Learn More
        </button>
      </div>

      <img
        src="/search.png"
        alt="Digital Strategy Consulting"
        className="w-[414px] h-[416px] object-contain"
      />
    </div>
  );
}
