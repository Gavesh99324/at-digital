import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#4F46E5] px-[80px] pt-[40px] pb-[20px] flex flex-col gap-[40px] items-center">
      {/* Top Section */}
      <div className="w-full max-w-[1200px] h-[141px] flex justify-between">
        
        {/* Left Section */}
        <div className="flex flex-col gap-[14px] w-[300px]">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="AT Digital Logo"
            className="w-[226px] h-[49.62px] object-contain"
          />
          {/* Description */}
          <p className="font-lato font-normal text-[16px] leading-[100%] text-white">
            Your goal is our target. Not anything in between. We use online marketing
            platforms and tools to achieve single objective - your business results.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-[80px]">
          {/* Our Technologies */}
          <div>
            <h3 className="font-inter font-semibold text-[21px] text-white">
              Our Technologies
            </h3>
            <ul className="flex flex-col gap-[12px] mt-[12px] text-white font-inter text-[16px]">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-inter font-semibold text-[21px] text-white">
              Our Services
            </h3>
            <ul className="flex flex-col gap-[12px] mt-[12px] text-white font-inter text-[16px]">
              <li>Social Media Marketing</li>
              <li>Web &amp; Mobile App Development</li>
              <li>Data &amp; Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[630px] flex justify-center border-t border-white pt-[8px]">
        <div className="flex gap-[16px] font-inter font-medium text-[14px] text-white capitalize">
          <a href="#">Privacy Policy</a>
          <p>|</p>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

