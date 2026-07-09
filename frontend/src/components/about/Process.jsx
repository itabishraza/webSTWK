import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We understand your business, goals and target audience before starting the project.",
  },
  {
    number: "02",
    title: "Planning",
    desc: "A complete roadmap is prepared including wireframes, features and technologies.",
  },
  {
    number: "03",
    title: "Design",
    desc: "Modern UI/UX is designed to provide a professional and engaging user experience.",
  },
  {
    number: "04",
    title: "Development",
    desc: "We build your website using modern technologies with clean and scalable code.",
  },
  {
    number: "05",
    title: "Launch",
    desc: "After testing and optimization, your website goes live with ongoing support.",
  },
];

const Process = () => {
  return (
    <section className="bg-[#F3D1BF] py-16 md:py-24 lg:py-28 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#EF6D58] text-xs sm:text-sm mb-4">
            Our Process
          </p>

          <h2 className="text-[#391400] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            How We Build
            <br />
            Your Website
          </h2>

          <p className="mt-5 md:mt-6 text-[#6B4F45] max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8">
            Every project follows a proven process that ensures quality,
            transparency and successful delivery.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[3px] bg-[#EF6D58]/30 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-10 lg:space-y-14">

            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* Card */}
                <div className="w-full lg:w-1/2">

                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                    {/* Mobile Step Badge */}
                    <div className="flex lg:hidden items-center gap-3 mb-5">

                      <div className="w-12 h-12 rounded-full bg-[#EF6D58] text-white font-bold flex items-center justify-center">
                        {step.number}
                      </div>

                      <span className="uppercase text-xs tracking-[3px] text-[#EF6D58] font-semibold">
                        Step {step.number}
                      </span>

                    </div>

                    {/* Desktop Label */}
                    <span className="hidden lg:block uppercase text-sm tracking-[3px] text-[#EF6D58] font-semibold">
                      Step {step.number}
                    </span>

                    <h3 className="text-[#391400] text-2xl md:text-3xl font-bold mt-2 lg:mt-3">
                      {step.title}
                    </h3>

                    <p className="text-[#6B4F45] mt-4 leading-7 md:leading-8 text-sm md:text-base">
                      {step.desc}
                    </p>

                  </div>

                </div>

                {/* Timeline Circle */}
                <div className="hidden lg:flex w-20 justify-center">

                  <div className="w-14 h-14 rounded-full bg-[#EF6D58] text-white font-bold flex items-center justify-center shadow-xl z-10">
                    {step.number}
                  </div>

                </div>

                {/* Empty Side */}
                <div className="hidden lg:block lg:w-1/2"></div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;