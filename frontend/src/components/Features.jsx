import React from "react";
import FeaturePic from "../assets/FeaturePic.svg";

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-[#22233b] py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Side */}
            <div>

              <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
                Features
              </p>

              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Why Work With Me
              </h2>

              <p className="text-gray-400 mt-6 text-base md:text-lg leading-8 max-w-lg">
                I create scalable, responsive and user-friendly web
                applications that help businesses grow online.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-300 text-base md:text-lg">
                    Responsive & Modern UI Design
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-300 text-base md:text-lg">
                    Scalable Backend Development
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-300 text-base md:text-lg">
                    REST APIs & Authentication Systems
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF6D58] flex items-center justify-center text-white shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-300 text-base md:text-lg">
                    Clean Code & Best Practices
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center">

              <img
                src={FeaturePic}
                alt="Developer"
                className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] max-w-full"
              />

            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#dca389] py-14 md:py-16 px-6 md:px-10 lg:px-16">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 text-center lg:text-left">

            <div>

              <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm">
                Get Started
              </p>

              <h3 className="text-[#391400] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Let's Build Your
                <br />
                Next Project
              </h3>

              <button className="mt-8 bg-[#EF6D58] text-white px-8 py-4 rounded-lg hover:scale-105 transition duration-300">
                Contact Me
              </button>

            </div>

            <p className="text-[#6B4F45] max-w-md text-base md:text-lg leading-8">
              Whether you need a portfolio website, business website,
              backend API or a full stack application, I can help
              bring your ideas to life.
            </p>

          </div>

        </div>

      </section>
    </>
  );
};

export default Features;