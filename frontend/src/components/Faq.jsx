import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// FAQ Data
const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I work with React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript, and TypeScript."
  },
  {
    question: "Can you build full-stack web applications?",
    answer:
      "Yes. I can develop both frontend and backend applications using the MERN stack."
  },
  {
    question: "Do you create portfolio websites?",
    answer:
      "Yes. I build modern, responsive, and recruiter-friendly portfolio websites."
  },
  {
    question: "Can you deploy applications?",
    answer:
      "Yes. I can deploy applications on Vercel, Render, Netlify, and other cloud platforms."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#22233b] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>
            <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
              FAQ
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <br />
              Questions
            </h2>

            <p className="text-gray-400 mb-8">
              Here are some common questions about my web
              development services.
            </p>

            <button className="text-white underline hover:text-[#EF6D58] transition">
              Contact Me
            </button>
          </div>

          {/* Right Side */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#3a3b58]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-6 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white text-[#391400]"
                      : "bg-transparent text-white"
                  }`}
                >
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <span className="text-[#EF6D58]">
                    {activeIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="bg-white px-6 pb-6 text-[#6B4F45] leading-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}