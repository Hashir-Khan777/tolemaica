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
    background:
      "linear-gradient(to left bottom, rgba(255, 153, 102, 0.64), rgba(255, 255, 255, 0.64) 80%, rgba(97, 19, 42, 0.64))",
    border: "2.4px solid rgba(255, 255, 255, 0.64)",
    borderRadius: "24px",
    width: "70%",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.9)",
    zIndex: "999",
  },
};

const WorkModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <img
          src="/images/cross 1.png"
          onClick={closeModal}
          className="ml-auto md:mt-[40px] md:mr-[48px] mb-[20px] md:mb-[8px] cursor-pointer"
        />
        <div className="flex flex-col gap-[24px] max-w-[428px] mx-auto mb-[96px]">
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-white border-white flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/work/sky-italia"
          >
            SKY ITALIA
          </Link>
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-white border-[#FF9966] flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/work/banking-sector"
          >
            BANKING SECTOR
          </Link>
          <Link
            className="h-[55px] md:h-[77px] rounded-full border-[3px] text-[#FF9966] border-white flex justify-center items-center font-raleway font-medium md:text-[40px]"
            to="/work/msc-shipping"
          >
            MSC SHIPPING
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default WorkModal;
