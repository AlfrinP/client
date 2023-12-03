import React, { useState } from "react";
import Message from "../../assets/General/message.png";
import Avatar from "../../assets/General/avatar.png";

const Button = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const toggleMessage = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={toggleMessage}
        className={`bg-[#512B81] text-white w-fit p-5 rounded-full flex items-center ${
          isMessageVisible ? "bg-[#512B81]" : ""
        }`}
      >
        {isMessageVisible ? (
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
        ) : (
          <img src={Message} alt="icon" className="w-7" />
        )}
      </button>
      {isMessageVisible && (
        <div className="fixed inset-0 flex items-center justify-start bg-gray-800 bg-opacity-50 pl-10">
          <div className="bg-white p-4 rounded-md w-fit h-96 box">
            <div className="flex flex-row">
              <img
                src={Avatar}
                className="w-fit rounded-full mr-1"
                alt="avatar"
              />
              <div className="w-fit p-2 bg-white message">
                <h4 className="text-base leading-6 font-bold ">Magniya Davies</h4>
                <p>Please upload your certificate</p>
              </div>
            </div>
          </div>
          <div className="w-fit mt-[350px] mr-3">
          <button
              onClick={toggleMessage}
              className=" bg-[#512B81] text-white p-5 rounded-full block w-full pl-6 pr-6"
            >
              X
            </button>
            </div>
        </div>
        
      )}
    </div>
  );
};

export default Button;
