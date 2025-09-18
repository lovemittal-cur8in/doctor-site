import React from "react";

const DropdownMenu = ({ title, mobile }) => {
  const aboutUsLinks = [
    "Our Story",
    "Our Approach",
    "Our Vision & Mission",
    "Why choose us",
    "Leadership Team",
    "Impact & Growth",
    "FAQs",
  ];

  let discoverLinks = [];
  switch (title) {
    case "About us":
      discoverLinks = aboutUsLinks;
      break;
    case "Infertility":
      discoverLinks = ["Male Infertility", "Female Infertility", "IVF Options", "FAQs"];
      break;
    case "Our Centers":
      discoverLinks = ["Mumbai", "Pune", "Delhi", "Bangalore"];
      break;
    case "Treatments":
      discoverLinks = ["IVF", "IUI", "ICSI", "Egg Freezing"];
      break;
    case "Patient Resources":
      discoverLinks = ["Blogs", "FAQs", "Guides", "Support"];
      break;
    default:
      discoverLinks = [];
  }

  return (
    <div
      className={`absolute bg-white shadow-xl rounded-2xl p-8 flex z-50 transition-all duration-300 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto ${
        mobile ? "flex-col w-full h-auto" : ""
      }`}
      style={{
        width: mobile ? "100%" : "1200px", // adjusted width
        height: mobile ? "auto" : "350px", // adjusted height
        top: mobile ? "0" : "104px",
        left: mobile ? "0" : "153px",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      {/* Section 1 - Left Image */}
      {!mobile && (
        <div className="w-1/4 flex-shrink-0 flex items-center justify-center">
          <img
            src="/dropdown.png"
            className="rounded-xl shadow-md w-[280px] h-[280px] object-cover"
            alt="Dropdown visual"
          />
        </div>
      )}

      {/* Section 2 - Discover Us */}
      <div className="flex-1 px-8">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Discover Us</h3>
        <ul className="space-y-3">
          {discoverLinks.map((link) => (
            <li
              key={link}
              className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3 - Quick Links */}
      <div className="flex-1 px-8">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            Book Appointment
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            +91 94239 71260
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            WhatsApp: +91 70309 44041
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            Our Specialists
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            Online Consult
          </li>
        </ul>
      </div>

      {/* Section 4 - More */}
      <div className="flex-1 px-8">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">More</h3>
        <ul className="space-y-3">
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            EMI Options
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            Fellowship
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            Our Centers
          </li>
          <li className="text-base text-gray-700 hover:text-[#1656A5] cursor-pointer">
            Our Social Impact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
