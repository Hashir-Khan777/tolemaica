import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceModal from "./ui/ServiceModal";

function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="w-full bg-black relative overflow-hidden">
      <img
        src="/images/footerbg.png"
        className="absolute h-full w-full object-cover -right-[800px]"
      />
      <div className="bg-gradient-to-r from-black/[95%] from-50% to-black/[70%] relative">
        <div className="py-8 px-[20px] md:px-[100px]">
          <div className="flex flex-wrap justify-between text-white">
            <div className="max-w-[400px] w-full flex flex-col font-outfit">
              <h2 className="uppercase font-outfit font-[600] text-xl mb-[55px]">
                Join our newsletter
              </h2>
              <input
                placeholder="Mobile"
                className="border-[1.5px] border-white rounded-full max-w-[400px] placeholder:text-white px-6 py-3 mb-4"
              />
              <input
                placeholder="Email"
                className="border border-white rounded-full max-w-[400px] placeholder:text-white px-6 py-3"
              />
              <button className="button max-w-[400px] h-[47px] px-[30px] sm:px-[40px] md:px-[100px] lg:px-[100px] border-2 border-[#FF9966] bg-white/10 opacity-55 text-[#FF9966] rounded-full text-sm sm:text-lg lg:text-[20px]/[23.48px] font-[700] cursor-pointer mt-8 mb-6">
                REGISTER
              </button>
              <p className="font-[400] text-white/[64%]">
                By proceeding, you agree to our Terms and Conditions and Privacy
                Policy
              </p>
              <div className="flex flex-wrap items-center justify-between my-8">
                <p className="font-[400] text-xl text-white/65">Privacy</p>
                <p className="font-[400] text-xl text-white/65">Terms of Use</p>
                <p className="font-[400] text-xl text-white/65">Cookies</p>
              </div>
              <div className="flex items-center gap-5">
                <img src="/images/insta.svg" />
                <img src="/images/facebook.svg" />
                <img src="/images/youtube.svg" />
                <img src="/images/linkedin.svg" />
                <img src="/images/snapchat.svg" />
              </div>
            </div>
            <div className="max-w-[680px] w-full flex flex-col mt-8 md:mt-0">
              <h2 className="uppercase font-raleway font-medium text-[40px]">
                Contact us
              </h2>
              <div className="flex flex-wrap justify-between font-outfit my-[48px]">
                <p className="max-w-[300px] w-full font-[400] text-2xl text-white/[64%]">
                  TolemaicaVia San Tommaso d’Aquino n.6780 133 Napoli
                  (NA)info@tolemaica.itP.IVA 08113661212
                </p>
                <p className="max-w-[300px] w-full font-[400] text-2xl text-white/[64%] mt-8 md:mt-0">
                  Cyber Management s.r.l.p.iva 09078881217Via Boscofangone
                  snc 80035 - NOLA (NA) 
                </p>
              </div>
              <div className="flex flex-wrap justify-between font-outfit">
                <div className="max-w-[300px] w-full font-medium text-2xl flex flex-col gap-2.5">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <button
                    onClick={() => setModalIsOpen(true)}
                    className="cursor-pointer text-left"
                  >
                    Services
                  </button>
                </div>
                <div className="max-w-[300px] w-full font-medium text-2xl flex flex-col gap-2.5 mt-8 md:mt-0">
                  <Link to="/">Use Case</Link>
                  <Link to="/iac-tech">IAC Tech</Link>
                  <Link to="/">Solid</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="font-outfit flex flex-wrap justify-center md:justify-between py-8 mt-[66px] ">
            <p className="font-[400] text-base text-white/48">
              All Rights Reserved
            </p>
            <p className="font-[400] text-base text-white/48 mt-2 md:mt-0">
              ©Tolemaica Proprietary & Confidential
            </p>
          </div>
        </div>
        <img src="/images/footer.png" className="w-full" />
      </div>
      <ServiceModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </div>
  );
}

export default Footer;
