import React from 'react'

const Loader:React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default Loader
