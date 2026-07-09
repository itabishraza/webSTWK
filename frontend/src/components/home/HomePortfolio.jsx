import React from "react";
import Doctorproject from "../../assets/Doctorproject.png";
import realtimechatapp from "../../assets/realtimechatapp.png";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: Doctorproject,
    title: "Doctor Booking",
    category: "MERN Stack",
    link: "#",
  },
  {
    image: realtimechatapp,
    title: "Second Brain",
    category: "Node.js",
    link: "#",
  },
  {
    image: realtimechatapp,
    title: "Chat App",
    category: "Socket.io",
    link: "#",
  },
];

const HomePortfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#22233b] py-16 md:py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-14">

          <div className="text-center md:text-left">

            <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Latest Work
            </h2>

          </div>

          <a href="/projects">
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 hover:border-orange-500 transition">
            Explore More
          </button>
          </a>

        </div>

        {/* Projects */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[260px] md:h-[350px] lg:h-[450px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">

                <span className="inline-block bg-white text-black text-sm px-4 py-1 rounded-full">
                  {project.category}
                </span>

                <h3 className="text-white text-2xl md:text-3xl font-bold mt-4">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  View Project
                  <FiArrowUpRight />
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HomePortfolio;