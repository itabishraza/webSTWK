import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

const WebDevBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b] text-white">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 lg:py-16">
        
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 mb-6">
          <Link
            to="/"
            className="hover:text-[#EF6D58] transition"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/services"
            className="hover:text-[#EF6D58] transition"
          >
            Services
          </Link>

          <span>/</span>

          <span className="text-[#EF6D58]">
            Web Development
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[5px] text-[#EF6D58] text-sm font-semibold mb-3">
              Web Development
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Custom Websites
              <br />
              Built For
              <span className="text-[#EF6D58]">
                {" "}
                Business Growth
              </span>
            </h1>

            <p className="mt-5 text-gray-300 leading-7 text-base md:text-lg max-w-xl">
              We design and develop modern, responsive and SEO-friendly
              websites that help businesses establish a strong online
              presence, generate more leads and grow faster.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8 max-w-md">

              <div className="flex items-center gap-2">
                <FaCode className="text-[#EF6D58]" />
                <span>Clean Code</span>
              </div>

              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-[#EF6D58]" />
                <span>Modern UI</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMobileAlt className="text-[#EF6D58]" />
                <span>Responsive</span>
              </div>

              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#EF6D58]" />
                <span>SEO Ready</span>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#EF6D58] px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center border border-white/30 px-7 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-[#22233b] transition duration-300"
              >
                View Portfolio
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <div className="relative w-full max-w-sm">

              <div className="absolute inset-0 bg-[#EF6D58]/20 blur-3xl rounded-full"></div>

              <div className="relative bg-[#2d2f4b] border border-[#3d4065] rounded-3xl p-6 md:p-7 shadow-2xl">

                <div className="w-16 h-16 rounded-2xl bg-[#EF6D58] flex items-center justify-center text-3xl text-white mx-auto">
                  <FaLaptopCode />
                </div>

                <h3 className="text-2xl font-bold text-center mt-5">
                  Modern Web Development
                </h3>

                <p className="text-gray-400 text-center leading-6 mt-4 text-sm">
                  High-performance websites built with React, Node.js,
                  MongoDB and Tailwind CSS.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">

                  {[
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="bg-[#22233b] rounded-lg py-2.5 text-center border border-[#3d4065] text-sm"
                    >
                      {tech}
                    </div>
                  ))}

                </div>

                <div className="mt-6 text-center">
                  <span className="text-[#EF6D58] font-semibold text-sm">
                    Fast • Secure • Scalable
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebDevBanner;