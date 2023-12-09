import React from "react";
import ViewCertificate from "../ViewCertificate";

function Table2() {
  const [openViewCertificate, setOpenViewCertificate] = React.useState(false);
  const handleOpenViewCertificate = () => setOpenViewCertificate(!openViewCertificate);

  const data = [
    {
      no: "01",
      Name: "Aalap",
      Regno: "CCE22CS001",
      point: "15",
      year: "23-24",
      approval: "Approved",
    },
    {
      no: "01",
      Name: "Abhishek",
      Regno: "CCE22CS001",
      point: "15",
      year: "23-24",
      approval: "Approved",
    },
    {
      no: "01",
      Name: "Adithya",
      Regno: "CCE22CS001",
      point: "15",
      year: "23-24",
      approval: "Approved",
    },
    {
      no: "01",
      Name: "Agna",
      Regno: "CCE22CS001",
      point: "15",
      year: "23-24",
      approval: "Approved",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full">
      <ViewCertificate
        isOpen={openViewCertificate}
        handleOpen={handleOpenViewCertificate}
      />
      <table className="w-full text-sm text-left rtl:text-right text-black">
        <thead className="text-black uppercase bg-gray-5 border-b text-sm">
          <tr>
            <th scope="col" className="px-5 py-3 text-center">
              No
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Reg no
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Point
            </th>
            <th scope="col" className="px-5 py-3 text-center">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="text-black text-md">
          {data.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-[#F7F6FE] "
            >
              <td className="px-5 py-2 text-center text-black">{item.no}</td>
              <td className="px-5 py-2 text-center text-black">{item.Name}</td>
              <td className="px-5 py-2 text-center text-black">{item.Regno}</td>
              <td className="px-5 py-2 text-center text-black">{item.point}</td>
              <td className="px-5 py-2 text-center text-black">{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
