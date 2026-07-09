import React from "react";
import CountUp from "react-countup";
import aboutPic from "../../assets/aboutPic.svg";

import {
  FaLaptopCode,
  FaReact,
  FaRocket,
  FaDownload,
} from "react-icons/fa";

const HomeAboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#F3D1BF] py-16 md:py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* About */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -top-5 -left-5 w-full h-full bg-[#EF6D58]/20 rounded-3xl"></div>

              <img
                src={aboutPic}
                alt="Tabish Raza"
                className="relative w-[280px] sm:w-[340px] md:w-[420px] rounded-3xl shadow-2xl"
              />

            </div>

          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[4px] text-[#EF6D58] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Full Stack
              <br />
              Web Developer
            </h2>

            <p className="mt-6 text-xl font-semibold text-[#391400]">
              Turning Ideas Into Scalable Web Applications
            </p>

            <p className="mt-6 text-[#6B4F45] leading-8">
              I'm <strong>Tabish Raza</strong>, a Full Stack Developer
              specializing in React.js, Next.js, Node.js, Express.js,
              MongoDB, and modern web technologies.

              I build fast, scalable, and responsive web applications
              that help startups and businesses grow online.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-[#EF6D58] hover:bg-[#d85744] text-white px-8 py-4 rounded-xl transition">
                Hire Me
              </button>

              

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          {/* Card */}
          <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-[#EF6D58] text-white flex items-center justify-center text-2xl mb-5">
              <FaLaptopCode />
            </div>

            <h3 className="text-4xl font-bold text-[#391400]">
              <CountUp
                end={48}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>

            <p className="mt-2 text-[#6B4F45]">
              Projects Completed
            </p>

          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-[#EF6D58] text-white flex items-center justify-center text-2xl mb-5">
              <FaReact />
            </div>

            <h3 className="text-4xl font-bold text-[#391400]">
              MERN
            </h3>

            <p className="mt-2 text-[#6B4F45]">
              Stack Expertise
            </p>

          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-[#EF6D58] text-white flex items-center justify-center text-2xl mb-5">
              <FaRocket />
            </div>

            <h3 className="text-4xl font-bold text-[#391400]">
              100%
            </h3>

            <p className="mt-2 text-[#6B4F45]">
              Learning Mindset
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAboutMe;