import React, { useEffect } from 'react'
import {useParams, useNavigate} from "react-router-dom"

import ContactForm from '../components/ContactForm'
import { useAppSelector } from '../store/hooks';
import { FormTypes } from '../types/formType';

const EditContact:React.FC = () => {

  //Collecting id from URL
  const {id} = useParams();
  const navigate = useNavigate()

  //Fetching Contact List from Redux Store
  const contactList = useAppSelector(state => state.contact.data)

  //Default Values for Form Fields to pass on
  const defaultValues:FormTypes = {
    id: Date.now().toString(),
    firstname: "",
    lastname:"",
    status:""
  }

  //Finding the particular contact details from list of contacts 
  const formValues:FormTypes = contactList.filter((element) => element.id === id)[0] || defaultValues

  //Sideeffect to navigate to home page if particular contact is not found in list
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
