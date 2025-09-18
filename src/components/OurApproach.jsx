import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 0,
    tab: "Care That Fits You",
    bg: "/bg.png",
    heading:
      "We provide fertility care that’s personal and flexible, designed to fit your unique journey to parenthood.",
    boxes: [
      { icon: "/monitor_heart.svg", title: "In-Depth Diagnosis First", text: "Finding real causes before treatment begins." },
      { icon: "/lab_research.svg", title: "Tailored Protocols", text: "Plans made for your body’s unique needs." },
      { icon: "/person_heart.svg", title: "Flexible Care", text: "In-clinic or teleconsultation options for your convenience." },
      { icon: "/acute.svg", title: "Smarter Progress", text: "Fewer treatment cycles, saving you time and stress." },
    ],
  },
  {
    id: 1,
    tab: "Science with Heart",
    bg: "/bg1.png",
    heading:
      "Advanced treatments meet genuine empathy the best of medical expertise with support.",
    boxes: [
      { icon: "/lab_research.svg", title: "World-Class Labs", text: "Cutting-edge technology ensuring accuracy and safety." },
      { icon: "/person_heart.svg", title: "Personal Support", text: "Dedicated counselors guiding you every step." },
      { icon: "/monitor_heart.svg", title: "Safe Treatments", text: "Care designed to protect your health and wellbeing." },
      { icon: "/acute.svg", title: "Holistic Care", text: "Physical, emotional, and mental health support." },
    ],
  },
  {
    id: 2,
    tab: "Clear & Complete",
    bg: "/bg2.png",
    heading:
      "We believe in complete transparency and clear communication, so you always know what to expect.",
    boxes: [
      { icon: "/acute.svg", title: "Transparent Pricing", text: "No hidden costs, clear breakdowns always." },
      { icon: "/monitor_heart.svg", title: "Detailed Roadmaps", text: "Know your journey, step by step." },
      { icon: "/lab_research.svg", title: "Comprehensive Reports", text: "Data you can trust, explained simply." },
      { icon: "/person_heart.svg", title: "Open Communication", text: "Every question answered with clarity." },
    ],
  },
]

const OurApproach = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    if (activeIndex < slides.length - 1) setActiveIndex(activeIndex + 1)
  }

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1)
  }

  return (
    <div className="bg-[#FAFAFA] h-fit flex flex-col p-6 lg:p-20 gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-2 max-w-[632px]">
          <div className="bg-[#1656A5]/5 w-fit rounded-full font-medium text-xs px-2 py-1 text-[#1656A5] leading-[20px] tracking-[-0.02em]">
            Our Approach
          </div>
          <div className="text-2xl md:text-3xl lg:text-5xl leading-[32px] md:leading-[40px] lg:leading-[56px] tracking-[-0.02em] text-[#2C2C2C]">
            Compassion Meets Science
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col w-full md:flex-row justify-between">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer pt-2 md:pt-0 pb-2 text-lg md:text-2xl text-center px-0 md:px-8 lg:px-32 leading-[28px] md:leading-[40px] tracking-[-0.02em] ${
                activeIndex === idx
                  ? "border-b-[1px] border-[#1656A5] text-[#1656A5]"
                  : "border-b-[1px] border-[#C4C4C4] text-[#606060]"
              }`}
            >
              {slide.tab}
            </div>
          ))}
        </div>

        {/* Carousel */}
          <div className="relative flex justify-center w-full mt-5">
            <div className="relative w-full max-w-full h-fit min-h-[400px] md:min-h-[500px] lg:min-h-[530px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[activeIndex].id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[activeIndex].bg})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-20 md:gap-32 p-6 md:p-10 lg:p-14 h-fit text-white">
                    {/* Heading + Buttons */}
                    <div className="flex flex-col gap-4">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug lg:leading-[56px] tracking-[-0.02em]">
                        {slides[activeIndex].heading}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="text-[#2C2C2C] font-medium border-[1px] border-[#F9F9F9] bg-[#F9F9F9] rounded-xl px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm">
                          Book Your Appointment
                        </div>
                        <div className="text-[#F9F9F9] border-[1px] font-medium border-white rounded-xl px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm">
                          Check My Fit
                        </div>
                      </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full">
                      {slides[activeIndex].boxes.map((box, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-start rounded-2xl min-h-[120px] md:min-h-[140px] lg:min-h-[160px] gap-4 md:gap-6"
                        >
                          <img src={box.icon} className="w-6 h-6 md:w-8 md:h-8" alt={box.title} />
                          <div className="flex flex-col gap-1">
                            <div className="text-xl md:text-lg lg:text-xl text-[#F9F9F9] leading-[24px] md:leading-[28px] lg:leading-[32px] tracking-[-0.02em]">
                              {box.title}
                            </div>
                            <div className="text-base md:text-sm text-[#F9F9F9] leading-[20px] md:leading-[24px] tracking-[-0.02em]">
                              {box.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>


        {/* Arrow Navigation */}
        <div className="flex gap-4 mx-auto mt-5">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`border-[1px] w-fit text-[#1656A5] p-5 cursor-pointer rounded-2xl transition ${
              activeIndex === 0
                ? "opacity-30 border-[#1656A5]/30 cursor-not-allowed"
                : "opacity-100 border-[#1656A5]"
            }`}
          >
            <img src="/left.svg" className="w-3 h-3" alt="left" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === slides.length - 1}
            className={`border-[1px] w-fit text-[#1656A5] p-5 rounded-2xl transition ${
              activeIndex === slides.length - 1
                ? "opacity-30 border-[#1656A5]/30 cursor-not-allowed"
                : "opacity-100 border-[#1656A5]"
            }`}
          >
            <img src="/right.svg" className="w-3 h-3" alt="right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
