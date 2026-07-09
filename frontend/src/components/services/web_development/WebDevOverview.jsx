import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import webDevImg from "../../../assets/webDevelopment.svg";

const features = [
  "Custom Website Development",
  "Responsive Mobile-First Design",
  "SEO Optimized Structure",
  "Fast Loading Performance",
  "Scalable Architecture",
  "Secure Development Practices",
];

const WebDevOverview = () => {
  return (
    <section className="bg-[#F3D1BF] py-14 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}

          <div className="relative order-2 lg:order-1 flex justify-center">

            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#EF6D58]/20"></div>

            <img
              src={webDevImg}
              alt="Web Development"
              className="relative z-10 w-full max-w-md lg:max-w-full rounded-3xl shadow-2xl object-cover h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]"
            />

          </div>

          {/* Content */}

          <div className="order-1 lg:order-2 text-center lg:text-left">

            <p className="uppercase tracking-[4px] text-[#EF6D58] text-sm font-semibold mb-3">
              Overview
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] leading-tight">
              Build A Website
              <br />
              That Actually
              <span className="text-[#EF6D58]">
                {" "}Grows Your Business
              </span>
            </h2>

            <p className="mt-6 text-[#6B4F45] leading-7 md:leading-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Your website is often the first impression customers have of
              your business. At <strong>webSTWK</strong>, we develop
              modern, responsive and high-performance websites that
              not only look beautiful but also convert visitors into
              customers.
            </p>

            <p className="mt-5 text-[#6B4F45] leading-7 md:leading-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Whether you need a startup website, business website,
              portfolio, landing page or a complete web application,
              every project is designed with performance, security,
              SEO and scalability in mind.
            </p>

            {/* Features */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-xl mx-auto lg:mx-0">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >

                  <FaCheckCircle className="text-[#EF6D58] text-lg flex-shrink-0" />

                  <span className="text-[#391400] text-sm sm:text-base">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-10 flex justify-center lg:justify-start">

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#EF6D58] text-white px-7 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Let's Build Your Website

                <FaArrowRight />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebDevOverview;