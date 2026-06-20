import React from 'react'

const Features = () => {
  return (
    <div>
      <section className="bg-[#22233b] py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}
      <div>
        <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
          Features
        </p>

        <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Why Work With Me
          {/* <br />
          for Your Next Project */}
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-lg">
          I create scalable, responsive and user-friendly
          web applications that help businesses grow online.
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#EF6D58] flex items-center justify-center">
              ✓
            </div>
            <p className="text-gray-300">
              Responsive & Modern UI Design
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#EF6D58] flex items-center justify-center">
              ✓
            </div>
            <p className="text-gray-300">
              Scalable Backend Development
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#EF6D58] flex items-center justify-center">
              ✓
            </div>
            <p className="text-gray-300">
              REST APIs & Authentication Systems
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#EF6D58] flex items-center justify-center">
              ✓
            </div>
            <p className="text-gray-300">
              Clean Code & Best Practices
            </p>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex justify-center">

        {/* Main Card */}
        <div className="relative z-10  flex items-center justify-center">
          <img
            src="./src/assets/FeaturePic.svg"
            alt="Developer"
            className="w-[420px]"
          />
        </div>

      </div>

    </div>

  </div>
</section>
<section className="bg-[#dca389] py-16 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="bg-[#dca389] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

      <div>
        <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm">
          Get Started
        </p>

        <h3 className="text-[#391400] text-4xl font-bold mt-4">
          Let's Build Your
          <br />
          Next Project
        </h3>

        <button className="mt-8 bg-[#EF6D58] text-white px-8 py-4 rounded-lg hover:scale-105 transition">
          Contact Me
        </button>
      </div>

      <p className="text-[#6B4F45] max-w-md">
        Whether you need a portfolio website,
        business website, backend API or a full
        stack application, I can help bring your
        ideas to life.
      </p>

    </div>

  </div>
</section>
    </div>
  )
}

export default Features
