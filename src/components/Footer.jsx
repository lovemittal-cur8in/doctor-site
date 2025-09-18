import React from 'react';
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaFacebookF, 
  FaThreads, 
  FaXTwitter,
  FaChevronDown 
} from 'react-icons/fa6';

const Footer = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Centers', href: '#centers' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Careers', href: '#careers' },
        { name: 'Success Stories', href: '#success-stories' }
      ]
    },
    {
      title: 'Infertility',
      hasDropdown: true,
      links: [
        { name: 'Female Infertility', href: '#female-infertility' },
        { name: 'Male Infertility', href: '#male-infertility' }
      ]
    },
    {
      title: 'Treatments',
      hasDropdown: true,
      links: [
        { name: 'Advanced Treatments', href: '#advanced-treatments' },
        { name: 'Infertility Treatments', href: '#infertility-treatments' },
        { name: 'Fertility Preservation', href: '#fertility-preservation' },
        { name: 'Fertility Evaluation', href: '#fertility-evaluation' }
      ]
    },
    {
      title: 'Patient Resources',
      links: [
        { name: 'International Patients', href: '#international-patients' },
        { name: 'EMI Options', href: '#emi-options' },
        { name: 'Second Opinion', href: '#second-opinion' },
        { name: 'Blogs', href: '#blogs' }
      ]
    },
    {
      title: 'Legal & Training',
      links: [
        { name: 'Privacy Policy', href: '#privacy-policy' },
        { name: 'Fellowships', href: '#fellowships' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: 'https://linkedin.com/company/progenesis',
      bgColor: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/progenesis',
      bgColor: 'hover:bg-pink-600'
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      href: 'https://facebook.com/progenesis',
      bgColor: 'hover:bg-blue-700'
    },
    {
      name: 'Threads',
      icon: FaThreads,
      href: 'https://threads.net/progenesis',
      bgColor: 'hover:bg-gray-800'
    },
    {
      name: 'Twitter',
      icon: FaXTwitter,
      href: 'https://twitter.com/progenesis',
      bgColor: 'hover:bg-gray-900'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/footer.png"
          alt="Baby with giraffe toy"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-white font-semibold text-lg flex items-center">
                  {section.title}
                  {section.hasDropdown && (
                    <FaChevronDown className="ml-2 h-3 w-3 opacity-70" />
                  )}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-4">
                Aiming to be the benchmark for reproductive health care services.
              </h2>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left text-sm mt-6 md:mt-0 order-2 lg:order-1">
              © 2025 All Rights Reserved. Progenesis Fertility Center
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-1 order-1 lg:order-2">
              {socialLinks.map((social, index) => (
                <React.Fragment key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 ${social.bgColor} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                  {index < socialLinks.length - 1 && (
                    <div className="w-px h-6 bg-white/30 mx-2"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Responsive Adjustments */}
        <div className="lg:hidden">
          {/* Mobile-specific footer adjustments if needed */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-60"></div>
    </footer>
  );
};

export default Footer;