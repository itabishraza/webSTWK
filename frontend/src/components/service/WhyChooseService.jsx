import React from "react";
import {
  FaBolt,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    description:
      "Lightning-fast websites optimized for speed, smooth performance, and better user experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Fully Responsive",
    description:
      "Your website will look perfect on desktop, tablet, and every mobile device.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Friendly",
    description:
      "Built with clean code and best SEO practices to improve your online visibility.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Development",
    description:
      "Strong authentication, secure APIs, and industry-standard coding practices.",
  },
  {
    icon: <FaHeadset />,
    title: "Ongoing Support",
    description:
      "Even after launch, we're here for updates, maintenance, and technical support.",
  },
  {
    icon: <FaRocket />,
    title: "Scalable Solutions",
    description:
      "Websites designed to grow with your business and handle future expansion.",
  },
];

const WhyChooseService = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-3">
            Why Choose webSTWK
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] leading-tight">
            More Than Just
            <br className="hidden sm:block" />
            Development
          </h2>

          <p className="text-[#6B4F45] mt-5 max-w-3xl mx-auto leading-7 sm:leading-8 text-sm sm:text-base">
            At webSTWK, we don't just build websites—we create digital
            experiences that help businesses attract customers, build trust,
            and grow online.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-transparent hover:border-[#EF6D58] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EF6D58]
                text-white flex items-center justify-center
                text-xl sm:text-2xl mb-5
                group-hover:scale-110 group-hover:rotate-6 transition duration-300"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#391400] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B4F45] text-sm sm:text-base leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseService;