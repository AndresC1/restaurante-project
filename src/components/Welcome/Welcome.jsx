import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { IoRestaurantOutline } from 'react-icons/io5';
import { TbMeat } from 'react-icons/tb';
import { GiTomato } from 'react-icons/gi';

export default function Welcome() {
  return (
    <>
    <div className='flex space-x-10 py-10 justify-evenly rounded-xl items-center mt-20'>
        <div className='lg:w-5/12 w-7/12 flex items-center justify-center flex-col'>
            <h1 className='lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl text-md w-11/12 font-mono h-full flex justify-center items-center'>La comida es nuestro arte. En la variedad está el Gusto.</h1>
            <div className='mt-4 md:mt-8 pl-4 w-11/12 xl:w-9/12 lg:w-10/12 md:w-full h-10 flex justify-start'>
                <Link to={'/menu'} className='text-color_blanco transition-all hover:scale-105 bg-color_naranja font-semibold md:px-7 rounded-lg flex justify-evenly items-center text-xs lg:text-base px-3'><IoRestaurantOutline className='mr-3'/>Ver menu</Link>
            </div>
        </div>
        <img className='w-5/12' src="https://i.imgur.com/2np1hB1.png" alt="home" />
    </div>
    <div className='md:h-40 h-auto py-8 md:py-0 m-auto w-full xl:w-9/12 lg:w-10/12 border-[1px] bg-color_hueso mt-20 rounded-xl text-xs md:text-base'>
        <ul className='flex md:flex-row flex-col justify-around items-center h-full space-y-10 md:space-y-0'>
            <li className='flex flex-col justify-evenly items-center font-bold hover:scale-105 transition-all'><GiTomato className='h-auto w-12 rounded-full text-white p-3 bg-color_naranja mb-3'/>Ingredientes frescos</li>
            <li className='flex flex-col justify-evenly items-center font-bold hover:scale-105 transition-all'><MdOutlineDeliveryDining className='h-auto w-12 rounded-full text-white p-3 bg-color_naranja mb-3'/>Entrega rapida</li>
            <li className='flex flex-col justify-evenly items-center font-bold hover:scale-105 transition-all'><TbMeat className='h-auto w-12 rounded-full text-white p-3 bg-color_naranja mb-3'/>Carne de alta calidad</li>
        </ul>
    </div>
    </>
  )
}
