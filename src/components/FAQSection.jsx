import React, { useState } from "react"

const faqs = [
  {
    question: "What is infertility?",
    answer: "Infertility can be caused by various factors such as ovulation disorders, blocked fallopian tubes, low sperm count, lifestyle factors, or underlying medical conditions."
  },
  {
    question: "What causes infertility?",
    answer: "In women, infertility may be caused by ovulation disorders, hormonal imbalances, endometriosis, damage to fallopian tubes, or age-related decline in fertility."
  },
  {
    question: "What can cause infertility in Women?",
    answer: "According to research, around 10-15% of couples experience infertility globally."
  },
  {
    question: "How Common is Infertility?",
    answer: "According to research, around 10-15% of couples experience infertility globally."
  },
  {
    question: "What can cause infertility in Men",
    answer: "According to research, around 10-15% of couples experience infertility globally."
  },
  {
    question: "When should I seek consultation for infertility?",
    answer: "According to research, around 10-15% of couples experience infertility globally."
  },
  {
    question: "What can cause infertility in Men",
    answer: "According to research, around 10-15% of couples experience infertility globally."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-[#FAFAFA] h-fit flex flex-col lg:flex-row justify-between p-6 lg:p-20 gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-10 w-full lg:w-[432px]">
        <div className="flex flex-col gap-2">
          <div className="bg-[#1656A5]/5 w-fit rounded-full font-medium text-xs px-2 py-1 text-[#1656A5] leading-[20px] tracking-[-0.02em]">
            FAQ's
          </div>
          <div className="text-3xl lg:text-5xl leading-[40px] lg:leading-[56px] tracking-[-0.02em]">
            <span className="text-[#2C2C2C]">Quick answers to the</span>{" "}
            <span className="text-[#94BA3D]">
              most common fertility-related questions.
            </span>
          </div>
        </div>
        <div className="text-[#2c2c2c]/50 text-base leading-[24px] tracking-[-0.02em]">
          Didn’t find what you are looking for?, <br />
          Checkout{" "}
          <span className="text-[#1656A5]">Patient Resources</span> section to
          know more.
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-7 w-full lg:w-1/2">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <div className="text-[#F9F9F9] font-medium border-[1px] border-[#1656A5] bg-[#1656A5] rounded-xl px-5 py-3 text-sm">
            General
          </div>
          <div className="text-[#1656A5] border-[1px] font-medium border-[#1656A5] rounded-xl px-5 py-3 text-sm">
            Pricing & Packages
          </div>
          <div className="text-[#1656A5] border-[1px] font-medium border-[#1656A5] rounded-xl px-5 py-3 text-sm">
            Treatment-Specific
          </div>
          <div className="text-[#1656A5] border-[1px] font-medium border-[#1656A5] rounded-xl px-5 py-3 text-sm">
            Fertility-Related
          </div>
          <div className="text-[#1656A5] border-[1px] font-medium border-[#1656A5] rounded-xl px-5 py-3 text-sm">
            Others
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-2xl px-4 py-3 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <div className="text-base text-[#2C2C2C] leading-[24px] tracking-[-0.02em]">
                  {faq.question}
                </div>
                <img
                  src={openIndex === index ? "/up.svg" : "/down.svg"}
                  alt="toggle"
                  className="w-2 h-2"
                />
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="mt-3 text-base text-[#2C2C2C] leading-[24px] tracking-[-0.02em]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection
