import React, { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    "About us",
    "Infertility",
    "Our Centers",
    "Treatments",
    "Doctors",
    "Success Stories",
    "Patient Resources",
    "Careers",
  ]

  return (
    <nav className="h-20 flex justify-between items-center px-6 md:px-20 bg-white shadow-sm relative">
      {/* Logo */}
      <div>
        <img src="/logo.png" className="h-10" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`text-sm font-normal rounded-lg py-2 px-3 cursor-pointer ${
              idx === 0
                ? "text-white bg-[#1656A5]"
                : "text-[#2C2C2C] hover:bg-[#1656A5] hover:text-white"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* "En" hidden on mobile */}
        <div className="hidden md:flex text-sm text-[#2C2C2C] font-normal rounded-lg py-2 px-3 cursor-pointer">
          En
        </div>
        <div className="bg-black/5 px-3 py-3 rounded-lg text-[#2C2C2C] flex items-center justify-center cursor-pointer">
          <img src="/search.svg" className="w-6 h-6" />
        </div>
        {/* Mobile Hamburger */}
        <div onClick={() => setIsOpen(!isOpen)} className="bg-black/5 px-3 md:hidden text-2xl py-3 rounded-lg text-[#2C2C2C] flex items-center justify-center cursor-pointer">
          {isOpen ? <HiX /> : <img src="/hamburger.svg" className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-200 flex flex-col md:hidden shadow-md z-50">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`px-6 py-3 text-sm font-normal cursor-pointer ${
                idx === 0
                  ? "text-white bg-[#1656A5]"
                  : "text-[#2C2C2C] hover:bg-[#1656A5] hover:text-white"
              }`}
            >
              {item}
            </div>
          ))}
          {/* "En" inside mobile menu */}
          <div className="px-6 py-3 text-sm text-[#2C2C2C] font-normal cursor-pointer hover:bg-[#1656A5] hover:text-white rounded-lg">
            En
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
