import React from "react";

const AboutBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#22233b]">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-56 h-56 md:w-72 md:h-72 bg-[#EF6D58]/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-10 -right-10 w-72 h-72 md:w-96 md:h-96 bg-[#EF6D58]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-20 sm:py-24 md:py-36 text-center">

        {/* Subtitle */}
        <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#EF6D58] text-xs sm:text-sm mb-4 md:mb-5">
          About webSTWK
        </p>

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
          We Build Websites
          <br />
          That Grow Businesses
        </h1>

        {/* Description */}
        <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-7 md:leading-8 px-2 sm:px-0">
          webSTWK is a modern web development agency focused on building
          beautiful, high-performance websites and scalable web applications
          that help startups, businesses and personal brands succeed online.
        </p>

        {/* Breadcrumb */}
        <div className="mt-8 md:mt-10 flex justify-center items-center gap-2 md:gap-3 text-xs sm:text-sm">

          <a
            href="/"
            className="text-[#EF6D58] hover:text-white transition"
          >
            Home
          </a>

          <span className="text-gray-500">/</span>

          <span className="text-white">
            About
          </span>

        </div>

      </div>

    </section>
  );
};

export default AboutBanner;