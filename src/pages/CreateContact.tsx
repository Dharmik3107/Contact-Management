import React from 'react'

import ContactForm from '../components/ContactForm'

import { FormTypes } from '../types/formType'

const CreateContact:React.FC = () => {
  const defaultValues:FormTypes = {
    id: Date.now().toString(),
    firstname: "",
    lastname:"",
    status:""
  }

  return (
    <div className='w-full max-w-[600px] mx-auto h-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl font-openSans'>Create Contact</h1>
      <ContactForm defaultValues={defaultValues} formType='create'/>      
    </div>
  )
}

export default CreateContact
