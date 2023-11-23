import React from "react";
import sprofile from "../../assets/Dashboard/Student/profile.png";
import upload from "../../assets/General/file-upload.png";
import graph from "../../assets/General/graph.png";
import Table from "./Table";
import Navbar from "../Navbar";
import FileUploadModel from "./FileUploadModal";
import ViewPointsModal from "./ViewPointsModal";
import Button from "./Button";

export default function Student() {
  const [openFileModal, setOpenFileModal] = React.useState(false);
  const [openViewPoints, setOpenViewPoints] = React.useState(false);

 
  const handleOpenFileModal = () => setOpenFileModal(!openFileModal);
  const handleOpenViewPoints = () => setOpenViewPoints(!openViewPoints);
  return (
    <div className="w-full h-screen">
      <Navbar />
<<<<<<< HEAD
      <div className="w-full height center grid grid-cols-6">
        <div className="col-span-1"></div>
          <div className="ring-offset-8 ring-2 ring-[#512B81] rounded-full w-32 col-span-1">
=======
      <FileUploadModel isOpen={openFileModal} handleOpen={handleOpenFileModal}/>
      <ViewPointsModal isOpen={openViewPoints} handleOpen={handleOpenViewPoints}/>
      <div className="w-full height center flex-col gap-5">
        <div className="w-full center justify-evenly">
          <div className="ring-offset-8 ring-2 ring-[#512B81] rounded-full w-32">
>>>>>>> 4d7236572702c3b2af438b69989355b936baf317
            <img src={sprofile} className="rounded-full" />
          </div>
          <div className="center flex-col gap-3 items-start col-span-2">
            <div className="center flex-col items-start">
              <span className="font-normal text-[#512B81]">Student Name</span>
              <span className="text-lg font-semibold">
                Francis Gigi Kuyilamparambil
              </span>
            </div>
            <div className="center justify-start w-full gap-3">
              <div className="center flex-col items-start bg-[#512B81] rounded-xl w-[180px] py-1 px-2 justify-evenly text-white">
                <span className="font-light">Register No:</span>
                <span className="font-semibold">CCE23CS032</span>
              </div>
              <div className="center flex-col items-start w-[180px] border-2 border-[#512B81] rounded-xl py-1 px-2 justify-evenly text-white">
                <span className="font-light text-[#512B81] ">Branch</span>
                <span className="font-semibold text-black">Computer Science</span>
              </div>
            </div>
            <div className="center gap-2">
              <span className="text-[#512B81]">Semester</span>
              <span className="text-2xl text-[#512B81]">4</span>
            </div>
          </div>
<<<<<<< HEAD
          <div className="center flex-col gap-3 col-span-1">
            <button className="center bg-[#512B81] rounded-xl w-full p-3 justify-evenly">
=======
          <div className="center flex-col gap-3">
            <button className="center bg-[#512B81] rounded-xl w-full p-3 justify-evenly" onClick={handleOpenFileModal}>
>>>>>>> 4d7236572702c3b2af438b69989355b936baf317
              <img src={upload} width={30}/>
              <span className=" text-white">Upload Certificate</span>
            </button>
            <button className="center bg-[#512B81] rounded-xl w-full p-3 justify-evenly" onClick={handleOpenViewPoints}>
              <img src={graph} width={30}/>
              <span className=" text-white">View Points</span>
            </button>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        <div className="center shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black rounded-lg col-span-4 row-span-1">
          <Table />
        </div>
        <div className="col-span-1"></div>
      </div>
      <Button/>
    </div>
  );
}
