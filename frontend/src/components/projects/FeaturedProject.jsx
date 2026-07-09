import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import prescripto from "../../assets/prescripto.svg";

const FeaturedProject = () => {
  return (
    <section className="bg-[#F3D1BF] py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-14">

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-3">
            Featured Project
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400]">
            Prescripto
          </h2>

          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-[#6B4F45] leading-7 md:leading-8 text-sm sm:text-base">
            A modern doctor appointment booking platform built with the
            MERN Stack that streamlines appointment scheduling for
            patients, doctors and administrators.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}

          <div className="relative order-1">

            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#EF6D58]/20"></div>

            <img
              src={prescripto}
              alt="Prescripto Project"
              className="relative rounded-3xl shadow-2xl w-full object-cover hover:scale-[1.02] transition duration-500"
            />

          </div>

          {/* Right */}

          <div className="order-2">

            <span className="inline-block bg-[#EF6D58] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Healthcare Platform
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] mt-5 leading-tight">
              Doctor Appointment
              <br />
              Booking System
            </h3>

            <p className="text-[#6B4F45] leading-7 md:leading-8 mt-5 text-sm sm:text-base">
              Prescripto is a complete healthcare platform where patients
              can easily book appointments, doctors manage schedules and
              administrators control the system through a dedicated dashboard.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {[
                "Patient Dashboard",
                "Doctor Dashboard",
                "Admin Panel",
                "Appointment Booking",
                "JWT Authentication",
                "Responsive Design",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#EF6D58] flex-shrink-0" />

                  <span className="text-[#391400] text-sm sm:text-base">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "JWT",
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white border border-[#EF6D58] text-[#391400] text-sm font-medium"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;