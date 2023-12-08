import React from "react";
import { Button, ButtonGroup } from "@material-tailwind/react";
import {
  Select,
  Option,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import Certificate from "../../assets/General/certificate.png";
import Blue from "../../assets/General/Edit.svg";
import Download from "../../assets/General/material-symbols_download.png";
import Delete from "../../assets/General/deletered.svg";
import DatePicker from "./DatePicker";
const ViewCertificate = ({ isOpen, handleOpen }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <Dialog open={isOpen} handler={handleOpen} className="p-4">
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
        <h1 className="text-2xl font-bold">Upload files</h1>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-row w-full gap-10 justify-center">
          <div className="flex flex-col">
            <h3 className="mb-4">Activity Name</h3>
            <input
              type="text"
              placeholder="Eg: Hack2Hack"
              className="border-2 border-blue-gray-100 p-2 rounded-lg mb-2"
            />
            <h3 className="mb-2">Category</h3>
            <Select variant="outlined" label="Event" className="mb-2">
              <Option>Techical</Option>
              <Option>Hackathon</Option>
              <Option>Sports</Option>
              <Option>Arts</Option>
              <Option>Workshops</Option>
            </Select>
            <h3 className="mb-2 mt-2">Level</h3>
            <Select variant="outlined" label="Zone">
              <Option>E-zone</Option>
              <Option>District</Option>
              <Option>State</Option>
              <Option>National</Option>
              <Option>International;</Option>
            </Select>
            <h3 className="mb-2 mt-2">Date</h3>
            <div className="flex flex-row">
              <DatePicker />
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-8 center ">
              <Button className="flex flex-row bg-green-100 w-fit p-1 px-2 rounded-md text-lowercase capitalize" style={{color:'#076F2C'}}>
                <img src={Download} alt="download" className=" w-[19px]" />
                Download
              </Button>
              <Button className="flex flex-row bg-blue-gray-100 w-fit p-1 px-7 rounded-md text-lowercase capitalize" style={{color:'#2930D4'}}>
                <img src={Blue} alt="edit" />
                Edit
              </Button>
              <Button className="flex flex-row bg-red-200 w-fit p-1 px-4 rounded-md text-lowercase capitalize" style={{color:'#FF3333'}}>
                <img src={Delete} alt="clear" />
                Delete
              </Button>
            </div>
            <img src={Certificate} alt="certificate" className="hover:filter hover:brightness-50 transition" />
            <div className="flex flex-row gap-10 ml-[230px]">
              <ButtonGroup variant="outlined">
                <Button className="flex flex-row  w-fit p-2 px-4 rounded-full border-purple-900 text-lowercase capitalize" style={{color:'#512B81'}}>
                  Cancel
                </Button>
              </ButtonGroup>
              <Button className="flex flex-row bg-purple-900 w-fit p-2 px-6 rounded-full text-lowercase capitalize" style={{color:'white'}}>
                Save
              </Button>
            </div>
          </div>
        </div>
       </DialogBody>
     </Dialog>
  );
};

export default ViewCertificate;
