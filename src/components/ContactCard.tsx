import React from 'react'
import Button from './Button'

interface Props {
    firstName : string;
    lastName : string;
    isActive : boolean;
}

const ContactCard:React.FC<Props> = ({firstName, lastName, isActive}:Props) => {
  return (
    <div className='w-full max-w-[320px] bg-white p-2 flex flex-col justify-center items-start rounded-lg'>
        <h1 className='font-bold font-openSans text-2xl'>{firstName} {lastName}</h1>
        <h5 className='text-lg'>{isActive ? "Active" : "Inactive"}</h5>
        <div className='w-full h-fit flex justify-center items-center gap-2'>
            <Button buttonText='Edit' buttonType='edit' />
            <Button buttonText='Delete' buttonType='delete' />
        </div>

    </div>
  )
}

export default ContactCard
