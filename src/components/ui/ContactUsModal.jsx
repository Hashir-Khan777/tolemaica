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
    height: "80%",
    overflow: "hidden",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.9)",
    zIndex: "999",
  },
};

const ContactUsModal = ({ modalIsOpen, closeModal }) => {
  const [thanksModalIsOpen, setThanksModalIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async () => {
    if (!mobile || !email || !isChecked) {
      alert("Please fill in all fields and agree to the terms.");
      return;
    }

    try {
      const response = await fetch("https://www.tolemaica.it/subscribe.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, email }),
      });

      const result = await response.json();
      if (result.success) {
        setThanksModalIsOpen(true);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
        <h1 className="font-raleway font-normal text-[25px] md:text-[32px] text-white/64 text-center mb-[32px] md:mb-[64px]">
          Thank You for choosing <span className="text-white">Tolemaica</span>
        </h1>
        <div className="flex flex-wrap justify-center items-start text-white mx-auto md:gap-[120px]">
          <div className="max-w-[400px] w-full flex flex-col font-outfit">
            <h2 className="uppercase font-outfit font-[600] text-xl mb-[20px] md:mb-[55px]">
              Join our newsletter
            </h2>
            <input
              placeholder="Mobile"
              className="border-[1.5px] border-white rounded-full max-w-[400px] placeholder:text-white px-6 py-3 mb-4"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              placeholder="Email"
              className="border border-white rounded-full max-w-[400px] placeholder:text-white px-6 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="button max-w-[400px] h-[47px] px-[30px] sm:px-[40px] md:px-[100px] lg:px-[100px] border-2 border-[#FF9966] bg-white/10 opacity-55 text-[#FF9966] rounded-full text-sm sm:text-lg lg:text-[20px]/[23.48px] font-[700] cursor-pointer mt-8 mb-6"
            >
              REGISTER
            </button>
            <label className="text-sm font-medium text-white/64">
              <div className="flex items-center gap-[4px]">
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px] border border-white rounded-[2px] bg-white/20"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                I agree to the{" "}
                <Link to="/" className="underline">
                  Terms & Conditions
                </Link>
              </div>
            </label>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col flex-wrap justify-between font-outfit mb-[48px]">
              <p className="max-w-[300px] w-full font-[400] md:text-2xl text-white/[64%]">
                TolemaicaVia San Tommaso d’Aquino n.6780 133 Napoli
                (NA)info@tolemaica.itP.IVA 08113661212
              </p>
              <p className="max-w-[300px] w-full font-[400] md:text-2xl text-white/[64%] mt-6">
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
