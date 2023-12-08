import React from 'react'
import {
  Button,
  Select,
  Option,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import Printer from "../../assets/General/printer.svg"
import Certificate from "../../assets/General/certificate.png"
import Download from "../../assets/General/material-symbols_download.png"

const Print = ({ isopen }) => {
  return (
    <>
      <div className='center border-t border-purple-700 py-28 w-full center justify-center items-center'>
        <img src={Certificate} alt='certificate'/>
      </div>
      <div className='flex flex-row gap-8 justify-end mt-4 mr-4'>
      <Button className='bg-purple-900 text-white w-fit flex flex-row center justify-center gap-2 p-1 rounded-md'><img src={Printer} alt="Printer" className='w-[20px]' /><span className='mr-6'>Print</span></Button>
      <Button className='bg-green-100 text-green-600 w-fit flex flex-row center justify-center gap-2 p-1 rounded-md'><img src={Download} alt="Printer" className='w-[30px] pl-2' /><span className='mr-6'>Download</span></Button>
      </div>
    </>
  )
}

export default Print
