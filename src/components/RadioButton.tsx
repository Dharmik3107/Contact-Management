import React from 'react'

//Define types of Props
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name:string
}

const RadioButton:React.FC<Props> = ({label,name, ...otherProps}:Props) => {
  return (
    <label className='text-blackMagic w-fit h-fit flex justify-start items-center gap-3 text-base md:text-xl font-medium font-openSans my-5'>
      <input type="radio" name={name} {...otherProps} className='w-5 h-5'/>
      {label}
    </label>
  )
}

export default RadioButton
