import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/navbar'

export default function Template() {
  return (
    <div className='flex items-stretch h-screen bg-[#e6dfdf]'>
        <Navbar/>
        <div className='w-full pt-10 pb-28 md:pb-12 md:p-10 px-12 h-full overflow-auto' id='contenido'>
            <Outlet/>
        </div>
    </div>
  )
}
