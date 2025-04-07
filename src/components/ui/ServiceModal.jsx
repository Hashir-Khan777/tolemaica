import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

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
    width: "95%",
    overflow: "hidden",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.9)",
    zIndex: "999",
  },
};

const ServiceModal = ({ modalIsOpen, closeModal }) => {
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
          className="ml-auto md:mt-[40px] md:mr-[48px] mb-[20px] md:mb-[8px] cursor-pointer"
        />
        <div className="flex flex-col gap-[24px] max-w-[428px] mx-auto mb-[96px]">
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-white border-white flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/services/data-click"
            onClick={closeModal}
          >
            DATACLICK
          </Link>
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-white border-[#FF9966] flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/services/legal-click"
            onClick={closeModal}
          >
            LEGALCLICK
          </Link>
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-[#FF9966] border-white flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/services/legal-check"
            onClick={closeModal}
          >
            LEGALCHECK
          </Link>
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-white border-[#FF9966] flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/services/BarCertCode"
            onClick={closeModal}
          >
            BARCERTCODE
          </Link>
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-[#FF9966] border-white flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/services/QrCertCode"
            onClick={closeModal}
          >
            QRCERTCODE
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
