import React from 'react'
import Input from './Input'
import RadioButton from './RadioButton'

const ContactForm:React.FC = () => {
  return (
    <form className='w-full h-fit bg-white mt-5 p-5 rounded-lg flex flex-col justify-center items-center'>
      <Input name='firstname' label='First Name' placeholder='Enter your First Name'/>
      <Input name='lastname' label='Last Name' placeholder='Enter your Last Name'/>
      <div className='w-full h-fit flex justify-around items-center font-semibold font-openSans text-base md:text-xl text-blackMagic'>
        Status:      
        <RadioButton label='Active' name='status' value="active"/>
        <RadioButton label='Inactive' name='status' value="inactive"/>
      </div>

    </form>
  )
}

export default ContactForm
