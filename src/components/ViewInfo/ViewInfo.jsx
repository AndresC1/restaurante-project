import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import logo from '../../static/Navigandum.jpg'


export default function ViewInfo() {
  return (
    <div className='w-full max-w-[65em] h-auto flex justify-center items-center md:p-10 p-1'>
        <div className='md:w-10/12 w-full h-auto flex flex-col justify-center items-center py-5 bg-degradado_primario rounded-xl'>
            <img className='h-auto w-52 bg-white p-2 rounded-xl' src={logo} alt="Logo" />
            <div className='lg:w-5/12 md:w-9/12 w-full md:p-3 p-1 flex flex-col items-center justify-center text-gray-600 font-mono font-bold md:text-base text-sm'>
                <div className='w-auto mt-3'>
                    <span className='w-full h-auto flex justify-start items-center my-1 hover:scale-105 transition-all'>
                        <MdOutlineMailOutline className='h-auto w-6 mr-3'/><h1>correoPrueba@acldev.site</h1>
                    </span>
                    <span className='w-full h-auto flex justify-start items-center my-1 hover:scale-105 transition-all'>
                        <FaInstagram className='h-auto w-6 mr-3'/><h1>acldev-site</h1>
                    </span>
                    <span className='w-full h-auto flex justify-start items-center my-1 hover:scale-105 transition-all'>
                        <BsTelephone className='h-auto w-6 mr-3'/><h1>(+505) 8888-8888</h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
