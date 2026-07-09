import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project. A simple business website usually takes 1–2 weeks, while larger web applications may require 4–8 weeks or more.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. Every website is fully responsive and optimized for desktops, tablets, and mobile devices.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! I can modernize your current website with a fresh UI/UX, improved performance, and better SEO.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. I offer ongoing maintenance, security updates, bug fixes, backups, and content updates after launch.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily work with React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript, and modern web technologies.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on your project requirements, features, and timeline. Contact me for a free consultation and custom quote.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F3D1BF] py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-3">
            FAQ
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] leading-tight">
            Frequently Asked
            <br className="hidden sm:block" />
            Questions
          </h2>

          <p className="text-[#6B4F45] mt-5 max-w-2xl mx-auto leading-7 sm:leading-8 text-sm sm:text-base">
            Here are answers to some of the most common questions clients ask
            before starting a project.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
              >

                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#391400] leading-7">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF6D58]/10 flex items-center justify-center text-[#EF6D58]">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>

              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#6B4F45] text-sm sm:text-base leading-7 sm:leading-8">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;