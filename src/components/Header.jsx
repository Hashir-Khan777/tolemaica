import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ServiceModal from "./ui/ServiceModal";
import WorkModal from "./ui/WorkModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [workModalIsOpen, setWorkModalIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "services",
      func: () => setModalIsOpen(true),
      hasDropdown: true,
    },
    // {
    //   title: "case  study",
    //   func: () => setWorkModalIsOpen(true),
    // },
    {
      title: "IAC Tech",
      link: "/iac-tech",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  // const scrollToFooter = () => {
  //   const footer = document.getElementById('footer');
  //   if (footer) {
  //     footer.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const scrollToFooter = () => {
    // If on a different page, first navigate to the page with the footer
    if (!window.location.pathname.includes("/")) {
      navigate("/"); // Navigate to home or page with footer

      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      // If already on the right page, just scroll
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navbar Container */}
      <div
        className="relative md:min-h-[90px] h-[48px]  z-50 w-[100%] bg-black/50 mx-auto my-6 flex justify-between items-center px-[24px] py-[15px] lg:px-16 lg:py-5"
        style={{
          border: "2px solid transparent",
          background:
            "linear-gradient(#000000, #000000) padding-box, linear-gradient(to right, #ff9966, #ffffff) border-box",
          borderRadius: "999px",
        }}
      >
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-3 z-20">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-[35px] sm:h-[40px] md:h-[45px] w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {/* Navigation Links */}
        <nav className="hidden xl:flex flex-row justify-center items-center xl:gap-[20px] gap-[12px]">
          {navLinks.map((navLink, index) => (
            <div className="flex flex-row justify-center items-center xl:gap-[20px] gap-[12px]">
              {navLink?.link ? (
                <NavLink
                  index={index}
                  to={navLink.link}
                  className={({ isActive }) =>
                    `relative uppercase font-raleway flex items-center gap-4
    ${
      isActive
        ? "text-white font-[600] xl:text-[20px]/[100%] text-[17px]/[20.48px]"
        : "text-white/60 font-[500] xl:text-[16px]/[100%] tracking-[10%] text-[14px]/[16.78px]"
    }`
                  }
                >
                  {navLink.link === pathname ? (
                    <div className="bg-[#FF9966] w-[10px] h-[10px] rounded-full"></div>
                  ) : null}
                  {navLink.title}
                </NavLink>
              ) : (
                <button
                  onClick={navLink.func}
                  index={index}
                  className={`flex items-center gap-2 relative cursor-pointer uppercase font-raleway ${
                    pathname.includes(navLink.title)
                      ? "text-white font-[600] xl:text-[20px]/[100%] text-[17px]/[20.48px]"
                      : "text-white/60 font-[500] xl:text-[16px]/[100%] tracking-[10%] text-[14px]/[16.78px]"
                  }`}
                >
                  {pathname.includes(navLink.title) ? (
                    <div className="bg-[#FF9966] w-[10px] h-[10px] rounded-full"></div>
                  ) : null}
                  {navLink.title}
                  {navLink.hasDropdown && (
                    <img
                      src="/dropdown.svg"
                      alt="Dropdown"
                      className="w-4 h-4"
                    />
                  )}
                </button>
              )}
              {/* <span className="text-gray-400">/</span> */}
              <img src="/divider.svg" alt="Divider" />
            </div>
          ))}

          <a
            href="https://ddeluca4.wixsite.com/solid-srl"
            target="_blank"
            className="text-yellow-400 shrink-0 text-sm"
          >
            <img src="/solid.png" alt="" className="h-[20px] w-auto" />
          </a>
          {/* <span className="text-white/60">/</span> */}
          {/* Contact Button */}
          <button
            onClick={scrollToFooter}
            className="cursor-pointer text-black text-[16px]/[18.78px] bg-white rounded-full font-[700] py-[10px] px-[24px]"
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src="/menu.svg"
            alt="Menu icon"
            className="w-[18px] sm:w-[25px]"
          />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-full backdrop-blur-3xl bCK flex flex-col justify-center items-center bg-black text-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out xl:hidden rounded-l-lg`}
        style={{
          background:
            " linear-gradient(to left bottom, #8f644f, #48423f 80%, #4c2a34 )",
        }}
      >
        {/* Close Button  */}

        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/cross 1.png"
            className="ml-auto md:mt-[40px] w-[32px] h-[32px] md:mr-[48px] mb-[20px] md:mb-[8px] cursor-pointer"
          />
        </button>

        {/* Mobile Navigation  */}
        <nav className="flex flex-col gap-6 mt-10">
          <Link
            className="h-[52px] w-[300px] rounded-full border-[2.1px] text-white border-white flex justify-center items-center font-raleway font-medium md:text-[20px]/[100%] py-[12px] px-[40px] uppercase"
            to="/"
          >
            Home
          </Link>
          <button
            className="h-[52px] w-[300px] rounded-full border-[2.1px] text-white border-[#FF9966] flex justify-center items-center font-raleway font-medium md:text-[20px]/[100%] py-[12px] px-[40px] uppercase"
            onClick={() => setModalIsOpen(true)}
          >
            Services
          </button>
          {/* <button
            className="h-[52px] w-[300px] rounded-full border-[2.1px] text-white border-[#FF9966] flex justify-center items-center font-raleway font-medium md:text-[20px]/[100%] py-[12px] px-[40px] uppercase"
            onClick={() => setWorkModalIsOpen(true)}
          >
            Case Study
          </button> */}
          <Link
            className="h-[52px] w-[300px] rounded-full border-[2.1px] text-[#FF9966] border-white flex justify-center items-center font-raleway font-medium md:text-[20px]/[100%] py-[12px] px-[40px] uppercase"
            to="/iac-tech"
          >
            iac tech
          </Link>
          <Link
            className="h-[52px] w-[300px] rounded-full border-[2.1px] text-white border-[#FF9966] flex justify-center items-center font-raleway font-medium md:text-[20px]/[100%] py-[12px] px-[40px] uppercase"
            to="/about"
          >
            about
          </Link>

          <a
            href="https://ddeluca4.wixsite.com/solid-srl"
            target="_blank"
            className="h-[52px] w-[300px] rounded-full border-[2.1px] text-white border-white flex justify-center items-center font-raleway font-medium md:text-[20px]/[100%] py-[12px] px-[40px]"
          >
            <img src="/solid.png" alt="Solid" className="h-6 w-auto" />
          </a>
        </nav>
      </div>
      <ServiceModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
      <WorkModal
        modalIsOpen={workModalIsOpen}
        closeModal={() => setWorkModalIsOpen(false)}
      />
    </>
  );
}

export default Header;
