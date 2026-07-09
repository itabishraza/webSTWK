import React from "react";
import { Link } from "react-router-dom";
import maintenanceImg from "../../../assets/websiteMaintenance.svg";
import {
  FaShieldAlt,
  FaSyncAlt,
  FaRocket,
  FaLifeRing,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Security Protection",
  },
  {
    icon: <FaSyncAlt />,
    title: "Regular Updates",
  },
  {
    icon: <FaRocket />,
    title: "Performance Boost",
  },
  {
    icon: <FaLifeRing />,
    title: "Technical Support",
  },
];

const WebsiteMaintenanceOverview = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}

          <div className="relative order-2 lg:order-1">

            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#EF6D58]/20"></div>

            <img
              src={maintenanceImg}
              alt="Website Maintenance"
              className="relative z-10 w-full h-[260px] sm:h-[350px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-2xl shadow-xl px-4 py-3 sm:px-6 sm:py-4">

              <h3 className="text-2xl sm:text-3xl font-bold text-[#391400]">
                24/7
              </h3>

              <p className="text-sm sm:text-base text-[#6B4F45]">
                Website Monitoring
              </p>

            </div>

          </div>

          {/* Content */}

          <div className="order-1 lg:order-2">

            <p className="uppercase tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold">
              Website Maintenance
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#391400] leading-tight">
              Keep Your Website
              <br />
              Running At Its Best
            </h2>

            <p className="mt-5 text-[#6B4F45] text-[15px] sm:text-base lg:text-lg leading-7 sm:leading-8">
              Launching your website is only the beginning. Regular
              maintenance keeps your website secure, fast, updated and
              performing smoothly so your visitors always enjoy the
              best experience.
            </p>

            <p className="mt-5 text-[#6B4F45] text-[15px] sm:text-base leading-7 sm:leading-8">
              Our maintenance services include security monitoring,
              software updates, bug fixing, backups, content updates,
              speed optimization and ongoing technical support to
              ensure your business stays online without interruptions.
            </p>

            {/* Features */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-xl bg-[#EF6D58] text-white flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>

                  <span className="font-semibold text-[#391400] text-sm sm:text-base">
                    {item.title}
                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-8">

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EF6D58] text-white px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Get Maintenance Plan
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebsiteMaintenanceOverview;