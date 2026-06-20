import React from 'react'

const Service = () => {
  return (
    <div>
<section
  id="services"
  className="bg-[#F3D1BF] py-20 px-5 md:px-10"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
        Services
      </p>

      <h2 className="text-[#391400] text-4xl md:text-5xl font-bold leading-tight">
        How I Can Help 
        <br />
        Your Business
      </h2>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      {/* Service 1 */}
      <div className="border border-[#e8c6b2] p-8 md:p-10 bg-[#F3D1BF] hover:bg-white transition duration-300">

        <div className="w-16 h-16 rounded-full bg-[#EF6D58] flex items-center justify-center text-2xl mb-6">
          💻
        </div>

        <h3 className="text-2xl font-bold text-[#391400] mb-4">
          Web Development
        </h3>

        <p className="text-[#6B4F45] leading-7 mb-8">
          I build fast, responsive, and SEO-friendly websites that help businesses establish a strong online presence and convert visitors into customers.
        </p>

        <button className="flex items-center gap-3 text-[#391400] font-medium">
          <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            +
          </span>
          Learn More
        </button>

      </div>

      {/* Service 2 */}
      <div className="border border-[#e8c6b2] p-8 md:p-10 bg-white hover:bg-[#fff7f3] transition duration-300">

        <div className="w-16 h-16 rounded-full bg-[#EF6D58] flex items-center justify-center text-2xl mb-6">
          🎨
        </div>

        <h3 className="text-2xl font-bold text-[#391400] mb-4">
          Portfolio Design
        </h3>

        <p className="text-[#6B4F45] leading-7 mb-8">
          Personal portfolio websites tailored for developers, designers, freelancers, and job seekers.
        </p>

        <button className="flex items-center gap-3 text-[#391400] font-medium">
          <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            +
          </span>
          Learn More
        </button>

      </div>

      {/* Service 3 */}
      <div className="border border-[#e8c6b2] p-8 md:p-10 bg-[#F3D1BF] hover:bg-white transition duration-300">

        <div className="w-16 h-16 rounded-full bg-[#EF6D58] flex items-center justify-center text-2xl mb-6">
          ⚙️
        </div>

        <h3 className="text-2xl font-bold text-[#391400] mb-4">
          Backend Development
        </h3>

        <p className="text-[#6B4F45] leading-7 mb-8">
          Secure and scalable backend systems that power modern web applications, including APIs, authentication, database management, and business logic.
        </p>

        <button className="flex items-center gap-3 text-[#391400] font-medium">
          <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            +
          </span>
          Learn More
        </button>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Service
