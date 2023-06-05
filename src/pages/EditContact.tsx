import React, { useEffect } from 'react'
import {useParams, useNavigate} from "react-router-dom"

import ContactForm from '../components/ContactForm'
import { useAppSelector } from '../store/hooks';
import { FormTypes } from '../types/formType';

const EditContact:React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const data = useAppSelector(state => state.contact.data)

  const defaultValues:FormTypes = {
    id: Date.now().toString(),
    firstname: "",
    lastname:"",
    status:""
  }



  const formValues:FormTypes = data.filter((element) => element.id === id)[0] || defaultValues

  useEffect(() => {
    if(formValues === defaultValues) navigate("/")
  })

  return (
    <div className='w-full max-w-[600px] mx-auto h-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl font-openSans'>Edit Contact</h1>
      <ContactForm defaultValues={formValues} formType='edit'/>      
    </div>
  )
}

export default EditContact
