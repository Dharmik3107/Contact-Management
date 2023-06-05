import React from 'react'
import {useNavigate} from "react-router-dom"

import { useAppDispatch } from '../store/hooks';
import { remove } from '../store/slices/ContactSlice';

import Button from './Button'
import { FormTypes } from '../types/formType';

interface Props {
    id:string;
    firstName : string;
    lastName : string;
    isActive : boolean;
    status: string
}

const ContactCard:React.FC<Props> = ({id, firstName, lastName, isActive, status}:Props) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleEditClick:() => void = () => {
    navigate(`/edit-contact/${id}`)
  }

  const formData:FormTypes = {
    id:id,
    firstname:firstName,
    lastname:lastName,
    status:status
  }
  const handleDeleteClick:() => void = () => {
    dispatch(remove(formData))
  }
  return (
    <div className='w-full max-w-[320px] bg-white p-2 flex flex-col justify-center items-start rounded-lg'>
        <h1 className='font-bold font-openSans text-2xl'>{firstName} {lastName}</h1>
        <h5 className='text-lg'>{isActive ? "Active" : "Inactive"}</h5>
        <div className='w-full h-fit flex justify-center items-center gap-2'>
            <Button buttonText='Edit' buttonType='edit' onClick={handleEditClick}/>
            <Button buttonText='Delete' buttonType='delete' onClick={handleDeleteClick}/>
        </div>

    </div>
  )
}

export default ContactCard
