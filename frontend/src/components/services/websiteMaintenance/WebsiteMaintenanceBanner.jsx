import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaTools,
  FaServer,
  FaSyncAlt,
} from "react-icons/fa";

const WebsiteMaintenanceBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b] text-white">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#EF6D58]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#EF6D58]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14 lg:py-16">

        {/* Breadcrumb */}

        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300 mb-6">

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
            Website Maintenance
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-3">
              Website Maintenance
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Keep Your Website
              <br />
              <span className="text-[#EF6D58]">
                Secure, Updated &
              </span>
              <br />
              Running Smoothly
            </h1>

            <p className="mt-5 text-gray-300 text-[15px] sm:text-base lg:text-lg leading-7 sm:leading-8 max-w-xl">
              A website requires continuous monitoring, updates and
              optimization. We keep your website secure, fast and
              reliable so you can focus on growing your business.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-8 max-w-md">

              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Security
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaTools className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Bug Fixes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaServer className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Backups
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaSyncAlt className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Updates
                </span>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EF6D58] px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Get Maintenance Plan

                <FaArrowRight />
              </Link>

              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 px-7 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-[#22233b] transition duration-300"
              >
                View Portfolio
              </Link>

            </div>

          </div>

          {/* Right Card */}

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <div className="relative w-full max-w-sm">

              <div className="absolute inset-0 bg-[#EF6D58]/20 blur-3xl rounded-full"></div>

              <div className="relative bg-[#2d2f4b] border border-[#3d4065] rounded-3xl p-6 sm:p-7 shadow-2xl">

                <div className="w-16 h-16 rounded-2xl bg-[#EF6D58] flex items-center justify-center text-3xl text-white mx-auto">
                  <FaTools />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-center mt-5">
                  Complete Website Care
                </h3>

                <p className="text-gray-400 text-center text-sm sm:text-base leading-6 sm:leading-7 mt-4">
                  From security updates and performance optimization to
                  backups and bug fixes, we ensure your website stays
                  online, secure and performing at its best.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">

                  {[
                    "Security",
                    "Updates",
                    "Backups",
                    "Monitoring",
                  ].map((item) => (

                    <div
                      key={item}
                      className="bg-[#22233b] border border-[#3d4065] rounded-lg py-2.5 text-center text-sm"
                    >
                      {item}
                    </div>

                  ))}

                </div>

                <div className="mt-6 text-center">

                  <span className="text-[#EF6D58] text-sm font-semibold">
                    Secure • Reliable • Always Online
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

export default WebsiteMaintenanceBanner;