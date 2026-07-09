import React from "react";
import Iconwhatsapp from "../common/Iconwhatsapp";
import herosectionlogo from "../../assets/herosectionlogo.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#22233b] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="uppercase tracking-[5px] text-orange-400 text-sm md:text-base">
            Hi, I'm Tabish Raza
            <br />
            Freelance Web Developer
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            The Simple,
            <br />
            Clean Design
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            I design and develop modern, fast and responsive websites using
            the latest technologies, helping businesses establish a strong
            online presence and achieve their goals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <a href="/projects">
              <button className="bg-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
                See My Work
              </button>
            </a>

            <a href="#contact">
              <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#22233b] transition duration-300">
                Let's Talk
              </button>
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-orange-500/20 rounded-full blur-3xl"></div>

          {/* Image */}
          <img
            src={herosectionlogo}
            alt="Tabish Raza"
            className="relative z-10 w-72 md:w-96 lg:w-[450px]"
          />

          <Iconwhatsapp />

        </div>

      </div>
    </section>
  );
};

export default HeroSection;