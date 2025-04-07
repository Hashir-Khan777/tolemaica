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
  const [mobile, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // Store error message
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setError(""); // Reset error before API call
    setSuccess("");
  
    try {
      const response = await fetch("https://www.tolemaica.it/api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Ensure JSON format
        body: JSON.stringify({ name, email, mobile, message }),
      });
  
      const result = await response.json(); // Parse JSON response
  
      if (!response.ok) {
        console.error("Error response:", result); // Log error response in console
        throw new Error(result.message || "Failed to register. Please try again.");
      }
  
      console.log("Success:", result); // Log success response
      setSuccess("Registration successful!");
      setThanksModalIsOpen(true);
    } catch (err) {
      console.error("API Error:", err); // Log error in console
      setError(err.message || "Something went wrong!"); // Display error message in UI
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
        <div className="max-w-[516px] mx-auto flex flex-col items-center">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1.5px] border-white text-white rounded-full w-full placeholder:text-white px-6 py-3 mb-6"
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white text-white rounded-full w-full placeholder:text-white px-6 py-3 mb-6"
          />
          <PhoneInput
            placeholder="Mobile"
            international
            defaultCountry="US"
            value={mobile}
            onChange={setValue}
            className="border border-white rounded-full w-full placeholder:text-white text-white px-6 py-3 mb-6"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-white text-white rounded-[16px] w-full h-[148px] placeholder:text-white px-6 py-3"
          />

          {/* Show Error or Success Message */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}

          <button
            onClick={handleSubmit}
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
