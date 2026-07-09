import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import blog3 from "../../assets/blog3.svg";
import blog4 from "../../assets/blog4.svg";
import blog5 from "../../assets/blog5.svg";
import blog6 from "../../assets/blog6.svg";

const blogs = [
  {
    image: blog1,
    category: "Web Development",
    title: "10 Features Every Business Website Should Have",
    description:
      "Discover the essential features that make a modern business website fast, secure and customer-friendly.",
    date: "July 2026",
    read: "6 min read",
  },
  {
    image: blog2,
    category: "React.js",
    title: "Why React is the Best Choice for Modern Websites",
    description:
      "Learn why React.js is trusted by startups and enterprises for building scalable web applications.",
    date: "July 2026",
    read: "8 min read",
  },
  {
    image: blog3,
    category: "SEO",
    title: "SEO Tips to Rank Your Website Higher",
    description:
      "Simple SEO strategies that help improve search rankings and attract more visitors.",
    date: "July 2026",
    read: "7 min read",
  },
  {
    image: blog4,
    category: "Performance",
    title: "Speed Up Your Website in 5 Easy Steps",
    description:
      "Improve loading speed, Core Web Vitals and user experience using modern optimization techniques.",
    date: "July 2026",
    read: "5 min read",
  },
  {
    image: blog5,
    category: "Node.js",
    title: "Building Secure APIs with Node.js & Express",
    description:
      "Best practices for authentication, security and scalable backend development.",
    date: "July 2026",
    read: "9 min read",
  },
  {
    image: blog6,
    category: "Business",
    title: "How a Website Helps Grow Your Business",
    description:
      "Understand how a professional website increases trust, leads and long-term business growth.",
    date: "July 2026",
    read: "6 min read",
  },
];

const BlogGrid = () => {
  return (
    <section className="bg-[#F3D1BF] py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] font-semibold text-sm">
            Latest Articles
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#391400] leading-tight">
            Learn Web Development
            <br className="hidden sm:block" />
            <span className="sm:ml-2">& Business Growth</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#6B4F45] leading-7 max-w-2xl mx-auto px-2">
            Stay updated with practical guides, tutorials, development
            tips and digital marketing insights from webSTWK.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 sm:h-60 md:h-56 lg:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-5 sm:p-6 lg:p-7">

                <p className="uppercase tracking-[2px] text-xs sm:text-sm text-[#EF6D58] font-semibold">

                  {blog.category}

                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-[#391400] mt-3 leading-snug">

                  {blog.title}

                </h3>

                <p className="text-[#6B4F45] text-sm sm:text-base leading-7 mt-4">

                  {blog.description}

                </p>

                {/* Meta */}

                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-6 text-sm text-[#6B4F45]">

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt className="text-[#EF6D58]" />

                    {blog.date}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaClock className="text-[#EF6D58]" />

                    {blog.read}

                  </div>

                </div>

                {/* Read More */}

                <button
                  className="mt-6 w-full sm:w-auto flex justify-center sm:justify-start items-center gap-2 text-[#EF6D58] font-semibold hover:gap-4 transition-all duration-300"
                >

                  Read More

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BlogGrid;