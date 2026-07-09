import React from "react";
import aboutStory from "../../assets/AboutStory.svg";

const AboutStory = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-20 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Content */}
        <div className="max-w-2xl mx-auto lg:ml-40">

          {/* Small Heading */}
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm mb-4">
            About webSTWK
          </p>

          {/* Main Heading */}
          <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Building Modern
            <br />
            Websites That
            <br />
            Grow Businesses
          </h2>

          {/* Paragraph */}
          <p className="text-[#6B4F45] mt-6 md:mt-8 leading-7 md:leading-8 text-base md:text-lg">
            At{" "}
            <span className="font-semibold text-[#391400]">
              webSTWK
            </span>
            , I create fast, responsive, and modern websites that help
            businesses establish a strong online presence and build trust
            with their customers.
          </p>

          <p className="text-[#6B4F45] mt-5 md:mt-6 leading-7 md:leading-8 text-base">
            Whether you need a business website, portfolio, landing page,
            or a full-stack web application, I focus on clean design,
            performance, SEO, and user experience. Every project is crafted
            using the latest technologies like React.js, Node.js,
            Express.js, MongoDB, and Tailwind CSS.
          </p>

          {/* Button */}
          <button
            className="mt-8 md:mt-10 bg-[#EF6D58] text-white
            px-6 md:px-8 py-3 md:py-4 rounded-lg
            hover:scale-105 transition duration-300
            text-sm md:text-base"
          >
            View My Work
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;