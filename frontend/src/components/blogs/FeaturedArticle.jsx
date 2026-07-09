import React from "react";
import featuredBlog from "../../assets/featuredBlog.svg";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";

const FeaturedArticle = () => {
  return (
    <section className="bg-[#F3D1BF] py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] text-xs sm:text-sm font-semibold">
            Featured Article
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] leading-tight">
            Editor's Pick
          </h2>

          <p className="mt-5 text-[#6B4F45] text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl mx-auto">
            Discover our most valuable article packed with practical
            knowledge, modern technologies and business insights.
          </p>

        </div>

        {/* Featured Card */}

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-xl">

          {/* Image */}

          <div className="overflow-hidden">

            <img
              src={featuredBlog}
              alt="Featured Blog"
              className="w-full h-60 sm:h-72 md:h-80 lg:h-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* Content */}

          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">

            <span className="inline-block w-fit bg-[#EF6D58] text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold">
              ⭐ Featured
            </span>

            <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] mt-6 text-xs sm:text-sm">
              Web Development
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#391400] mt-4 leading-tight">
              Why Every Business Needs
              <br />
              a Modern Website
              <br />
              in 2026
            </h2>

            <p className="text-[#6B4F45] text-sm sm:text-base leading-7 md:leading-8 mt-6">
              A modern website is more than an online presence.
              It's your digital storefront that builds trust,
              attracts customers, improves SEO and helps grow
              your business 24/7. Learn the essential features
              every successful business website should have.
            </p>

            {/* Meta */}

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 text-[#6B4F45] text-sm sm:text-base">

              <div className="flex items-center gap-2">
                <FaUser className="text-[#EF6D58]" />
                webSTWK
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#EF6D58]" />
                July 2026
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-[#EF6D58]" />
                8 min read
              </div>

            </div>

            {/* Button */}

            <button
              className="mt-8 md:mt-10 w-full sm:w-fit
              bg-[#EF6D58]
              text-white
              px-6 sm:px-8
              py-3.5 sm:py-4
              rounded-xl
              flex items-center
              justify-center
              gap-3
              hover:gap-5
              transition-all"
            >
              Read Full Article

              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedArticle;