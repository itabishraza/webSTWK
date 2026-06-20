import React from 'react'

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className="bg-[#F3D1BF] py-24 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-[#EF6D58] uppercase tracking-[4px] text-sm mb-4">
        Testimonials
      </p>

      <h2 className="text-[#391400] text-4xl md:text-6xl font-bold">
        What People
        <br />
        Say About Me
      </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="bg-[#fff7f3] border border-[#e8c6b2] rounded-xl p-8 hover:-translate-y-2 transition-all duration-300">

        <div className="flex gap-1 text-yellow-500 text-xl mb-6">
          ★★★★★
        </div>

        <p className="text-[#6B4F45] leading-7 mb-8">
          Tabish delivered a clean and responsive website.
          Communication was excellent and the project was
          completed on time.
        </p>

        <div className="flex items-center gap-4">
          <img
            src="./src/assets/person.jpeg"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="text-[#391400] font-bold text-lg">
              Sarah Khan
            </h4>

            <p className="text-[#6B4F45] text-sm">
              Small Business Owner
            </p>
          </div>
        </div>
      </div>

      {/* Featured Card */}
      <div className="bg-white border border-[#e8c6b2] rounded-xl p-8 shadow-xl scale-105">

        <div className="flex gap-1 text-yellow-500 text-xl mb-6">
          ★★★★★
        </div>

        <p className="text-[#6B4F45] leading-7 mb-8">
          Great backend development skills. The API was
          secure, scalable, and well documented.
          Highly recommended.
        </p>

        <div className="flex items-center gap-4">
          <img
            src="./src/assets/person.jpeg"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="text-[#391400] font-bold text-lg">
              Ahmed Ali
            </h4>

            <p className="text-[#6B4F45] text-sm">
              Startup Founder
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#fff7f3] border border-[#e8c6b2] rounded-xl p-8 hover:-translate-y-2 transition-all duration-300">

        <div className="flex gap-1 text-yellow-500 text-xl mb-6">
          ★★★★★
        </div>

        <p className="text-[#6B4F45] leading-7 mb-8">
          Professional portfolio design with excellent
          attention to detail. The final result exceeded
          expectations.
        </p>

        <div className="flex items-center gap-4">
          <img
            src="./src/assets/person.jpeg"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="text-[#391400] font-bold text-lg">
              John Martin
            </h4>

            <p className="text-[#6B4F45] text-sm">
              Software Engineer
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* Button */}
    <div className="text-center mt-14">
      <button className="bg-white px-8 py-4 rounded-lg shadow-md text-[#391400] font-semibold hover:shadow-xl transition">
        View All Reviews
      </button>
    </div>

  </div>
</section>
    </div>
  )
}

export default Testimonials
