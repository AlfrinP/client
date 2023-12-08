import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import Certificate from "../../assets/General/certificate.png";

const LargeView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img
        onClick={handleOpen}
        alt="nature"
        className="w-full mt-10 ml-5 hover:filter hover:brightness-50 transition cursor-pointer"
        src={Certificate}
      />
      <Dialog size="lg" open={isOpen} onClose={handleOpen} className="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5 float-right mt-10 cursor-pointer"
          onClick={handleOpen}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <img alt="nature" className="rounded-lg w-full" src={Certificate} />
      </Dialog>
    </>
  );
};

export default LargeView;
