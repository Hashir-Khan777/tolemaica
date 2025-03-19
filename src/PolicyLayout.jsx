import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';

// Sidebar Component
const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="md:px-[30px]  md:border-r md:border-white/24">
      <div className="p-4">
        {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Policy Documents</h2> */}
        <ul className='md:block hidden'>
          <li className="mb-4">
            <Link
              to="/privacy"
              className={`block text-[24px]/[28px] font-[300] font-outfit ${currentPath === '/privacy' ? 'text-white' : 'text-white/64'}`}
            >
              Privacy Policy
            </Link>
          </li>
          <span className='bg-white/50 w-full h-[2px] border-b border-white/64'></span>
          <li>
            <Link
              to="/cookies"
              className={`block text-[24px]/[28px] font-[300] font-outfit py-2 ${currentPath === '/cookies' ? 'text-white' : 'text-white/64'}`}
            >
              Cookies Policy
            </Link>
          </li>
        </ul>

        <div className='md:hidden flex flex-row justify-start items-center gap-[10px]'>
          <Link
            to="/privacy"
            className={`block text-[16px]/[24px] font-[300] font-outfit ${currentPath === '/privacy' ? 'text-white' : 'text-white/64'}`}
          >
            Privacy Policy
          </Link>

          <Link
            to="/cookies"
            className={`block text-[16px]/[24px] font-[300] font-outfit py-2 ${currentPath === '/cookies' ? 'text-white' : 'text-white/64'}`}
          >
            Cookies Policy
          </Link>
        </div>

      </div>
    </div>
  );
};

// Layout Component
const PolicyLayout = ({ children }) => {
  return (
    <section className="relative overflow-hidden w-full bg-black flex  flex-col">
      <video
        src="/ourpartners.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "blur(40px)" }}
      ></video>

      <div className='relative z-2  py-[20px] px-[20px]'>
        {/* <Header /> */}
        <div className="flex md:flex-row flex-col min-h-screen py-[20px]">
          <Sidebar />
          <div className="flex-1 md:px-[30px]">
            {children}
          </div>
        </div>
      </div>
    </section>

  );
};


export default PolicyLayout  