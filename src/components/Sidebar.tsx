import React from 'react'
import {Link} from "react-router-dom"

import { ReactComponent as Hamburger } from '../assets/Hamburger.svg'

const Sidebar:React.FC = () => {
  return (
    <>
        <Hamburger className='md:hidden absolute top-16 left-2'/>
        <nav className='hidden md:inline-block absolute top-0 left-0 w-40 h-full bg-white z-[1] pt-14 text-blackMagic'>
            <ul>
                <li className='w-full h-10 mt-4 border-b-[1px] border-solid border-gray-300 pl-3 font-semibold'><Link to="/">Contact</Link></li>
                <li className='w-full h-10 mt-4 border-b-[1px] border-solid border-gray-300 pl-3 font-semibold'><Link to="/maps-charts">Charts and Maps</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Sidebar
