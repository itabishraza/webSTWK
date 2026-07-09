import React from "react";
import CountUp from "react-countup";
import {
  FaProjectDiagram,
  FaUsers,
  FaCode,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    number: 50,
    suffix: "+",
    title: "Projects Completed",
    desc: "Successfully delivered websites and web apps.",
  },
  {
    icon: <FaUsers />,
    number: 25,
    suffix: "+",
    title: "Happy Clients",
    desc: "Helping startups and businesses grow online.",
  },
  {
    icon: <FaCode />,
    number: 12,
    suffix: "+",
    title: "Technologies",
    desc: "Modern tools for scalable development.",
  },
  {
    icon: <FaAward />,
    number: 100,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Focused on quality and long-term relationships.",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-24 lg:py-28 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm">
            Achievements
          </p>

          <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Numbers That
            <br />
            Speak For Us
          </h2>

          <p className="text-[#6B4F45] mt-5 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8">
            Every project we complete reflects our commitment to
            quality, innovation and client satisfaction.
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg
              hover:-translate-y-2 hover:shadow-2xl
              transition-all duration-300 text-center"
            >

              {/* Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full
                bg-[#EF6D58] text-white flex items-center justify-center
                text-2xl sm:text-3xl"
              >
                {item.icon}
              </div>

              {/* Counter */}
              <h3 className="text-4xl sm:text-5xl font-bold text-[#391400] mt-6 sm:mt-8">

                <CountUp
                  end={item.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {item.suffix}

              </h3>

              {/* Title */}
              <h4 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-[#391400]">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[#6B4F45] mt-3 sm:mt-4 leading-6 sm:leading-7 text-sm sm:text-base">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;