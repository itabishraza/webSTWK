import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaTools,
  FaShoppingCart,
  FaUserTie,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Modern, fast and scalable websites built with the latest technologies.",
    features: [
      "Business Websites",
      "Custom Web Apps",
      "Responsive Design",
      "SEO Friendly",
    ],
    link: "/services/web-development",
  },
  {
    icon: <FaPaintBrush />,
    title: "Website Redesign",
    description:
      "Give your existing website a modern look and improved performance.",
    features: [
      "Modern UI/UX",
      "Mobile Friendly",
      "Performance Boost",
      "Better Conversion",
    ],
    link: "/services/website-redesign",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated and running smoothly all year.",
    features: [
      "Bug Fixes",
      "Security Updates",
      "Backups",
      "24/7 Support",
    ],
    link: "/services/website-maintenance",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    description:
      "Powerful online stores with secure payment integration.",
    features: [
      "Shopping Cart",
      "Payment Gateway",
      "Admin Dashboard",
      "Inventory",
    ],
    link: "/services/ecommerce-development",
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Websites",
    description:
      "Professional portfolios for developers, freelancers and creators.",
    features: [
      "Modern Design",
      "Fast Loading",
      "SEO Ready",
      "Personal Branding",
    ],
    link: "/services/portfolio-website",
  },
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    description:
      "High-converting landing pages that generate leads and sales.",
    features: [
      "Marketing Pages",
      "Lead Generation",
      "Fast Speed",
      "Mobile Optimized",
    ],
    link: "/services/landing-page",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm font-semibold">
            Our Services
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#391400] leading-tight">
            Digital Solutions
            <br />
            Designed For Growth
          </h2>

          <p className="mt-5 md:mt-6 text-[#6B4F45] text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl mx-auto">
            We build modern websites and web applications that help
            businesses grow, generate leads and create memorable
            digital experiences.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl md:rounded-3xl
              p-6 md:p-8
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-300
              border border-transparent
              hover:border-[#EF6D58]"
            >

              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#EF6D58] text-white flex items-center justify-center text-2xl md:text-3xl mb-5 md:mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#391400] mb-3 md:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B4F45] text-sm md:text-base leading-7 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">

                {service.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#391400] text-sm md:text-base"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#EF6D58] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}

              </ul>

              {/* Read More */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 font-semibold text-[#EF6D58] hover:gap-4 transition-all duration-300"
              >
                Read More
                <FaArrowRight />
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;