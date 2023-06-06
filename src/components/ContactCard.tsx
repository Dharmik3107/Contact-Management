import React from 'react'
import {Link} from "react-router-dom"

import { useAppDispatch } from '../store/hooks';
import { remove } from '../store/slices/ContactSlice';

import Button from './Button'
import { FormTypes } from '../types/formType';

//Define Types for Props required for component
interface Props {
    id:string;
    firstName : string;
    lastName : string;
    isActive : boolean;
    status: string
}

const ContactCard:React.FC<Props> = ({id, firstName, lastName, isActive, status}:Props) => {

  //Typed Hooks to avoid unneccesory errors while passing parameters
  const dispatch = useAppDispatch()

  //Define types for Form
  const formData:FormTypes = {
    id:id,
    firstname:firstName,
    lastname:lastName,
    status:status
  }

  //Function to delete contact from list
  const handleDeleteClick:() => void = () => {
    dispatch(remove(formData))
  }
  return (
    <div className='w-full max-w-[320px] bg-white p-2 flex flex-col justify-center items-start rounded-lg'>
        <h1 className='font-bold font-openSans text-2xl'>{firstName} {lastName}</h1>
        <h5 className='text-lg'>{isActive ? "Active" : "Inactive"}</h5>
        <div className='w-full h-fit flex justify-center items-center gap-2'>
            <Link to={`/edit-contact/${id}`} className='w-full max-w-[150px]'><Button buttonText='Edit' buttonType='edit'/></Link>
            <Button buttonText='Delete' buttonType='delete' onClick={handleDeleteClick}/>
        </div>

    </div>
  )
}

export default ContactCard
