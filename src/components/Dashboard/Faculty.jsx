import React from "react";
import faculty from "../../assets/Dashboard/Faculty/faculty.png";
import short from "../../assets/General/short.png";
import arrow_down from "../../assets/General/arrow_down.svg";
import TableFaculty from "./tables/TableFaculty";
import Navbar from "../Navbar";
import BatchReport from "./tables/BatchReport";
import Activity from "./tables/Activity";

function Faculty() {
  const [openBatch, setOpenBatch] = React.useState(false);
  const handleOpenBatch = () => setOpenBatch(!openBatch);

  const [openActivity, setOpenActivity] = React.useState(false);
  const handleOpenActivity = () => setOpenActivity(!openActivity);

  return (
    <div className="w-full center flex-col">
      <Navbar />
      <BatchReport
        isOpen={openBatch}
        handleOpen={handleOpenBatch}
      />
      <Activity
        isOpen={openActivity}
        handleOpen={handleOpenActivity}
      />
      <div className="w-full center flex-col gap-5 px-60">
        <div className="w-full flex gap-10 ">
          <div className="ring-offset-8 ring-2 ring-[#512B81] rounded-full w-32">
            <img src={faculty} className="rounded-full" />
          </div>
          <div className="center flex-col gap-3 items-start">
            <div className="center flex-col items-start">
              <span className="font-normal text-[#512B81]">Faculty Name</span>
              <span className="text-xl font-semibold">
                Magniya Davis
              </span>
            </div>
            <div className="center flex-col items-start w-fit border-2 border-[#512B81] rounded-xl py-1 px-2 justify-evenly text-white">
              <span className="font-light text-[#512B81] ">Department</span>
              <span className="font-semibold text-black text-xl">Computer Science</span>
            </div>
          </div>
        </div>
        <div className="font-bold text-lg text-start w-full">Batch info</div>
        <div className="w-full center justify-between gap-10">
          <div className="center flex-col w-fit gap-2 p-5 rounded-lg border-t border-solid border-gray-300 border-opacity-82 bg-white shadow-md shadow-offset-x-11 shadow-offset-y-24 shadow-blur-26 shadow-opacity-20">
            <div className="center gap-3 ">
              <div className="center flex-col items-start bg-[#512B81] rounded-xl w-[180px] py-1 px-2 text-white">
                <span className="font-light ">Batch :</span>
                <span className="font-semibold">2022-2026</span>
              </div>
              <div className="center flex-col items-start w-[180px] border-2 border-[#512B81] rounded-xl py-1 px-2 text-white">
                <span className="font-light text-[#512B81] ">Branch</span>
                <span className="font-semibold text-black">
                  Computer Science
                </span>
              </div>
            </div>
            <div className="center gap-3 ">
              <div className="center flex-col items-start bg-[#512B81] rounded-xl w-[180px] py-1 px-2 text-white">
                <span className="font-light">Semester</span>
                <span className="font-semibold">4</span>
              </div>
              <div className="center flex-col items-start w-[180px] border-2 border-[#512B81] rounded-xl py-1 px-2 text-white">
                <span className="font-light text-[#512B81] ">
                  Number of Students
                </span>
                <span className="font-semibold text-black">63</span>
              </div>
            </div>
          </div>
          <div className="center flex-col w-fit gap-2 p-5 rounded-lg border-t border-solid border-gray-300 border-opacity-82 bg-white shadow-md shadow-offset-x-11 shadow-offset-y-24 shadow-blur-26 shadow-opacity-20">
            <div className="center gap-3 ">
              <button className="bg-[#512B81]">
                <span className=" text-white">Add Shortlist</span>
                <img src={short} width={30} />
              </button>
              <button onClick={handleOpenBatch} className="border-solid border-2 border-[#512B81] text-black">
                <img src={arrow_down} width={15} />
                <span>Download Batch Report</span>
              </button>
            </div>
            <div className="center w-full gap-3 justify-around">
              <button className="bg-[#512B81]" >
                <span className="font-semibold">Pending</span>
              </button>
              <button onClick={handleOpenActivity} className="bg-[#512B81]" >
                <span className="font-semibold">Activity Point</span>
              </button>
              <button onClick={handleOpenActivity} className="border-purple-900 border-2">
                <span className="font-semibold text-black">View sorted list</span>
              </button>
            </div>
          </div>
        </div>
        <div className="font-bold text-lg w-full text-start">Batch Report</div>
        <div className="w-full center shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black rounded-lg">
          <TableFaculty />
        </div>
      </div>
    </div>
  );
}

export default Faculty;
