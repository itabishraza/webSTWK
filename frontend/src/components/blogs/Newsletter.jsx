import React from "react";
import {
  FaPaperPlane,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-[#F3D1BF] py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div
          className="relative overflow-hidden rounded-3xl
          bg-gradient-to-r from-[#EF6D58] to-[#ff8b6b]
          px-5 py-10
          sm:px-8 sm:py-12
          md:px-12 md:py-14
          lg:px-16 lg:py-16"
        >

          {/* Background Glow */}

          <div className="absolute -top-20 -right-20 w-64 sm:w-72 h-64 sm:h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-72 sm:w-80 h-72 sm:h-80 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}

            <div className="text-center lg:text-left">

              <div
                className="w-16 h-16 sm:w-20 sm:h-20
                rounded-full bg-white/20
                flex items-center justify-center
                text-white text-3xl sm:text-4xl
                mx-auto lg:mx-0 mb-6 sm:mb-8"
              >
                <FaEnvelopeOpenText />
              </div>

              <p className="uppercase tracking-[3px] md:tracking-[4px] text-white/80 text-sm font-semibold">
                Newsletter
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Stay Updated With
                <br className="hidden sm:block" />
                <span className="sm:ml-2">Latest Tech Articles</span>
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-7 sm:leading-8 mt-5 max-w-xl mx-auto lg:mx-0">
                Get practical tutorials, React tips, Node.js guides,
                SEO strategies, web development trends, and business
                insights delivered directly to your inbox.
              </p>

            </div>

            {/* Right */}

            <div>

              <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">

                <h3 className="text-2xl font-bold text-[#391400]">
                  Subscribe Now
                </h3>

                <p className="text-[#6B4F45] text-sm sm:text-base mt-3 leading-7">
                  Join hundreds of developers and business owners
                  receiving valuable web development content every week.
                </p>

                <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#EF6D58] transition"
                  />

                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#EF6D58] transition"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#EF6D58] text-white rounded-xl py-3 sm:py-4 font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition duration-300"
                  >
                    Subscribe Now
                    <FaPaperPlane />
                  </button>

                </form>

                <p className="text-xs sm:text-sm text-center text-gray-500 mt-5">
                  No spam. Unsubscribe anytime.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;