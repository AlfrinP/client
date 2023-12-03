import React from 'react'
import { Select, Option, Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import Certificate from "../../assets/General/certificate.png"
const ViewCertificate = ({ isOpen, handleOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Dialog open={isOpen} handler={handleOpen} className='p-4'>
      <svg

        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mr-3 h-5 w-5 float-right"
        onClick={handleOpen}
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
      <DialogHeader>
        <h1 className="text-2xl font-bold">Uploaded Details</h1>
      </DialogHeader>
    <div>
      <div className='flex flex-col'>
        <h3>
          Activity Name
        </h3>
        <input 
        type="text"
        placeholder='Hack2Hack'
        className='border-2 border-solid p-2'
        />
        <h3>
          Category
        </h3>
        <Select variant="outlined" label="Hackathon">
          <Option>Techical</Option>
        </Select>
        <h3>
          Level
        </h3>
        <Select variant="outlined" label="District">
          <Option>State</Option>
        </Select>
      <div>
        <img src={Certificate}/>
      </div>
      </div>
      <div>

      </div>
    </div>
    </Dialog>
  );
}

export default ViewCertificate
