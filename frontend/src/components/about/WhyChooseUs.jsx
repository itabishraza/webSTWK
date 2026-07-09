import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Development",
    desc: "Built with React, Node.js, Express and MongoDB using the latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Your website will look perfect on desktop, tablet and mobile devices.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    desc: "Optimized websites that load quickly and provide a smooth experience.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Friendly",
    desc: "Built with clean structure to improve search engine visibility.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    desc: "Authentication, secure APIs and industry best coding practices.",
  },
  {
    icon: <FaHeadset />,
    title: "Lifetime Support",
    desc: "Post-launch support and maintenance whenever you need assistance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#22233b] py-16 md:py-24 lg:py-28 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-4">
              Why Choose webSTWK
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              More Than Just
              <br />
              A Website
            </h2>

            <p className="text-gray-400 mt-6 md:mt-8 leading-7 md:leading-8 text-base md:text-lg max-w-xl">
              At webSTWK, we don't just build websites. We create digital
              experiences that help businesses attract customers, build trust,
              and increase sales.
            </p>

            {/* Checklist */}
            <div className="mt-8 md:mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white font-bold">
                  ✓
                </span>

                <p className="text-gray-300 text-sm sm:text-base">
                  Clean & Maintainable Code
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white font-bold">
                  ✓
                </span>

                <p className="text-gray-300 text-sm sm:text-base">
                  Business-Oriented Solutions
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white font-bold">
                  ✓
                </span>

                <p className="text-gray-300 text-sm sm:text-base">
                  Affordable Pricing
                </p>
              </div>

            </div>

          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#2d2f4b] p-6 rounded-2xl border border-[#3b3d63]
                hover:border-[#EF6D58]
                hover:-translate-y-2
                transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-[#EF6D58] flex items-center justify-center text-white text-2xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;