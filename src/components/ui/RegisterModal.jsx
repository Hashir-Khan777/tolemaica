import React, { useState } from "react";
import Modal from "react-modal";
import ThanksModal from "./ThanksModal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

const RegisterModal = ({ modalIsOpen, closeModal }) => {
  const [thanksModalIsOpen, setThanksModalIsOpen] = useState(false);
  const [value, setValue] = useState();

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
        <div className="max-w-[516px] mx-auto flex flex-col items-center">
          <input
            placeholder="Mobile"
            className="border-[1.5px] border-white text-white rounded-full w-full placeholder:text-white px-6 py-3 mb-6"
          />
          <input
            placeholder="Email"
            className="border border-white text-white rounded-full w-full placeholder:text-white px-6 py-3 mb-6"
          />
          <PhoneInput
            placeholder="Mobile"
            international
            defaultCountry="US"
            value={value}
            onChange={setValue}
            countrySelectProps={{
              style: {
                color: "#000",
              },
            }}
            className="border border-white rounded-full w-full placeholder:text-white text-white px-6 py-3 mb-6"
          />
          {/* <input
            placeholder="Number"
            className="border border-white rounded-full w-full placeholder:text-white px-6 py-3 mb-6"
          /> */}
          <textarea
            placeholder="Message"
            className="border border-white text-white rounded-[16px] w-full h-[148px] placeholder:text-white px-6 py-3"
          />
          <button
            onClick={() => setThanksModalIsOpen(true)}
            className="button w-full md:max-w-[400px] h-[47px] px-[30px] sm:px-[40px] md:px-[100px] lg:px-[100px] border-2 border-[#FF9966] bg-white/10 opacity-55 text-[#FF9966] rounded-full text-sm sm:text-lg lg:text-[20px]/[23.48px] font-[700] cursor-pointer mt-12 mb-[100px]"
          >
            REGISTER
          </button>
        </div>
      </div>
      <ThanksModal
        modalIsOpen={thanksModalIsOpen}
        closeModal={() => setThanksModalIsOpen(false)}
      />
    </Modal>
  );
};

export default RegisterModal;
