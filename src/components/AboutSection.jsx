import React from 'react'

const AboutSection = () => {
  return (
    <div className='h-[647px] bg-white p-10 md:p-20 via-white to-[rgba(22,86,165,0.42)] relative overflow-hidden'>
        <img
          src="/about-circle1.png"
          alt="circle1"
          className="absolute top-0 right-0  h-full z-0"
        />
        <img
          src="/person.png"
          alt="circle1"
          className="absolute bottom-0 right-0  h-1/2 md:h-full z-5"
        />

        {/* Bottom Left Circle */}
        <img
          src="/heart1.png"
          alt="person"
          className="absolute hidden md:visible bottom-0 left-0  h-full z-0"
        />
        <img
          src="/about-circle2.png"
          alt="circle2"
          className="absolute bottom-0 left-0  h-full z-0"
        />

        <div className='relative z-10 flex flex-col gap-10'>
          <div className=' text-xs md:text-lg font-medium'><span className='text-[#606060]'>Home > </span><span className='text-[#1656A5]'>About Us</span></div>
          <div className='max-w-[756px] flex flex-col gap-8'>
            <div className='text-[#252525] font-semibold text-[32px] md:text-[70px] leading-[40px] md:leading-[88px] tracking-[-0.02em]'>Your journey to parenthood begins here</div>
            <div className="text-[#F9F9F9] w-fit font-medium border-[1px] border-[#252525] bg-[#252525] rounded-xl px-5 py-3 text-sm">
              Book Your Appointment
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutSection