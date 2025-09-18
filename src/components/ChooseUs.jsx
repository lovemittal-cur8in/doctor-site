import React from "react"

const ChooseUs = () => {
  return (
    <div className="w-full bg-[#F5FAFF] h-fit flex flex-col p-6 lg:p-20 gap-10">
      {/* Heading */}
      <div className="flex flex-col gap-2 max-w-[740px]">
        <div className="bg-[#1656A5]/5 w-fit rounded-full font-medium text-xs px-2 py-1 text-[#1656A5] leading-[20px] tracking-[-0.02em]">
          Impact & Growth
        </div>
        <div className="text-3xl text-[#2C2C2C] lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em]">
          Extending care through community initiatives while building a strong
          future together.
        </div>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <div className="bg-[#EEF5FF] flex flex-col items-start rounded-2xl px-5 py-8 min-h-[260px] gap-6">
          <img src="/chart_data.svg" className="w-14 h-14" alt="" />
          <div className="flex flex-col gap-3">
            <div className="text-2xl lg:text-[32px] text-[#2C2C2C] leading-[32px] tracking-[-0.02em]">
              Health Outreach
            </div>
            <div className="text-base text-[#606060] leading-[24px] tracking-[-0.02em]">
              Awareness camps and community programs bringing fertility care
              closer to all.
            </div>
          </div>
        </div>

        <div className="bg-[#EEF5FF] flex flex-col items-start rounded-2xl px-5 py-8 min-h-[260px] gap-6">
          <img src="/stethoscope.svg" className="w-14 h-14" alt="" />
          <div className="flex flex-col gap-3">
            <div className="text-2xl lg:text-[32px] text-[#2C2C2C] leading-[32px] tracking-[-0.02em]">
              Medical Education
            </div>
            <div className="text-base text-[#606060] leading-[24px] tracking-[-0.02em]">
              Training doctors through CME sessions to spread knowledge and
              reduce stigma.
            </div>
          </div>
        </div>

        <div className="bg-[#EEF5FF] flex flex-col items-start rounded-2xl px-5 py-8 min-h-[260px] gap-6">
          <img src="/open_run.svg" className="w-14 h-14" alt="" />
          <div className="flex flex-col gap-3">
            <div className="text-2xl lg:text-[32px] text-[#2C2C2C] leading-[32px] tracking-[-0.02em]">
              Expanding Presence
            </div>
            <div className="text-base text-[#606060] leading-[24px] tracking-[-0.02em]">
              Growing across Maharashtra with advanced fertility centers and
              world-class labs.
            </div>
          </div>
        </div>

        <div className="bg-[#EEF5FF] flex flex-col items-start rounded-2xl px-5 py-8 min-h-[260px] gap-6">
          <img src="/join.svg" className="w-14 h-14" alt="" />
          <div className="flex flex-col gap-3">
            <div className="text-2xl lg:text-[32px] text-[#2C2C2C] leading-[32px] tracking-[-0.02em]">
              Future Partnerships
            </div>
            <div className="text-base text-[#606060] leading-[24px] tracking-[-0.02em]">
              Welcoming investors to join us in shaping tomorrow’s fertility
              care.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
