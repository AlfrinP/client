import React from "react";
import ViewCertificate from "../ViewCertificate";
import TableFaculty2 from "./TableFaculty2"
import Student2 from "../Student2";

function TableFaculty({ isOpen, handleOpen }) {

  const [openTable, setOpenTable] = React.useState(false);
  const handleOpenTable = () => setOpenTable(!openTable);

  const [openStudent, setOpenStudent] = React.useState(false);
  const handleOpenStudent = () => setOpenStudent(!openStudent);

  const data = [
    {
      no: "01",
      regno: "CCE22CS001",
      name: "Aalap",
      point: "15",
    },
    {
      no: "01",
      regno: "CCE22CS001",
      name: "Abhishek",
      point: "15",
    },
    {
      no: "01",
      regno: "CCE22CS001",
      name: "Adithya",
      point: "15",
    },
    {
      no: "01",
      regno: "CCE22CS001",
      name: "Agna",
      point: "15",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full hover:filter hover:brightness-50 transition cursor-pointer">
      <TableFaculty2
        isOpen={openTable}
        handleOpen={handleOpenTable}
      />
      <Student2
        isOpen={openStudent}
        handleOpen={handleOpenStudent}
      />
      <table className="w-full text-sm text-left rtl:text-right text-black ">
        <thead className="text-black uppercase bg-gray-5 border-b text-sm ">
          <tr>
            <th scope="col" className="px-5 py-3 text-center ">
              No
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Regno
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Point
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              action
            </th>
          </tr>
        </thead>
        <tbody className="text-black text-md">
          {data.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-[#F7F6FE] "
            >
              <td className="px-5 py-2 text-center font-semibold text-black">{item.no}</td>
              <td className="px-5 py-2 text-center font-semibold text-black">{item.regno}</td>
              <td className="px-5 py-2 text-center font-semibold text-black">{item.name}</td>
              <td className="px-5 py-2 text-center font-semibold text-black">{item.point}</td>
              <td className="px-5 py-2 text-center  text-[#512B81] hover:underline cursor-pointer">
                <a onClick={handleOpenStudent} href="#">View</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleOpenTable}>Show More</button>
    </div>
  );
}

export default TableFaculty;
