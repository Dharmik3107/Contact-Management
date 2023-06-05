import React from 'react'

import ContactCard from './ContactCard'
import { FormTypes } from './../types/formType';

interface Props {
  list: FormTypes[]
}

const ContactList:React.FC<Props> = ({list}:Props) => {

  return (
    <div className='w-[95%] max-w-[1050px] mt-20 flex justify-start flex-wrap items-start gap-5 p-5 overflow-y-scroll scrollbar'>
      {list.map((element) => {
        return <ContactCard key={element.id} id={element.id} firstName={element.firstname} lastName={element.lastname} status={element.status} isActive={element.status === "active" ? true : false} /> 
      })}
    </div>
  )
}

export default ContactList
