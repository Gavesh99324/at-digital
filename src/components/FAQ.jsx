import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "",
    },
  ];

  return (
    <div className="w-full max-w-[846px] flex flex-col gap-7 mx-auto mt-12 mb-12 px-4">
      <h2 className="max-w-[389px] font-poppins font-semibold text-[22px] sm:text-[27px] leading-[28px] sm:leading-[33px] tracking-[0.4px] text-[#4F46E5] mx-auto text-center">
        Frequently asked questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`
            w-full rounded-[7px] p-6 flex flex-col gap-3 transition-all duration-300
            ${
              openIndex === index
                ? "bg-[#FAF8FF] text-[#6F6C90]"
                : "bg-white text-black border border-gray-200"
            }
          `}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="font-inter font-medium text-lg sm:text-[22px] leading-[26px] sm:leading-[28px] pr-4">
              {faq.question}
            </span>
            <span className="text-xl flex-shrink-0">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && faq.answer && (
            <p className="font-inter font-normal text-base sm:text-[18px] leading-[26px] sm:leading-[30px]">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
