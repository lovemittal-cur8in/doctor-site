import React from 'react'

const JoinTeam = () => {
  return (
    <div className="relative pt-10 md:pt-0 bg-white w-full h-fit flex flex-col lg:flex-row px-6 lg:px-20 gap-10 lg:gap-20 items-center overflow-hidden">

      <img
        src="/about-circle1.png"
        alt="circle1"
        className="absolute top-0 right-0  h-full z-0"
      />

      <img
        src="/about-circle2.png"
        alt="circle2"
        className="absolute bottom-0 left-0  h-full z-0"
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full items-center gap-10 lg:gap-20">
        <div className="w-full lg:max-w-[800px] flex flex-col gap-6 lg:gap-12 text-center lg:text-left">
          <div className="text-[#94BA3D] text-2xl md:text-3xl lg:text-5xl leading-snug lg:leading-[56px] tracking-[-0.02em]">
            We’re always looking for passionate people to join us in creating
            life’s most precious journeys.
          </div>
          <div className="text-[#1656A5] text-xs md:text-sm py-2 md:py-3 px-3 md:px-4 border rounded-2xl w-fit mx-auto lg:mx-0 leading-[20px] md:leading-[24px] tracking-[-0.02em]">
            Join Our Team
          </div>
        </div>
        <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[474px]">
          <img src="/doctor.png" alt="doctor" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default JoinTeam
