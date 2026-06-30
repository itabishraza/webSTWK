import React from 'react'
import Doctorproject from "../assets/Doctorproject.png";
import realtimechatapp from "../assets/realtimechatapp.png";


const Portfolio = () => {
  return (
    <div>
      <section
  id="portfolio"
  className="bg-[#22233b] py-24 px-6"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">

      <div>
        <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
          Portfolio
        </p>

        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Latest Work
        </h2>
      </div>

      <button className="mt-6 md:mt-0 border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
        Explore More
      </button>

    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Project 1 */}
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">

        <img
          src={Doctorproject}
          alt="Doctor App"
         className="h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute bottom-6 left-6">
          <span className="bg-white text-black text-sm px-4 py-1 rounded-full">
            MERN Stack
          </span>

          <h3 className="text-white text-3xl font-bold mt-4">
            Doctor Booking
          </h3>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">

        <img
          src={realtimechatapp}
          alt="Second Brain"
         className="h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-6 left-6">
          <span className="bg-white text-black text-sm px-4 py-1 rounded-full">
            Node.js
          </span>

          <h3 className="text-white text-3xl font-bold mt-4">
            Second Brain
          </h3>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">

        <img
          src={realtimechatapp}
          alt="Chat App"
         className="h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-6 left-6">
          <span className="bg-white text-black text-sm px-4 py-1 rounded-full">
            Socket.io
          </span>

          <h3 className="text-white text-3xl font-bold mt-4">
            Chat App
          </h3>
        </div>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Portfolio
