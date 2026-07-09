import React from "react";
import { FaArrowRight, FaRocket } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="bg-[#22233b] py-16 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#EF6D58] to-[#ff8b6b] p-8 sm:p-10 md:p-16">

          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 w-60 h-60 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 md:w-80 md:h-80 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div className="text-center lg:text-left">

              <p className="uppercase tracking-[3px] md:tracking-[5px] text-white/80 text-xs sm:text-sm mb-4">
                Ready To Grow?
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's Build Something
                <br />
                Amazing Together.
              </h2>

              <p className="text-white/90 mt-5 md:mt-6 leading-7 md:leading-8 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                Whether you're launching a startup, redesigning your
                website, or building a custom web application,
                <span className="font-semibold"> webSTWK </span>
                is here to turn your ideas into reality.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-4 md:gap-6">

              <button
                className="w-full sm:w-auto flex items-center justify-center gap-3
                bg-white text-[#EF6D58]
                px-8 py-4 rounded-xl
                font-semibold
                hover:scale-105
                transition duration-300"
              >
                <FaRocket />
                Start Your Project
              </button>

              <button
                className="w-full sm:w-auto flex items-center justify-center gap-3
                border border-white
                text-white
                px-8 py-4 rounded-xl
                hover:bg-white hover:text-[#EF6D58]
                transition duration-300"
              >
                Contact Me
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;