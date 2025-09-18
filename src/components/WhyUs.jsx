import React, { useState, useEffect } from "react"

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const options = [
    {
      title: "Personalized, Holistic Care",
      desc: "Every journey is unique. We design your treatment around your story, not just your symptoms.",
      image: "/why11.png",
      label: "01",
    },
    {
      title: "Always Accessible",
      desc: "Our team stands with you at every step, offering guidance, reassurance, and care beyond treatment.",
      image: "/why22.png",
      label: "02",
    },
    {
      title: "Transparency Builds Trust",
      desc: "Through relentless dedication and advanced methods, we help turn aspirations of parenthood into reality.",
      image: "/why33.png",
      label: "03",
    },
    {
      title: "Your Journey, Your Say",
      desc: "With years of proven excellence, we ensure your parenthood journey is handled with unmatched expertise and compassion.",
      image: "/why44.png",
      label: "04",
    },
  ]

  // Auto-slide loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % options.length)
    }, 4000) // 4 sec each

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#1656A5]/5 h-fit flex flex-col lg:flex-row justify-between p-6 lg:p-20 gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-14 w-full lg:w-[432px]">
        <div className="flex flex-col gap-2">
          <div className="bg-[#1656A5]/5 w-fit rounded-full font-medium text-xs px-2 py-1 text-[#1656A5]">
            Why choose us
          </div>
          <div className="text-3xl lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em]">
            <span className="text-[#2C2C2C]">Why Progenesis?</span>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-6">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="cursor-pointer"
              onClick={() => setActiveIndex(idx)}
            >
              {/* Progress Bar */}
              <div className="relative h-[2px] bg-[#A5A5A5] mb-3 overflow-hidden rounded">
                {activeIndex === idx && (
                  <div
                    className="absolute left-0 top-0 h-full bg-[#1656A5]"
                    style={{
                      animation: "progressBar 4s linear forwards",
                    }}
                  />
                )}
              </div>

              {/* Text + Number */}
              <div className="flex justify-between gap-10">
                <div className="flex flex-col">
                  <div
                    className={`text-2xl leading-[32px] tracking-[-0.02em] ${
                      activeIndex === idx ? "text-[#2C2C2C]" : "text-[#606060]"
                    }`}
                  >
                    {opt.title}
                  </div>
                  {activeIndex === idx && (
                    <div className="text-xs leading-[24px] tracking-[-0.02em] text-[#606060]">
                      {opt.desc}
                    </div>
                  )}
                </div>
                <div
                  className={`text-base font-semibold ${
                    activeIndex === idx ? "text-[#1656A5]" : "text-[#606060]"
                  }`}
                >
                  {opt.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3 relative">
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
          {options.map((opt, idx) => (
            <img
              key={idx}
              src={opt.image}
              alt={opt.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar animation keyframes */}
      <style>
        {`
          @keyframes progressBar {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </div>
  )
}

export default WhyUs
