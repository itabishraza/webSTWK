import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const technologies = [
  {
    icon: <FaReact />,
    title: "React.js",
    color: "text-cyan-400",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    color: "text-white",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    color: "text-green-500",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    color: "text-gray-300",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "text-green-400",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: "text-sky-400",
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    color: "text-yellow-400",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    color: "text-blue-500",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    color: "text-orange-500",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    color: "text-white",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    color: "text-blue-400",
  },
  {
    icon: <SiVercel />,
    title: "Vercel",
    color: "text-white",
  },
];

const Technologies = () => {
  return (
    <section className="bg-[#22233b] py-16 md:py-24 lg:py-28 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm">
            Technologies
          </p>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Our Tech Stack
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
            At webSTWK we use modern technologies to build secure,
            scalable and high-performance websites and web applications.
          </p>

        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20">

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-[#2d2f4b] rounded-2xl border border-[#3a3d5e]
              p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center
              hover:border-[#EF6D58]
              hover:-translate-y-2
              transition-all duration-300"
            >

              <div
                className={`text-4xl sm:text-5xl lg:text-6xl ${tech.color}
                group-hover:scale-110 transition-transform duration-300`}
              >
                {tech.icon}
              </div>

              <h3 className="text-white text-sm sm:text-lg lg:text-xl font-semibold mt-4 sm:mt-5 lg:mt-6 text-center">
                {tech.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Technologies;