import React from 'react'

import {ReactComponent as RoundedClose} from "../assets/RoundedClose.svg"

const EmptyList:React.FC = () => {
  return (
    <div className='w-[95%] max-w-[450px] mt-20 flex justify-center items-start gap-5 bg-white p-5'>
      <RoundedClose className='w-16 h-16'/>
      <div>
        <p className='font-semibold font-openSans text-xl'>No Contact Found</p>
        <p className='font-semibold font-openSans text-xl'>Please add contact from Create Contact Button</p>
      </div>
    </div>
  )
}

export default EmptyList
