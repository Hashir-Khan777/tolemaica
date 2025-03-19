import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import ThanksModal from "./ThanksModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(19.64px)",
    border: "2.4px solid rgba(255, 255, 255, 0.64)",
    borderRadius: "24px",
    width: "70%",
    overflow: "hidden",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.9)",
    zIndex: "999",
  },
};

const ContactUsModal = ({ modalIsOpen, closeModal }) => {
  const [thanksModalIsOpen, setThanksModalIsOpen] = useState(false);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="absolute right-0 -top-[100px] w-[484px] h-[484px] bg-[#FF9966A3]/64 blur-[100px] -z-1" />
      <div className="absolute left-0 -bottom-[100px] w-[484px] h-[484px] bg-[#61132AA3]/64 blur-[100px] -z-1" />
      <div>
        <img
          src="/images/cross 1.png"
          onClick={closeModal}
          className="ml-auto md:mt-[40px] md:mr-[48px] mb-[20px] md:mb-[58px] cursor-pointer"
        />
        <h1 className="font-raleway font-normal text-[32px] text-white/64 text-center mb-[64px]">
          Thank You for choosing <span className="text-white">Tolemaica</span>
        </h1>
        <div className="flex flex-wrap justify-center text-white mx-auto gap-[120px]">
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
            <button
              onClick={() => setThanksModalIsOpen(true)}
              className="button max-w-[400px] h-[47px] px-[30px] sm:px-[40px] md:px-[100px] lg:px-[100px] border-2 border-[#FF9966] bg-white/10 opacity-55 text-[#FF9966] rounded-full text-sm sm:text-lg lg:text-[20px]/[23.48px] font-[700] cursor-pointer mt-8 mb-6"
            >
              REGISTER
            </button>
            <div className="flex items-center">
              <div className="relative w-[16px] h-[16px]">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  className="absolute w-full h-full opacity-0 checkbox"
                />
                <span className="absolute w-[16px] h-[16px] border border-white rounded-[2px] bg-white/20 checkmark" />
              </div>
              <label
                for="link-checkbox"
                className="ms-2 text-sm font-medium text-white/64"
              >
                I agree to the{" "}
                <Link to="/" className="underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-8 md:mt-0">
            <div className="flex flex-col flex-wrap justify-between font-outfit my-[48px]">
              <p className="max-w-[300px] w-full font-[400] text-2xl text-white/[64%]">
                TolemaicaVia San Tommaso d’Aquino n.6780 133 Napoli
                (NA)info@tolemaica.itP.IVA 08113661212
              </p>
              <p className="max-w-[300px] w-full font-[400] text-2xl text-white/[64%] mt-6">
                Cyber Management s.r.l.p.iva 09078881217Via Boscofangone
                snc 80035 - NOLA (NA) 
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThanksModal
        modalIsOpen={thanksModalIsOpen}
        closeModal={() => setThanksModalIsOpen(false)}
      />
    </Modal>
  );
};

export default ContactUsModal;
