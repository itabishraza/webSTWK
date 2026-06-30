import React from 'react'
import Iconwhatsapp from './Iconwhatsapp'
import herosectionlogo from "../assets/herosectionlogo.svg";


const Herosection = () => {
  return (
    <div>
      <section className="min-h-screen bg-[#22233b] text-white">
 <div className="max-w-7xl mx-auto px-20 py-5 flex flex-col lg:flex-row items-center justify-between">

    {/* Left Side */}
    <div className="max-w-xl">

      <p className="text-orange-400  tracking-[4px] mb-4">
        Hi, I'm Tabish Raza
        <br />
        Freelance Web Developer
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        The Simple, 
        <br />
        Clean Design
        
      </h1>

      <p className="text-gray-400 mt-6 text-lg">
        I design and develop modern websites using the latest technologies, helping businesses establish a strong online presence and achieve their goals.      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-orange-500 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
          See My Work
        </button>

       
      </div>
    </div>

    {/* Right Side */}
    <div className="relative mt-20 lg:mt-0">

      {/* Background Circle */}
      <div className="absolute inset-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-xl"></div>

      {/* Profile Image */}
      <div className="relative z-10">
        <img
          src={herosectionlogo}
          alt="Tabish"
          className="w-[400px] rounded-[50px]"
        />
      </div>

      <Iconwhatsapp/>


    </div>

  </div>
</section>
    </div>
  )
}

export default Herosection
