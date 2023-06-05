import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input:React.FC<Props> = ({name, label, ...otherProps}:Props) => {
  return (
    <div className='w-full h-12 flex justify-around items-center my-4'>
      <label htmlFor={name} className='font-semibold font-openSans text-base md:text-xl text-blackMagic'>{label}:</label>
      <input name={name} {...otherProps} className='border-[1px] border-solid border-gray-400 w-2/3 h-full outline-none indent-2 text-sm md:text-xl rounded-lg'/>
    </div>
  )
}

export default Input
