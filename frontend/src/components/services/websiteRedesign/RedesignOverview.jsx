import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import redesignImg from "../../../assets/websiteRedesign.svg";

const features = [
  "Modern UI & UX Design",
  "Mobile Responsive Layout",
  "Better SEO Performance",
  "Faster Loading Speed",
  "Higher Conversion Rate",
  "Improved User Experience",
];

const RedesignOverview = () => {
  return (
    <section className="bg-[#F3D1BF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">

            <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-full h-full rounded-3xl bg-[#EF6D58]/20"></div>

            <img
              src={redesignImg}
              alt="Website Redesign"
              className="relative z-10 w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />

          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">

            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-3">
              Why Redesign?
            </p>

            <h2 className="text-[#391400] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Give Your Website
              <br />
              A Fresh Look That
              <span className="text-[#EF6D58]">
                {" "}Delivers Results
              </span>
            </h2>

            <p className="mt-5 text-[#6B4F45] leading-7 sm:leading-8 text-[15px] sm:text-base">
              Your website is often the first interaction customers have
              with your business. If it looks outdated, loads slowly or
              doesn't work properly on mobile devices, you're likely losing
              valuable leads and potential customers.
            </p>

            <p className="mt-4 text-[#6B4F45] leading-7 sm:leading-8 text-[15px] sm:text-base">
              At <strong>webSTWK</strong>, we redesign websites with a
              focus on modern aesthetics, better performance, SEO and
              user experience. Our goal is to transform your existing
              website into a powerful marketing tool that builds trust
              and drives business growth.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#EF6D58] text-lg flex-shrink-0" />

                  <span className="text-[#391400] text-sm sm:text-base">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#EF6D58] text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Request Website Audit

                <FaArrowRight />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RedesignOverview;