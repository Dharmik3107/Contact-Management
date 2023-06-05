import React from 'react'

interface Props {
    buttonText: string;
    buttonType: "default" | "edit" | "delete";
}

interface ButtonStyles {
    default: string;
    edit: string;
    delete: string;
}

const BUTTON_STYLES:ButtonStyles = {
    default:"w-full max-w-[150px] h-12 bg-white mt-10 hover:bg-[rgba(255,255,255,0.9)] text-indigo font-semibold duration-300 outline-none rounded-xl",
    edit:"w-full max-w-[150px] h-12 bg-green-300 mt-10 hover:bg-[rgba(140,252,140,0.5)] text-black font-semibold duration-300 outline-none rounded-xl",
    delete: "w-full max-w-[150px] h-12 bg-red-300 mt-10 hover:bg-[rgba(255,185,185,0.9)] text-black font-semibold duration-300 outline-none rounded-xl"

}

const Button:React.FC<Props> = ({buttonText, buttonType, ...otherProps }:Props) => {
  return (
    <button className={BUTTON_STYLES[buttonType]} {...otherProps}>{buttonText}</button>
  )
}

export default Button