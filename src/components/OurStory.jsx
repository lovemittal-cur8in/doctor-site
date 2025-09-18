import React, { useState } from "react"

const OurStory = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const options = [
    {
      title: "Care, Backed by Innovation",
      desc: "We combine leading fertility technology with genuine empathy, ensuring every couple’s unique journey is guided by both innovation and understanding.",
      image: "/image.png",
      label: "01",
      highlight: true,
    },
    {
      title: "Walking Beside You Always",
      desc: "Our team stands with you at every step, offering guidance, reassurance, and care beyond treatment.",
      image: "/image2.png",
      label: "02",
      highlight: false,
    },
    {
      title: "Turning Hope into Life",
      desc: "Through relentless dedication and advanced methods, we help turn aspirations of parenthood into reality.",
      image: "/image3.png",
      label: "03",
      highlight: false,
    },
  ]

  const active = options[activeIndex]

  return (
    <div className="bg-white h-fit flex flex-col lg:flex-row justify-between p-6 lg:p-20 gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-10 w-full lg:w-[432px]">
        <div className="flex flex-col gap-2">
          <div className="bg-[#1656A5]/5 w-fit rounded-full font-medium text-xs px-2 py-1 text-[#1656A5] leading-[20px] tracking-[-0.02em]">
            Why choose us
          </div>
          <div className="text-3xl lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em]">
            <span className="text-[#2C2C2C]">Our Story</span>
          </div>
        </div>

        {/* Clickable Options */}
        <div className="text-[#2c2c2c]/50 text-base leading-[24px] tracking-[-0.02em] flex flex-col gap-2">
          {options.map((opt, idx) => (
            <div key={idx}>
              <hr className="border-t border-[#A5A5A5] mb-2" />
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActiveIndex(idx)}
              >
                <div
                  className={`text-lg font-medium ${
                    activeIndex === idx ? "text-[#1656A5]" : "text-[#606060]"
                  }`}
                >
                  {opt.title}
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    activeIndex === idx ? "bg-[#1656A5]" : "bg-[#A5A5A5]"
                  }`}
                ></div>
              </div>
            </div>
          ))}
          <hr className="border-t mt-1 border-[#A5A5A5]" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-7 w-full lg:w-1/2">
        <div className="text-lg text-[#2C2C2C] leading-[30px] tracking-[-0.02em]">
          We believe every hopeful parent deserves a team that listens, cares,
          and fights to make dreams a reality — with science, empathy, and
          unwavering support.
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div>
            <img
              src={active.image}
              className="w-full max-w-[354px] rounded-2xl"
              alt={active.title}
            />
          </div>
          <div className="flex flex-col gap-5 w-full max-w-[309px]">
            <div className="flex flex-col gap-2">
              <div className="text-[#94BA3D] text-xs">{active.label}</div>
              <div className="text-[#1656A5] text-2xl">{active.title}</div>
            </div>
            <div className="text-[#2C2C2C] text-base">{active.desc}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
