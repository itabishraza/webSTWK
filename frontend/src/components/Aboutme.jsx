import React from 'react'
import CountUp from "react-countup";
import aboutPic from "../assets/aboutPic.svg";


const Aboutme = () => {
  return (
    <div>
      <section id="about" className="bg-[#F3D1BF] py-24 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Top Section */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <div className="relative flex justify-center">

        {/* Background Shape */}
        <div className="absolute w-72 h-72 bg-orange-200 rotate-12 rounded-xl"></div>

        {/* Profile Image */}
        <img
          src={aboutPic}
          alt="Tabish Raza"
          className="relative z-10 w-[320px] rounded-2xl shadow-xl"
        />

       
      </div>

      {/* Right Content */}
      <div>

        <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
          About Me
        </p>

        <h2 className="text-[#391400] text-4xl md:text-6xl font-bold leading-tight">
          Full-Stack

          <br />
          Web Designer    
        </h2>

        <p className="text-[#391400] font-medium mt-6 text-lg">
            Turning Ideas Into Scalable Web Applications
        </p>

        <p className="text-[#6B4F45] mt-4 leading-8">
          I'm Tabish Raza, a Backend Developer passionate about
          Node.js, Express.js, MongoDB, React, and Next.js.
          I enjoy building real-world applications that solve
          practical problems and deliver great user experiences.
        </p>

        <button className="mt-8 bg-white px-8 py-4 rounded-lg shadow-md font-semibold hover:shadow-xl transition">
          About Me
        </button>

      </div>
    </div>

    {/* Stats Section */}
    <div className="mt-20 grid md:grid-cols-3 border border-[#e8c6b2]">

      <div className="p-8 flex items-center gap-6 border-b md:border-b-0 md:border-r border-[#e8c6b2]">
        <div className="w-16 h-16 bg-[#EF6D58] rounded-full flex items-center justify-center text-2xl">
          💼
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#391400]">
           <CountUp
            start={0}
            end={48}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
            />
             +
          </h3>
          <p className="text-[#6B4F45]">
            Projects Completed
          </p>
        </div>
      </div>

      <div className="p-8 flex items-center gap-6 border-b md:border-b-0 md:border-r border-[#e8c6b2]">
        <div className="w-16 h-16 bg-[#EF6D58] rounded-full flex items-center justify-center text-2xl">
          ⚡
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#391400]">
            MERN
          </h3>
          <p className="text-[#6B4F45]">
            Stack Expertise
          </p>
        </div>
      </div>

      <div className="p-8 flex items-center gap-6">
        <div className="w-16 h-16 bg-[#EF6D58] rounded-full flex items-center justify-center text-2xl">
          🚀
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#391400]">
            100%
          </h3>
          <p className="text-[#6B4F45]">
            Learning Mindset
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Aboutme
