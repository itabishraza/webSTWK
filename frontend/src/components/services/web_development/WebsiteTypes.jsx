import React from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaShoppingCart,
  FaUserTie,
  FaRocket,
  FaGraduationCap,
  FaNewspaper,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const websites = [
  {
    icon: <FaBriefcase />,
    title: "Business Website",
    description:
      "Professional websites that build trust and generate quality leads.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
    ],
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Website",
    description:
      "Sell products online with secure payments and a powerful admin panel.",
    features: [
      "Shopping Cart",
      "Payment Gateway",
      "Inventory",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Website",
    description:
      "Showcase your skills, projects and personal brand professionally.",
    features: [
      "Modern UI",
      "Personal Branding",
      "Responsive",
    ],
  },
  {
    icon: <FaRocket />,
    title: "Startup Website",
    description:
      "Launch your startup with a beautiful and scalable online presence.",
    features: [
      "Landing Pages",
      "High Conversion",
      "Fast Performance",
    ],
  },
  {
    icon: <FaGraduationCap />,
    title: "Educational Website",
    description:
      "Websites for schools, institutes, coaching centers and online learning.",
    features: [
      "Course Pages",
      "Student Portal",
      "Easy Navigation",
    ],
  },
  {
    icon: <FaNewspaper />,
    title: "Blog & News Website",
    description:
      "Modern publishing platforms with categories, search and SEO features.",
    features: [
      "Blog System",
      "Categories",
      "SEO Ready",
    ],
  },
];

const WebsiteTypes = () => {
  return (
    <section className="bg-[#22233b] py-14 md:py-20 lg:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          <p className="uppercase tracking-[5px] text-[#EF6D58] text-sm font-semibold">
            Website Solutions
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Websites We Build
          </h2>

          <p className="mt-5 text-gray-400 leading-7 md:leading-8 text-sm sm:text-base md:text-lg">
            Every business is different. That's why we create custom websites
            designed specifically for your goals, audience and industry.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {websites.map((site, index) => (

            <div
              key={index}
              className="group bg-[#2d2f4b] border border-[#3d4065] rounded-3xl p-6 md:p-8 hover:border-[#EF6D58] hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              {/* Icon */}

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#EF6D58] flex items-center justify-center text-white text-2xl md:text-3xl mb-5 group-hover:rotate-6 transition">

                {site.icon}

              </div>

              {/* Title */}

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">

                {site.title}

              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-7 text-sm md:text-base mb-6 flex-grow">

                {site.description}

              </p>

              {/* Features */}

              <div className="space-y-3 mb-8">

                {site.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 text-gray-300 text-sm md:text-base"
                  >

                    <FaCheckCircle className="text-[#EF6D58] flex-shrink-0" />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              {/* Button */}

              <Link
                to="/contact"
                className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#EF6D58] font-semibold hover:gap-4 transition-all"
              >
                Discuss Project

                <FaArrowRight />

              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WebsiteTypes;