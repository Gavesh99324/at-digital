import React from "react";

export default function SectionOne() {
  return (
    <div className="flex items-center gap-[108px] w-[1064px] h-[414px]">
      <img
        src="/monitor.png"
        alt="Web & Mobile App Development"
        className="w-[414px] h-[414px] object-contain"
      />

      <div className="w-[542px] h-[187px] flex flex-col gap-[20px]">
        <h2 className="font-poppins font-semibold text-[27px] leading-[33px] tracking-[0.4px] text-[#4F46E5]">
          Web &amp; Mobile App Development
        </h2>

        <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[0%] text-black">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>

        <button
          className="w-[129px] h-[38px] bg-[#F28D35] rounded-[4px] 
                     font-inter font-bold text-[14px] leading-[100%] tracking-[-0.02em] uppercase 
                     text-white px-[20px] py-[12px]"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
