import React from "react";
import companyImg from "../../assets/company.jpg";

const CompanyStory = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-28 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="relative">

            {/* Background Shape */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full rounded-3xl bg-[#EF6D58]/15"></div>

            <img
              src={companyImg}
              alt="webSTWK Team"
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[260px] sm:h-[350px] md:h-[500px] hover:scale-[1.02] transition duration-500"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 bg-white rounded-xl shadow-xl px-4 py-3 md:px-6 md:py-4">

              <h3 className="text-2xl md:text-3xl font-bold text-[#391400]">
                50+
              </h3>

              <p className="text-sm md:text-base text-[#6B4F45]">
                Projects Delivered
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Turning Ideas
              <br />
              Into Powerful
              <br />
              Digital Products
            </h2>

            <div className="w-16 md:w-20 h-1 rounded-full bg-[#EF6D58] mt-5 md:mt-6"></div>

            <p className="text-[#6B4F45] mt-6 md:mt-8 leading-7 md:leading-8 text-base md:text-lg">
              At{" "}
              <span className="font-semibold text-[#391400]">
                webSTWK
              </span>
              , we believe every business deserves a website that not only
              looks amazing but also delivers real results.
            </p>

            <p className="text-[#6B4F45] mt-5 md:mt-6 leading-7 md:leading-8 text-base">
              From startup landing pages to complete MERN Stack
              applications, we design and develop fast, responsive and
              scalable digital experiences tailored to each client's goals.
            </p>

            <p className="text-[#6B4F45] mt-5 md:mt-6 leading-7 md:leading-8 text-base">
              Our mission is simple — build websites that help businesses
              grow, improve customer trust and create a lasting online
              presence.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#EF6D58] text-white flex items-center justify-center flex-shrink-0">
                  ✓
                </span>

                <p className="text-[#391400] font-medium">
                  Modern UI/UX
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#EF6D58] text-white flex items-center justify-center flex-shrink-0">
                  ✓
                </span>

                <p className="text-[#391400] font-medium">
                  SEO Friendly
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#EF6D58] text-white flex items-center justify-center flex-shrink-0">
                  ✓
                </span>

                <p className="text-[#391400] font-medium">
                  Mobile Responsive
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#EF6D58] text-white flex items-center justify-center flex-shrink-0">
                  ✓
                </span>

                <p className="text-[#391400] font-medium">
                  Fast Performance
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="mt-8 md:mt-10 bg-[#EF6D58] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:scale-105 transition duration-300 text-sm md:text-base">
              Explore Portfolio →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStory;