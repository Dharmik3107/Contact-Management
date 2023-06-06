import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

import { useAppDispatch } from '../store/hooks'
import {create, edit} from "../store/slices/ContactSlice"

import Input from './Input'
import RadioButton from './RadioButton'
import Button from './Button'

import { FormTypes } from '../types/formType'

//Define types of Props
interface Props {
  defaultValues : FormTypes
  formType: string
}

const ContactForm:React.FC<Props> = ({defaultValues, formType}:Props) => {

  //State to collect form values 
  const [formValues, setFormValues] = useState<FormTypes>(defaultValues)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
 
  //Function to handle user typing and storing it into formValues
  const handleValueChange:(event:React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    const {value, name} = event.target
    setFormValues(defaultValues => ({...defaultValues, [name]:value}))
  }

  //Function to handle form submit
  const handleFormSubmit:(event:React.FormEvent<HTMLFormElement>)=>void = (event) => {
    event.preventDefault()
    if(formType === "create") dispatch(create(formValues))
    if(formType === "edit") dispatch(edit(formValues))    
    setFormValues(defaultValues)
    navigate("/")
  }

  return (
    <form onSubmit={handleFormSubmit} className='w-full h-fit bg-white mt-5 p-5 rounded-lg flex flex-col justify-center items-center'>
      <Input name='firstname' label='First Name' placeholder='Enter your First Name' value={formValues.firstname} onChange={handleValueChange} required={true}/>
      <Input name='lastname' label='Last Name' placeholder='Enter your Last Name' value={formValues.lastname} onChange={handleValueChange} required={true}/>
      <div className='w-full h-fit flex justify-around items-center font-semibold font-openSans text-base md:text-xl text-blackMagic'>
        Status:      
        <RadioButton label='Active' name='status' value="active" onChange={handleValueChange} required={true}/>
        <RadioButton label='Inactive' name='status' value="inactive" onChange={handleValueChange} required={true}/>
      </div>
      <Button type="submit" buttonText={`${ formType === "create" ? 'Save Contact' : 'Edit Contact'}`} buttonType='inverted' />
    </form>
  )
}

export default ContactForm
