import React from 'react'
import {Link} from "react-router-dom";

import Button from './../components/Button';
import EmptyList from '../components/EmptyList';
import ContactList from '../components/ContactList';
import { useAppSelector } from '../store/hooks';

const Contact:React.FC = () => {
  const contactList = useAppSelector(state => state.contact.data)
  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <Link to="/create-contact" className='w-full max-w-[150px] h-fit'><Button buttonText='Create Contact' buttonType='default'/></Link>
      {contactList.length !== 0 ? <ContactList list={contactList}/> : <EmptyList />}      
    </div>
  )
}

export default Contact
