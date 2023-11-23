import React, { useState } from "react";
import Message from "../../assets/General/message.png";
const Button = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const toggleMessage = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <button
        onClick={toggleMessage}
        className={`bg-[#512B81] text-white p-5 rounded-full flex items-center  focus:outline-none ${
          isMessageVisible ? "bg-[#512B81]" : ""
        }`}
      >
        {isMessageVisible ? (
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        ) : (
          <img src={Message} alt="icon" className="w-7" />
        )}
      </button>

      {isMessageVisible && (
        <div className="bg-gray-200 p-4 mt-4 rounded-md w-72 h-96">
          <div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
