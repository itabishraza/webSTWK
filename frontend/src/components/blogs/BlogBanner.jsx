import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPenNib,
  FaCode,
  FaSearch,
  FaLaptopCode,
} from "react-icons/fa";

const BlogBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b] text-white">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#EF6D58]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#EF6D58]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">

        {/* Breadcrumb */}

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 mb-6">

          <Link
            to="/"
            className="hover:text-[#EF6D58] transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-[#EF6D58]">
            Blog
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-3">
              webSTWK Blog
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Learn Web
              <br />
              Development,
              <span className="text-[#EF6D58]"> SEO &</span>
              <br />
              Modern Technology
            </h1>

            <p className="mt-5 text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-xl">
              Explore practical articles, tutorials and industry insights
              covering web development, React.js, Node.js, SEO,
              performance optimization and business growth.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-2">
                <FaCode className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Development Guides
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaSearch className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  SEO Tips
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Latest Tech
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaPenNib className="text-[#EF6D58]" />
                <span className="text-sm sm:text-base">
                  Expert Articles
                </span>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                bg-[#EF6D58] px-6 py-3.5 rounded-xl font-semibold
                hover:scale-105 transition"
              >
                Read Latest Blogs

                <FaArrowRight />

              </button>

              <button
                className="w-full sm:w-auto inline-flex items-center justify-center
                border border-white/30 px-6 py-3.5 rounded-xl
                hover:bg-white hover:text-[#22233b]
                transition"
              >
                Browse Categories
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <div className="relative w-full max-w-sm">

              <div className="absolute inset-0 bg-[#EF6D58]/20 blur-3xl rounded-full"></div>

              <div className="relative bg-[#2d2f4b] border border-[#3d4065] rounded-3xl p-6 sm:p-7 shadow-2xl">

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EF6D58] flex items-center justify-center text-3xl sm:text-4xl mx-auto">

                  <FaPenNib />

                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-center mt-5">
                  Weekly Tech Insights
                </h3>

                <p className="text-gray-400 text-center text-sm sm:text-base leading-6 sm:leading-7 mt-4">
                  Stay updated with the latest trends in web development,
                  React.js, Node.js, UI/UX, SEO and performance optimization.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-7">

                  <div className="bg-[#22233b] rounded-xl sm:rounded-2xl p-4 text-center">

                    <h4 className="text-2xl sm:text-3xl font-bold text-[#EF6D58]">
                      50+
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      Articles
                    </p>

                  </div>

                  <div className="bg-[#22233b] rounded-xl sm:rounded-2xl p-4 text-center">

                    <h4 className="text-2xl sm:text-3xl font-bold text-[#EF6D58]">
                      10+
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      Categories
                    </p>

                  </div>

                </div>

                <div className="mt-6 rounded-xl sm:rounded-2xl bg-[#EF6D58]/10 border border-[#EF6D58]/30 p-4 text-center">

                  <h4 className="text-[#EF6D58] font-semibold text-sm sm:text-base">
                    Learn • Build • Grow 🚀
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogBanner;