import React from 'react'
import {Link} from "react-router-dom"

import Button from './../components/Button';
import EmptyList from '../components/EmptyList';
import ContactList from '../components/ContactList';

const Contact:React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <Link to="/create-contact" className='w-full max-w-[150px] h-fit'><Button buttonText='Create Contact' buttonType='default'/></Link>
      <EmptyList />
      <ContactList />
    </div>
  )
}

export default Contact
