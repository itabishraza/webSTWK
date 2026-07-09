import React from "react";
import {
  FaSyncAlt,
  FaBug,
  FaShieldAlt,
  FaDatabase,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSyncAlt />,
    title: "Regular Updates",
    description:
      "Keep your website updated with the latest features, plugins, frameworks, and security patches.",
  },
  {
    icon: <FaBug />,
    title: "Bug Fixes",
    description:
      "Quickly identify and resolve technical issues to ensure your website runs smoothly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Monitoring",
    description:
      "Protect your website against malware, vulnerabilities, and unauthorized access.",
  },
  {
    icon: <FaDatabase />,
    title: "Backup & Recovery",
    description:
      "Automatic backups and reliable recovery solutions to keep your business data safe.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Optimization",
    description:
      "Improve loading speed, optimize resources, and ensure a seamless user experience.",
  },
  {
    icon: <FaHeadset />,
    title: "Technical Support",
    description:
      "Dedicated maintenance support whenever you need updates, fixes, or technical assistance.",
  },
];

const MaintenanceServices = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          <p className="uppercase tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold">
            Maintenance Services
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#391400] leading-tight">
            Everything Your Website
            <br className="hidden sm:block" />
            Needs To Stay Healthy
          </h2>

          <p className="mt-5 text-[#6B4F45] text-[15px] sm:text-base lg:text-lg leading-7 sm:leading-8">
            Our website maintenance services ensure your website remains
            secure, fast, updated, and available so you can focus on
            growing your business.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl p-6 md:p-8 shadow-md border border-transparent hover:border-[#EF6D58] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-[#EF6D58] text-white flex items-center justify-center text-3xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition duration-300">

                {service.icon}

              </div>

              {/* Title */}

              <h3 className="text-xl sm:text-2xl font-bold text-[#391400] mb-4">

                {service.title}

              </h3>

              {/* Description */}

              <p className="text-[#6B4F45] text-[15px] sm:text-base leading-7 flex-grow">

                {service.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-14 md:mt-20 bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg">

          <h3 className="text-2xl md:text-3xl font-bold text-[#391400]">
            Let Us Maintain Your Website
          </h3>

          <p className="mt-4 text-[#6B4F45] max-w-2xl mx-auto leading-7 md:leading-8">
            Keep your website secure, fast, and up to date with our
            professional maintenance services. Focus on your business
            while we take care of everything behind the scenes.
          </p>

          <button className="mt-8 w-full sm:w-auto bg-[#EF6D58] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
            Get Maintenance Plan
          </button>

        </div>

      </div>
    </section>
  );
};

export default MaintenanceServices;