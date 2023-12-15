import React from 'react'

function table4() {
    const data = [
        {
          no: "01",
          name: "Aalap",
          regno: "CCE22CS001",
          point: "15",
          year: "23-24",
        },
        {
          no: "01",
          name: "Abhishek",
          regno: "CCE22CS001",
          point: "15",
          year: "23-24",
        },
        {
          no: "01",
          name: "Adithya",
          regno: "CCE22CS001",
          point: "15",
          year: "23-24",
        },
        {
          no: "01",
          name: "Agna",
          regno: "CCE22CS001",
          point: "15",
          year: "23-24",
        },
        {
            no: "01",
            name: "Agna",
            regno: "CCE22CS001",
            point: "15",
            year: "23-24",
          },
          {
            no: "01",
            name: "Agna",
            regno: "CCE22CS001",
            point: "15",
            year: "23-24",
          },
      ];
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg w-full h-[200px] mt-2'>
      <table className="w-full text-sm text-left rtl:text-right text-black mt-2">
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
              <tr key={index} className="odd:bg-white even:bg-[#F7F6FE] ">
                <td className="px-5 py-2 text-center text-black font-semibold">{item.no}</td>
                <td className="px-5 py-2 text-center text-black font-semibold">
                  {item.name}
                </td>
                <td className="px-5 py-2 text-center text-black font-semibold">
                  {item.regno}
                </td>
                <td className="px-5 py-2 text-center text-black font-semibold">
                  {item.point}
                </td>
                <td className="px-5 py-2 text-center text-black font-semibold">
                  {item.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default table4
