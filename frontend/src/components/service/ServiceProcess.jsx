import React from "react";
import {
  FaComments,
  FaPencilRuler,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and project requirements to create the perfect strategy.",
  },
  {
    number: "02",
    icon: <FaPencilRuler />,
    title: "Design & Prototype",
    description:
      "Clean UI/UX designs are created before development so you can visualize your website before it's built.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Development",
    description:
      "Using modern technologies like React, Node.js and MongoDB, we build fast, secure and scalable applications.",
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "After testing and deployment, we continue providing maintenance, updates and technical support.",
  },
];

const ServiceProcess = () => {
  return (
    <section className="bg-[#22233b] py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-3">
            Our Process
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            How We Work
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7 sm:leading-8 text-sm sm:text-base">
            Every successful project follows a proven workflow. From
            understanding your vision to delivering a fully functional
            website, we ensure transparency at every step.
          </p>

        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

          {process.map((step, index) => (

            <div
              key={index}
              className="relative bg-[#2D2F4B] rounded-3xl p-6 sm:p-8 border border-[#3e4165]
              hover:border-[#EF6D58]
              hover:-translate-y-2
              transition-all duration-300"
            >

              {/* Number */}
              <span
                className="absolute top-4 right-5 text-4xl sm:text-5xl font-bold text-white/10"
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full
                bg-[#EF6D58] text-white flex items-center
                justify-center text-xl sm:text-2xl mb-5"
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;