import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#4F46E5] px-6 sm:px-10 lg:px-[80px] pt-10 pb-5 flex flex-col gap-10 items-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 max-w-[300px] text-center lg:text-left mx-auto lg:mx-0">
          <img
            src="/logo.png"
            alt="AT Digital Logo"
            className="w-[180px] sm:w-[226px] h-auto object-contain mx-auto lg:mx-0"
          />
          <p className="font-lato font-normal text-sm sm:text-base leading-snug text-white">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective – your
            business results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-center sm:text-left justify-center lg:justify-start">
          <div>
            <h3 className="font-inter font-semibold text-lg sm:text-[21px] text-white">
              Our Technologies
            </h3>
            <ul className="flex flex-col gap-3 mt-3 text-white font-inter text-sm sm:text-base">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-lg sm:text-[21px] text-white">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3 mt-3 text-white font-inter text-sm sm:text-base">
              <li>Social Media Marketing</li>
              <li>Web &amp; Mobile App Development</li>
              <li>Data &amp; Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[630px] flex justify-center border-t border-white pt-2">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 font-inter font-medium text-xs sm:text-sm text-white capitalize">
          <a href="https://example.com">Privacy Policy</a>
          <span>|</span>
          <a href="https://example.com">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
