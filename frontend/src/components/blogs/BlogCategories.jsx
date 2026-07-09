import React from "react";
import {
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaSearch,
  FaPaintBrush,
  FaBriefcase,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    posts: "18 Articles",
    color: "bg-blue-500",
  },
  {
    icon: <FaReact />,
    title: "React.js",
    posts: "12 Articles",
    color: "bg-cyan-500",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    posts: "10 Articles",
    color: "bg-green-500",
  },
  {
    icon: <FaSearch />,
    title: "SEO",
    posts: "8 Articles",
    color: "bg-orange-500",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX",
    posts: "9 Articles",
    color: "bg-pink-500",
  },
  {
    icon: <FaBriefcase />,
    title: "Business",
    posts: "14 Articles",
    color: "bg-purple-500",
  },
];

const BlogCategories = () => {
  return (
    <section className="bg-[#22233b] py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#EF6D58] font-semibold text-sm">
            Categories
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Browse By Topic
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-7 px-2">
            Explore articles covering modern web development,
            programming, SEO, UI/UX, business growth and the latest
            technologies.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {categories.map((item, index) => (

            <div
              key={index}
              className="group bg-[#2d2f4b] rounded-2xl lg:rounded-3xl
              p-5 sm:p-6 lg:p-8
              border border-[#3d4065]
              hover:border-[#EF6D58]
              hover:-translate-y-2
              transition-all duration-300
              cursor-pointer"
            >

              {/* Icon */}

              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.color}
                flex items-center justify-center
                text-white text-2xl sm:text-3xl
                group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-white text-xl sm:text-2xl font-bold mt-6">
                {item.title}
              </h3>

              {/* Articles */}

              <p className="text-gray-400 text-sm sm:text-base mt-3 leading-7">
                {item.posts}
              </p>

              {/* Progress Line */}

              <div className="mt-6 sm:mt-8 h-1 rounded-full bg-[#3d4065] overflow-hidden">

                <div className="w-0 group-hover:w-full h-full bg-[#EF6D58] transition-all duration-500"></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BlogCategories;