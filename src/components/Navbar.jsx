import React, { useState } from "react";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#4F46E5] flex items-center justify-between px-4 sm:px-8 lg:px-[80px] py-4">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded">
            <span className="text-blue-700 font-bold text-xl">♦</span>
          </div>
          <span className="font-bold text-lg text-white">at digital</span>
        </div>

        <ul className="hidden md:flex gap-6 uppercase font-medium text-white text-sm">
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#careers" className="hover:underline">
              Careers
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col bg-[#4F46E5] text-white uppercase font-medium text-sm p-4 gap-4 md:hidden">
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#careers" onClick={() => setMenuOpen(false)}>
              Careers
            </a>
          </li>
        </ul>
      )}

      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[763px]">
        <img
          src="/table.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute bottom-4 left-4 w-[90%] sm:w-[80%] lg:w-[630px] p-4 sm:p-6 lg:p-8 flex flex-col gap-5 rounded-lg"
          style={{
            background:
              "linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)",
          }}
        >
          <p className="font-inter font-bold text-lg sm:text-2xl lg:text-[48px] leading-tight text-white">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>

          <div className="self-start">
            <CTAButton />
          </div>
        </div>
      </div>
    </>
  );
}
