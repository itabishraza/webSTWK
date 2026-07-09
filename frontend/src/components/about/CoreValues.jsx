import React from "react";
import {
  FaUsers,
  FaRocket,
  FaCode,
  FaHandshake,
} from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: "Client First",
      description:
        "Every project starts with understanding your goals. We build solutions that solve real business problems.",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "We use modern technologies and creative thinking to build websites that stand out from the competition.",
    },
    {
      icon: <FaCode />,
      title: "Clean Development",
      description:
        "Writing scalable, maintainable and secure code is our priority for long-term success.",
    },
    {
      icon: <FaHandshake />,
      title: "Trust & Support",
      description:
        "We believe in long-term relationships by providing reliable support even after project delivery.",
    },
  ];

  return (
    <section className="bg-[#F3D1BF] py-16 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm mb-3">
            Core Values
          </p>

          <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What Drives
            <br />
            webSTWK
          </h2>

          <p className="text-[#6B4F45] mt-5 md:mt-6 leading-7 md:leading-8 text-base md:text-lg px-2">
            Our values shape every website we build. We focus on
            quality, innovation, transparency, and creating digital
            experiences that help businesses grow.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">

          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#EF6D58] text-white flex items-center justify-center text-xl md:text-2xl mb-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#391400] mb-3 md:mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B4F45] leading-7 text-sm md:text-base">
                {value.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;