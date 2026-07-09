import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

const PricingCTA = () => {
  return (
    <section className="bg-[#22233b] py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#2c2d4d] to-[#36375e]">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side */}

            <div className="p-8 sm:p-10 md:p-14 lg:p-16">

              <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-4">
                Pricing
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Every Project is
                <br />
                Uniquely Priced
              </h2>

              <p className="text-gray-300 mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                Every business has different goals and requirements.
                That's why I provide custom pricing based on your
                project scope, features and timeline.
              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">

                {[
                  "Free Project Consultation",
                  "Transparent Pricing",
                  "No Hidden Charges",
                  "Flexible Solutions For Every Budget",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <FaCheckCircle className="text-[#EF6D58] mt-1 flex-shrink-0" />

                    <span className="text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-[#EF6D58] flex items-center justify-center p-8 sm:p-10 md:p-14 lg:p-16">

              <div className="text-center w-full max-w-md">

                <h3 className="text-white text-3xl sm:text-4xl font-bold">
                  Need a Quote?
                </h3>

                <p className="text-orange-100 mt-5 leading-7 sm:leading-8 text-sm sm:text-base">
                  Tell me about your project and I'll provide a
                  personalized estimate within 24 hours.
                </p>

                {/* Buttons */}

                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  <button
                    className="w-full sm:w-auto flex items-center justify-center gap-2
                    bg-white text-[#391400] px-7 py-4 rounded-xl font-semibold
                    hover:scale-105 transition duration-300"
                  >
                    Get Free Quote
                    <FaArrowRight />
                  </button>

                  <button
                    className="w-full sm:w-auto flex items-center justify-center gap-2
                    border-2 border-white text-white px-7 py-4 rounded-xl font-semibold
                    hover:bg-white hover:text-[#EF6D58] transition duration-300"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingCTA;