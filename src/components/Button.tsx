import React from 'react'

//Define the prop types and extends to HTMLButtonElement type to allow extra required button props 
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
    buttonType: "default" | "edit" | "delete" | "inverted";
}

//Define the styles types for every type of button
interface ButtonStyles  {
    default: string;
    edit: string;
    delete: string;
    inverted: string
}

//Write styles for each type of button for better reusability and ux compatiblilty
const BUTTON_STYLES:ButtonStyles = {
    default:"w-full max-w-[150px] h-12 bg-white mt-10 hover:bg-[rgba(255,255,255,0.9)] text-indigo font-semibold duration-300 outline-none rounded-xl",
    edit:"w-full max-w-[150px] h-12 bg-green-300 mt-10 hover:bg-[rgba(140,252,140,0.5)] text-black font-semibold duration-300 outline-none rounded-xl",
    delete: "w-full max-w-[150px] h-12 bg-red-300 mt-10 hover:bg-[rgba(255,185,185,0.9)] text-black font-semibold duration-300 outline-none rounded-xl",
    inverted: "w-full max-w-[150px] h-12 bg-indigo mt-10 hover:bg-[rgba(255,255,255,0.9)] border-2 border-solid border-[transparent] hover:border-indigo hover:text-indigo text-white font-semibold duration-300 outline-none rounded-xl"
}

//Butto Component which accepts attributes required for button element as otherProps
const Button:React.FC<Props> = ({buttonText, buttonType, ...otherProps }:Props) => {
  return (
    <button className={BUTTON_STYLES[buttonType]} {...otherProps}>{buttonText}</button>
  )
}

export default Button
