import React from "react";
import sprofile from "../../assets/Dashboard/Student/profile.png";
import upload from "../../assets/General/file-upload.png";
import graph from "../../assets/General/graph.png";
import Table from "./tables/Table";
import Navbar from "../Navbar";
import FileUploadModel from "./FileUploadModal";
import ViewPointsModal from "./ViewPointsModal";
import Button from "./PopMessage";


export default function Student() {
  const [openFileModal, setOpenFileModal] = React.useState(false);
  const [openViewPoints, setOpenViewPoints] = React.useState(false);

  const handleOpenFileModal = () => setOpenFileModal(!openFileModal);
  const handleOpenViewPoints = () => setOpenViewPoints(!openViewPoints);

  return (
    <>
    <div className="w-full h-screen center flex-col">
      <Navbar />
      <FileUploadModel
        isOpen={openFileModal}
        handleOpen={handleOpenFileModal}
      />
      <ViewPointsModal
        isOpen={openViewPoints}
        handleOpen={handleOpenViewPoints}
      />
      
      <div className="w-full center flex-col gap-5 px-60">
        <div className="w-full center justify-evenly">
          <div className="ring-offset-8 ring-2 ring-[#512B81] rounded-full w-32">
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
                <span className="font-semibold text-black">
                  Computer Science
                </span>
              </div>
            </div>
            <div className="center gap-2">
              <span className="text-[#512B81]">Semester</span>
              <span className="text-2xl text-[#512B81]">4</span>
            </div>
          </div>
          <div className="center flex-col gap-3">
            <button className="bg-[#512B81]" onClick={handleOpenFileModal}>
              <img src={upload} width={30} />
              <span className=" text-white">Upload Certificate</span>
            </button>
            <button className="bg-[#512B81]" onClick={handleOpenViewPoints}>
              <img src={graph} width={20} />
              <span className=" text-white">View Points</span>
            </button>
          </div>
        </div>
        <div className="w-full center shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black rounded-lg">
          <Table />
        </div>
      </div>
      <span className="flex items-start w-full pl-24 ">
        <Button/>
      </span>   
    </div>
    </>
  );
}
