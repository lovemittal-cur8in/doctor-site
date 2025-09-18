import React from "react"

const OurVision = () => {
  return (
    <div className="bg-white h-fit flex flex-col p-6 lg:p-20 gap-10">
      <div className="flex flex-col gap-20 w-full">
        {/* Heading */}
        <div className="flex flex-col gap-2 max-w-[532px]">
          <div className="bg-[#1656A5]/5 w-fit rounded-full font-medium text-xs px-2 py-1 text-[#1656A5] leading-[20px] tracking-[-0.02em]">
            Our Vision & Mission
          </div>
          <div className="text-3xl text-[#2C2C2C] lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em]">
            Guided by Purpose. <br />Driven by Compassion.
          </div>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {/* Vision */}
          <div className="border-t border-black/15 flex flex-col lg:flex-row gap-6 pt-2 justify-between">
            <div className="text-3xl text-[#2C2C2C] lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em] shrink-0">
              Our Vision
            </div>
            <div className="text-lg text-[#2C2C2C]/70 leading-[30px] tracking-[-0.02em] w-full lg:max-w-[532px]">
              At Progenesis IVF, our vision is to become the benchmark for
              reproductive healthcare — a trusted name where hope meets
              expertise. We are committed to walking hand-in-hand with every
              couple on their path to parenthood, blending cutting-edge fertility
              science with deep empathy and ethical care.
            </div>
          </div>

          {/* Mission */}
          <div className="border-t border-black/15 flex flex-col lg:flex-row gap-6 pt-2 justify-between">
            <div className="text-3xl text-[#2C2C2C] lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em] shrink-0">
              Our Mission
            </div>
            <div className="text-lg text-[#2C2C2C]/70 leading-[30px] tracking-[-0.02em] w-full lg:max-w-[532px]">
              Our mission is to provide comprehensive, personalized fertility
              solutions in a nurturing environment that values trust,
              transparency, and dignity. We strive to deliver the highest
              standards in reproductive medicine, guided by compassion, clinical
              excellence, and a relentless dedication to making parenthood
              possible, one family at a time.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurVision
