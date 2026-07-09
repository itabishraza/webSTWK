import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b] text-white">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 md:-top-32 md:-left-32 h-52 w-52 md:h-72 md:w-72 rounded-full bg-[#EF6D58]/20 blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 md:-bottom-32 md:-right-32 h-52 w-52 md:h-72 md:w-72 rounded-full bg-[#EF6D58]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-28">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300 mb-6">

          <Link
            to="/"
            className="hover:text-[#EF6D58] transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-[#EF6D58]">
            Services
          </span>

        </div>

        {/* Main Content */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-4">
            Our Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">

            Smart Digital

            <br />

            Solutions for

            <span className="text-[#EF6D58]">
              {" "}Your Business
            </span>

          </h1>

          <p className="mt-5 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl">
            From modern websites to scalable web applications,
            webSTWK helps startups, businesses and personal brands
            build a powerful online presence with fast, secure and
            user-friendly digital solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#EF6D58] px-6 md:px-8 py-3 md:py-4 font-semibold transition hover:scale-105"
            >
              Get Free Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 px-6 md:px-8 py-3 md:py-4 font-semibold transition hover:bg-white hover:text-[#22233b]"
            >
              View Portfolio
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceBanner;