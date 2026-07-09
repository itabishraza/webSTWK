import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaProjectDiagram,
  FaUsers,
  FaLaptopCode,
  FaGithub,
} from "react-icons/fa";

const ProjectBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b] text-white">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 mb-8">

          <Link
            to="/"
            className="hover:text-[#EF6D58] transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-[#EF6D58]">
            Projects
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[4px] text-[#EF6D58] text-sm font-semibold mb-4">
              Our Portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Turning Ideas Into
              <br />
              <span className="text-[#EF6D58]">
                Successful Digital Products
              </span>
            </h1>

            <p className="mt-6 text-gray-300 leading-8 text-base md:text-lg max-w-xl">
              Explore some of our recent web development projects crafted
              using modern technologies like React.js, Node.js, Express,
              MongoDB, and Tailwind CSS. Every project is built with
              performance, scalability, and user experience in mind.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#EF6D58] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Start Your Project
                <FaArrowRight />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center border border-white/20 px-8 py-4 rounded-xl hover:bg-white hover:text-[#22233b] transition"
              >
                Our Services
              </Link>

            </div>

          </div>

          {/* Right Card */}

          <div className="flex justify-center">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 bg-[#EF6D58]/20 blur-3xl rounded-full"></div>

              <div className="relative bg-[#2d2f4b] border border-[#3b3d63] rounded-3xl p-8 shadow-2xl">

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#EF6D58] flex items-center justify-center text-4xl text-white">

                  <FaProjectDiagram />

                </div>

                <h3 className="text-3xl font-bold text-center mt-8">
                  Project Highlights
                </h3>

                <p className="text-center text-gray-400 leading-7 mt-4">
                  Building scalable websites and web applications for
                  startups, businesses, and personal brands.
                </p>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="bg-[#22233b] rounded-xl p-4 text-center border border-[#3d4065]">

                    <FaProjectDiagram className="mx-auto text-[#EF6D58] text-2xl mb-2" />

                    <h4 className="text-2xl font-bold">
                      50+
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Projects
                    </p>

                  </div>

                  <div className="bg-[#22233b] rounded-xl p-4 text-center border border-[#3d4065]">

                    <FaUsers className="mx-auto text-[#EF6D58] text-2xl mb-2" />

                    <h4 className="text-2xl font-bold">
                      25+
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Clients
                    </p>

                  </div>

                  <div className="bg-[#22233b] rounded-xl p-4 text-center border border-[#3d4065]">

                    <FaLaptopCode className="mx-auto text-[#EF6D58] text-2xl mb-2" />

                    <h4 className="text-2xl font-bold">
                      MERN
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Stack
                    </p>

                  </div>

                  <div className="bg-[#22233b] rounded-xl p-4 text-center border border-[#3d4065]">

                    <FaGithub className="mx-auto text-[#EF6D58] text-2xl mb-2" />

                    <h4 className="text-2xl font-bold">
                      Open
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Source
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProjectBanner;