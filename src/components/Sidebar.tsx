import React, { useState } from 'react'
import {Link} from "react-router-dom"

import { ReactComponent as Hamburger } from '../assets/Hamburger.svg'
import { ReactComponent as Close } from '../assets/Close.svg'

const Sidebar:React.FC = () => {

  //State to manage sidebar close and open event
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)

  //Style to hide and display sidebar
  const slideStyle:string = !isSidebarOpen ? "-left-80" : "left-0"

  //Function to handle Link click
  const handleLinkClick:() => void = () =>{
    setSidebarOpen(false)
  }

  //Function to handle hamburger icon click
  const handleHamburgerClick:() => void = () =>{
    setSidebarOpen(true)
  }

  //Function to handle close icon click
  const handleCloseClick:() => void = () => {
    setSidebarOpen(false) 
  }

  return (
    <>
        <Hamburger className='md:hidden absolute top-16 left-2' onClick={handleHamburgerClick}/>
        <nav className='hidden md:inline-block absolute top-0 left-0 w-40 h-full bg-white z-[1] pt-14 text-blackMagic' >
            <ul>
                <li className='w-full h-10 mt-4 border-b-[1px] border-solid border-gray-300 pl-3 font-semibold'><Link to="/">Contact</Link></li>
                <li className='w-full h-10 mt-4 border-b-[1px] border-solid border-gray-300 pl-3 font-semibold'><Link to="/maps-charts">Charts and Maps</Link></li>
            </ul>
        </nav>
        <nav className={`md:hidden absolute top-0 left-0 w-40 h-full bg-white z-[3] pt-10 text-blackMagic shadow-xl ${slideStyle} duration-300`}>
            <Close className='absolute top-2 left-2' onClick={handleCloseClick}/>
            <ul>
                <li className='w-full h-10 mt-4 border-b-[1px] border-solid border-gray-300 pl-3 font-semibold flex items-center' onClick={handleLinkClick}><Link to="/">Contact</Link></li>
                <li className='w-full h-10 mt-4 border-b-[1px] border-solid border-gray-300 pl-3 font-semibold flex items-center' onClick={handleLinkClick}><Link to="/maps-charts">Charts and Maps</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Sidebar
