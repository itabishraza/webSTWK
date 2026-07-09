import React from "react";
import { FaLaptopCode, FaPalette, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "I build fast, responsive, and SEO-friendly websites that help businesses establish a strong online presence and convert visitors into customers.",
    featured: false,
  },
  {
    icon: <FaPalette />,
    title: "Portfolio Design",
    description:
      "Personal portfolio websites tailored for developers, designers, freelancers, and job seekers.",
    featured: true,
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Secure and scalable backend systems that power modern web applications, including APIs, authentication, database management, and business logic.",
    featured: false,
  },
];

const HomeService = () => {
  return (
    <section
      id="services"
      className="bg-[#F3D1BF] py-16 md:py-20 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
            Services
          </p>

          <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            How I Can Help
            <br />
            Your Business
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className={`border border-[#e8c6b2] rounded-xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                service.featured
                  ? "bg-white"
                  : "bg-[#F3D1BF] hover:bg-white"
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#EF6D58] text-white text-3xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#391400] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B4F45] leading-7 flex-grow">
                {service.description}
              </p>

              {/* Button */}
              <button className="mt-8 flex items-center gap-3 text-[#391400] font-semibold group">
                <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#EF6D58] group-hover:text-white transition">
                  +
                </span>

                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeService;