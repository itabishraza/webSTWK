import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import salon from "../../assets/salon.svg";
import gym from "../../assets/gym.svg";
import doctor from "../../assets/prescripto.svg";
import restaurant from "../../assets/restaurant.svg";
import realestate from "../../assets/realestate.svg";
import school from "../../assets/school.svg";

const projects = [
  {
    image: salon,
    category: "Salon Website",
    title: "Luxury Salon & Spa",
    description:
      "Modern salon website with online appointment booking, service listings and responsive design.",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
  },
  {
    image: gym,
    category: "Fitness Website",
    title: "PowerFit Gym",
    description:
      "Professional gym website with membership plans, trainers, class schedules and enquiry forms.",
    tech: ["React.js", "Express.js", "MongoDB"],
  },
  {
    image: doctor,
    category: "Healthcare",
    title: "Doctor Appointment System",
    description:
      "Complete healthcare platform with appointment booking, doctor dashboard and patient management.",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    image: restaurant,
    category: "Restaurant Website",
    title: "FoodHub Restaurant",
    description:
      "Responsive restaurant website with online reservations, digital menu and customer reviews.",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    image: realestate,
    category: "Real Estate",
    title: "Dream Homes",
    description:
      "Property listing website with advanced search, property details and enquiry management.",
    tech: ["Next.js", "MongoDB"],
  },
  {
    image: school,
    category: "Education",
    title: "Smart School Portal",
    description:
      "School management website with admissions, events, notices and student information portal.",
    tech: ["React.js", "Express.js", "MongoDB"],
  },
];

const ProjectGrid = () => {
  return (
    <section className="bg-[#22233b] py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold mb-3">
            More Projects
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Business Websites We've Built
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-5 text-sm sm:text-base leading-7 md:leading-8">
            Every project is designed with performance, user experience and
            business growth in mind. From startups to established companies,
            we create digital solutions that deliver real value.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-[#2d2f4b] rounded-3xl overflow-hidden border border-[#3d4065]
              hover:border-[#EF6D58] hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-5 sm:p-6 md:p-7">

                <span className="uppercase tracking-[2px] md:tracking-[3px] text-xs sm:text-sm text-[#EF6D58] font-semibold">

                  {project.category}

                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">

                  {project.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-7 text-sm sm:text-base">

                  {project.description}

                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#22233b]
                      border border-[#EF6D58]
                      text-white text-xs sm:text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Footer */}

                <div className="mt-7 pt-5 border-t border-[#3d4065]">

                  <div className="flex items-center gap-3">

                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
                      bg-[#EF6D58]/20
                      flex items-center justify-center flex-shrink-0"
                    >
                      <FaCheckCircle className="text-[#EF6D58] text-lg sm:text-xl" />
                    </div>

                    <div>

                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        Custom Business Solution
                      </h4>

                      <p className="text-gray-400 text-xs sm:text-sm">
                        Designed & Developed by webSTWK
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;