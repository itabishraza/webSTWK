import React from "react";
import founder from "../../assets/founderpic.jpeg";
import {
  FaLinkedinIn,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";

const MeetFounder = () => {
  return (
    <section className="bg-[#22233b] py-16 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center order-1">

            <div className="relative w-fit">

              {/* Background Shape */}
              <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-full h-full rounded-3xl bg-[#EF6D58] rotate-6"></div>

              <img
                src={founder}
                alt="Tabish Raza"
                className="relative rounded-3xl shadow-2xl
                w-[260px] sm:w-[320px] md:w-[380px] lg:w-[430px]
                object-cover"
              />

            </div>

          </div>

          {/* Content */}
          <div className="order-2 text-center lg:text-left">

            <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm mb-3">
              Meet The Founder
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm
              <br />
              Tabish Raza
            </h2>

            <h4 className="text-[#EF6D58] text-lg md:text-xl mt-4 font-semibold">
              Full Stack Web Developer
            </h4>

            <p className="text-gray-400 leading-7 md:leading-8 mt-6 md:mt-8 text-sm sm:text-base">
              I'm passionate about building modern, scalable and
              high-performance web applications using the MERN Stack.
              My goal is to help startups, businesses and individuals
              create powerful digital experiences that not only look
              great but also deliver real business results.
            </p>

            <p className="text-gray-400 leading-7 md:leading-8 mt-5 md:mt-6 text-sm sm:text-base">
              Through <span className="text-white font-semibold">webSTWK</span>,
              I focus on creating responsive websites, business portals,
              portfolio websites and custom web applications using
              React.js, Node.js, Express.js and MongoDB.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">

              {[
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "Next.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-[#2d2f4b] text-white border border-[#EF6D58] text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">

              <button
                className="flex items-center justify-center gap-3
                bg-[#EF6D58] text-white
                px-6 md:px-8 py-3 md:py-4
                rounded-lg hover:scale-105 transition"
              >
                <FaBriefcase />
                Hire Me
              </button>

              <button
                className="border border-[#EF6D58]
                text-white
                px-6 md:px-8 py-3 md:py-4
                rounded-lg
                hover:bg-[#EF6D58]
                transition"
              >
                Contact Me
              </button>

            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 mt-8 md:mt-10">

              <a
                href="https://github.com/itabishraza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#2d2f4b]
                flex items-center justify-center
                text-white hover:bg-[#EF6D58] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/tabishraza586/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#2d2f4b]
                flex items-center justify-center
                text-white hover:bg-[#EF6D58] transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MeetFounder;