import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: ""
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: ""
    }
  ];

  return (
    <div className="w-[846px] flex flex-col gap-[28px] mx-auto mt-12 mb-12">
      {/* Title */}
      <h2
        className="w-[389px] h-[33px] font-poppins font-semibold text-[27px] leading-[33px] tracking-[0.4px] text-[#4F46E5] mx-auto text-center"
      >
        Frequently asked questions
      </h2>

      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`w-[846px] ${
            openIndex === index ? "h-[149px]" : "h-[76px]"
          } rounded-[7px] p-[24px] flex flex-col gap-[13px] transition-all duration-300
          ${openIndex === index ? "bg-[#FAF8FF] text-[#6F6C90]" : "bg-white text-black border border-gray-200"}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="w-[744px] font-inter font-medium text-[22px] leading-[28px]">
              {faq.question}
            </span>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && faq.answer && (
            <p className="w-[798px] font-inter font-normal text-[18px] leading-[30px]">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
