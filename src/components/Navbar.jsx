import React from "react";
import CTAButton from "./CTAButton";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[101.62px] bg-[#4F46E5] flex justify-between items-center px-[80px] pt-[26px] pb-[26px]">
        <div className="flex items-center gap-[14px] w-[226px] h-[49.62px]">
          <div className="bg-white p-[8px] rounded">
            <span className="text-blue-700 font-bold text-xl">♦</span>
          </div>
          <span className="font-bold text-lg text-white">at digital</span>
        </div>

        <ul className="flex gap-[28px] w-[381px] h-[17px] uppercase font-medium text-white text-[14px] leading-[100%]">
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
      </nav>

      <div className="relative w-full h-[763px] mt-0">
        <img
          src="/table.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div
          style={{
            width: "630px",
            height: "306px",
            paddingTop: "24px",
            paddingRight: "40px",
            paddingBottom: "32px",
            paddingLeft: "40px",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            background:
              "linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)",
            opacity: 1,
            position: "absolute",
            bottom: 0,
            left: 0,
            marginBottom: "16px",
            marginLeft: "16px",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
              textTransform: "capitalize",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>

          <div className="self-start -ml-1">
            <CTAButton />
          </div>
          <div
            style={{
              width: "556px",
              height: "192px",
              opacity: 1,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              marginTop: "20px",
              borderRadius: "8px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
