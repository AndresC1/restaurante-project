import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/NavbarStyle.css'
import { BiHomeAlt } from 'react-icons/bi';
import { IoRestaurantOutline } from 'react-icons/io5';
import { MdOutlineContacts } from 'react-icons/md';

export default function Navbar() {
  return (
    <>
      <div className=' bg-white xl:w-2/12 w-20 min-h-full overflow-y-auto md:flex hidden flex-col xl:space-y-10 space-y-4 pb-32' id='barraNavegacion'>
        <div className='w-full xl:hidden h-14 hover:bg-color_blanco flex flex-col space-y-1 justify-center items-center py-4'>
            <div className='h-1 w-7 bg-black'></div>
            <div className='h-1 w-7 bg-black'></div>
            <div className='h-1 w-7 bg-black'></div>
        </div>
        <img className='w-11/12 hidden xl:block mx-auto my-10 h-auto' src="https://cdn.dribbble.com/users/1111447/screenshots/13124975/media/0987478147cb552305c3a0a8f5ed8489.jpg?compress=1&resize=800x600&vertical=top" alt="logo" />
        <ul className='w-full h-auto flex justify-evenly space-y-4 xl:space-y-2 flex-col'>
            <Link to={'/'} className='EstiloLinksNavbar group'><BiHomeAlt className='EstiloIconsNavbar'/><span>Inicio</span></Link>
            <Link to={'/menu'} className='EstiloLinksNavbar group'><IoRestaurantOutline className='EstiloIconsNavbar'/><span>Menu</span></Link>
            <Link className='EstiloLinksNavbar group'><MdOutlineContacts className='EstiloIconsNavbar'/><span>Contacto</span></Link>
        </ul>
      </div>
      <div className='bg-white md:hidden fixed bottom-0 left-0 w-full h-16'>
        <ul className='flex justify-around h-full'>
          <Link to={'/'} className='h-full bg-white w-full flex flex-col justify-center items-center text-color_naranja'><BiHomeAlt className='h-auto w-6'/><h1 className='text-sm'>Inicio</h1></Link>
          <Link to={'/home'} className='h-full bg-white w-full flex flex-col justify-center items-center text-color_naranja'><IoRestaurantOutline className='h-auto w-6'/><h1 className='text-sm'>Menu</h1></Link>
          <Link className='h-full bg-white w-full flex flex-col justify-center items-center text-color_naranja'><MdOutlineContacts className='h-auto w-6'/><h1 className='text-sm'>Contacto</h1></Link>
        </ul>
      </div>
    </>
  )
}
