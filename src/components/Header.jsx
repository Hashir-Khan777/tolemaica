import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "services",
      link: "/services"
    },
    {
      title: "IAC Tech",
      link: "/iac-tech"
    },
    {
      title: "About",
      link: "/about"
    },
  ]

  return (
    <>
      {/* Navbar Container */}
      <div className="relative z-50  w-[100%] mx-auto max-w-[100%] border-2 border-white my-6 rounded-full flex justify-between items-center px-[24px] py-[15px] lg:px-16 lg:py-5"
        style={{
          background: "rgba(0,0,0,0.5)",
          // borderImage: "linear-gradient(to right, #FF9966, #FFFFFF) 1",
          borderRadius: "9999px" // Ensures fully rounded corners
        }}>

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-3 z-20">
          <img src="./logo.svg" alt="Logo" className="md:h-10 md:w-48 h-[24px]" />
        </div>

        {/* Desktop Navigation */}
        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-row justify-center items-center xl:gap-[20px] gap-[12px]">

          {
            navLinks.map((navLink, index) =>
              <div className='flex flex-row justify-center items-center xl:gap-[20px] gap-[12px]'>
                <NavLink index={index}
                  to={navLink.link}
                  className={({ isActive }) =>
                    `relative uppercase font-raleway
    ${isActive ? "text-white font-[600] xl:text-[20px]/[100%] text-[17px]/[20.48px] before:content-[''] before:absolute before:-left-3 before:text-[#FF9966] before:w-3 before:h-3"
                      : "text-white/60 font-[500] xl:text-[16px]/[100%] tracking-[10%] text-[14px]/[16.78px]"}`}
                >
                  {navLink.title}
                </NavLink>
                <span className="text-gray-400">/</span>
              </div>
            )
          }

          <a href="#" className="text-yellow-400 text-sm">
            <img src="./solid.png" alt="" className='h-20px w-[100px]' />
          </a>
          <span className="text-white/60">/</span>
          {/* Contact Button */}
          <button className="text-black text-[16px]/[18.78px] bg-white rounded-full font-[700] py-[10px] px-[24px]">
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
          {/* <Menu size={25} /> */}
          <img src="menu.svg" alt="Menu icon" className='w-[18px] sm:w-[25px]' />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-[80%] max-w-[400px] bg-black text-white p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden rounded-l-lg`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={30} />
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col gap-6 mt-10">
          <NavLink

            to="/"
            className={({ isActive }) =>
              `text-lg uppercase font-raleway font-semibold block transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink

            to="/services"
            className={({ isActive }) =>
              `text-lg uppercase font-raleway font-semibold block transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            services
          </NavLink>
          <NavLink

            to="/iac-tech"
            className={({ isActive }) =>
              `text-lg uppercase font-raleway font-semibold block transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Iac tech
          </NavLink>
          <NavLink

            to="/about"
            className={({ isActive }) =>
              `text-lg uppercase font-raleway font-semibold block transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            about
          </NavLink>
          <a href="#" className="text-yellow-400 text-lg">
            <img src="./solid.png" alt="Solid" className="h-6 w-auto" />
          </a>
          <button className="text-black bg-white rounded-full font-bold py-2 px-6">
            CONTACT
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;

