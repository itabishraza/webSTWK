import React from "react";
import {
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPalette />,
    title: "Modern UI/UX Design",
    description:
      "Transform outdated designs into modern, visually appealing interfaces that enhance user engagement and brand credibility.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Redesign",
    description:
      "Ensure your website looks and performs perfectly across desktops, tablets, and smartphones.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Improve loading speed, Core Web Vitals, and overall website performance for a better user experience.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Improvements",
    description:
      "Optimize your website structure, metadata, and content to increase visibility in search engines.",
  },
  {
    icon: <FaCode />,
    title: "Code Refactoring",
    description:
      "Replace outdated code with clean, maintainable, and scalable development practices using modern technologies.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion Optimization",
    description:
      "Redesign layouts and user journeys that help generate more leads, sales, and customer engagement.",
  },
];

const RedesignServices = () => {
  return (
    <section className="bg-[#F3D1BF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">

          <p className="uppercase tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold">
            Redesign Services
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#391400] leading-tight">
            Everything Your Website
            <br className="hidden sm:block" />
            Needs To Perform Better
          </h2>

          <p className="mt-5 text-[#6B4F45] text-[15px] sm:text-base lg:text-lg leading-7 sm:leading-8">
            Our website redesign service focuses on improving design,
            performance, usability, and conversions while keeping your
            business goals at the center of every decision.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl p-6 sm:p-7 lg:p-8 shadow-md border border-transparent hover:border-[#EF6D58] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#EF6D58] text-white flex items-center justify-center text-3xl mb-6 group-hover:rotate-6 transition">

                {service.icon}

              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#391400] mb-4 leading-snug">

                {service.title}

              </h3>

              <p className="text-[#6B4F45] leading-7 text-[15px] sm:text-base flex-grow">

                {service.description}

              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-lg">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#391400] leading-tight">
            Is Your Website Looking Outdated?
          </h3>

          <p className="mt-5 text-[#6B4F45] max-w-2xl mx-auto text-[15px] sm:text-base leading-7 sm:leading-8">
            A modern website builds trust, improves user experience, and
            increases conversions. Let us transform your existing website
            into a powerful business asset.
          </p>

          <button
            className="mt-8 w-full sm:w-auto bg-[#EF6D58] text-white px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Request Website Audit
          </button>

        </div>

      </div>
    </section>
  );
};

export default RedesignServices;