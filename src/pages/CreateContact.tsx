import React from 'react'

import Button from '../components/Button'
import ContactForm from '../components/ContactForm'

const CreateContact:React.FC = () => {
  return (
    <div className='w-full max-w-[600px] mx-auto h-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl font-openSans'>Create Contact Screen</h1>
      <ContactForm />
      <Button buttonText='Save Contact' buttonType='default' />
    </div>
  )
}

export default CreateContact
