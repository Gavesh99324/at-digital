import React from "react";

export default function SectionOne() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[108px] w-full max-w-[1064px] mx-auto px-4 lg:px-0">
      <img
        src="/monitor.png"
        alt="Web & Mobile App Development"
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[414px] h-auto object-contain"
      />

      <div className="w-full lg:w-[542px] flex flex-col gap-5 text-center lg:text-left">
        <h2 className="font-poppins font-semibold text-xl sm:text-2xl lg:text-[27px] leading-snug text-[#4F46E5]">
          Web &amp; Mobile App Development
        </h2>

        <p className="font-inter text-sm sm:text-base leading-relaxed text-black">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button
            className="bg-[#F28D35] rounded-[4px] font-inter font-bold text-[14px] uppercase text-white px-5 py-3"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
