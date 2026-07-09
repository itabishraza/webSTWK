import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

const WebsiteRedesignBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b] text-white">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-10 md:py-14 lg:py-16">

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
            Website Redesign
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-3">
              Website Redesign
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your
              <br />
              Old Website Into
              <span className="text-[#EF6D58]">
                {" "}A Modern Experience
              </span>
            </h1>

            <p className="mt-5 text-gray-300 leading-7 text-sm sm:text-base md:text-lg max-w-xl">
              Give your website a fresh new look with modern UI/UX,
              improved performance, mobile responsiveness and SEO
              optimization. Turn outdated designs into high-converting
              digital experiences.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg">

              <div className="flex items-center gap-3">
                <FaPaintBrush className="text-[#EF6D58]" />
                <span>Modern UI</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-[#EF6D58]" />
                <span>Responsive</span>
              </div>

              <div className="flex items-center gap-3">
                <FaSearch className="text-[#EF6D58]" />
                <span>SEO Ready</span>
              </div>

              <div className="flex items-center gap-3">
                <FaRocket className="text-[#EF6D58]" />
                <span>Fast Performance</span>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EF6D58] px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Get Free Audit
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

          {/* Right */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 bg-[#EF6D58]/20 blur-3xl rounded-full"></div>

              <div className="relative bg-[#2d2f4b] border border-[#3d4065] rounded-3xl p-5 sm:p-6 md:p-7 shadow-2xl">

                <div className="flex items-center gap-3">

                  {/* Before */}
                  <div className="flex-1 bg-[#3b3d63] rounded-xl p-4">

                    <p className="text-[10px] sm:text-xs uppercase tracking-[3px] text-gray-400">
                      Before
                    </p>

                    <div className="mt-3 h-24 sm:h-28 rounded-lg bg-[#4a4c72] flex items-center justify-center text-4xl sm:text-5xl grayscale">
                      😐
                    </div>

                    <ul className="mt-3 text-xs sm:text-sm text-gray-400 space-y-2">
                      <li>Slow Website</li>
                      <li>Poor Design</li>
                      <li>Low SEO</li>
                    </ul>

                  </div>

                  <FaArrowRight className="text-xl sm:text-3xl text-[#EF6D58] flex-shrink-0" />

                  {/* After */}
                  <div className="flex-1 bg-[#EF6D58] rounded-xl p-4">

                    <p className="text-[10px] sm:text-xs uppercase tracking-[3px] text-orange-100">
                      After
                    </p>

                    <div className="mt-3 h-24 sm:h-28 rounded-lg bg-white flex items-center justify-center text-4xl sm:text-5xl">
                      🚀
                    </div>

                    <ul className="mt-3 text-xs sm:text-sm text-white space-y-2">
                      <li>Modern UI</li>
                      <li>Fast Speed</li>
                      <li>Better SEO</li>
                    </ul>

                  </div>

                </div>

                <div className="mt-6 bg-[#22233b] rounded-xl p-5 text-center">

                  <h3 className="text-xl sm:text-2xl font-bold">
                    Upgrade Your Website
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 mt-3">
                    Improve design, performance and conversions
                    with a professional website redesign.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WebsiteRedesignBanner;