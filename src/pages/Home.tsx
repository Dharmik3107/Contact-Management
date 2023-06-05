import React from 'react'
import {Outlet} from "react-router-dom"

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home:React.FC = () => {
  return (
    <section className='relative w-full h-full bg-apricot'>
      <Navbar/>
      <Sidebar />
      <div className='pt-14 md:pl-40 w-full h-full'>
        <Outlet/>
      </div>
      
    </section>
  )
}

export default Home
