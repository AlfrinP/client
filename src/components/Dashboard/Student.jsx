import React from "react";
import sprofile from "../../assets/Dashboard/Student/profile.png";
import upload from "../../assets/General/file-upload.png";
import graph from "../../assets/General/graph.png";
import Table from "./Table";
import Navbar from "../Navbar";
import FileUploadModel from "./FileUploadModal";
import ViewPointsModal from "./ViewPointsModal";

export default function Student() {
  const [openFileModal, setOpenFileModal] = React.useState(false);
  const [openViewPoints, setOpenViewPoints] = React.useState(false);

 
  const handleOpenFileModal = () => setOpenFileModal(!openFileModal);
  const handleOpenViewPoints = () => setOpenViewPoints(!openViewPoints);
  return (
    <div className="w-full h-screen">
      <Navbar />
      <FileUploadModel isOpen={openFileModal} handleOpen={handleOpenFileModal}/>
      <ViewPointsModal isOpen={openViewPoints} handleOpen={handleOpenViewPoints}/>
      <div className="w-full height center flex-col gap-5">
        <div className="w-full center justify-evenly">
          <div className="ring-offset-8 ring-2 ring-[#512B81] rounded-full w-32">
            <img src={sprofile} className="rounded-full" />
          </div>
          <div className="center flex-col gap-3 items-start">
            <div className="center flex-col items-start">
              <span className="font-normal text-[#512B81]">Student Name</span>
              <span className="text-lg font-semibold">
                Francis Gigi Kuyilamparambil
              </span>
            </div>
            <div className="center w-full gap-3">
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
          <div className="center flex-col gap-3">
            <button className="center bg-[#512B81] rounded-xl w-full p-3 justify-evenly" onClick={handleOpenFileModal}>
              <img src={upload} width={30}/>
              <span className=" text-white">Upload Certificate</span>
            </button>
            <button className="center bg-[#512B81] rounded-xl w-full p-3 justify-evenly" onClick={handleOpenViewPoints}>
              <img src={graph} width={30}/>
              <span className=" text-white">View Points</span>
            </button>
          </div>
        </div>
        <div className="w-[1000px] center shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black rounded-lg">
          <Table />
        </div>
      </div>
    </div>
  );
}
