import React, { useState } from 'react'

const Accordion = ({title, children}) => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {title && 
      <section className='w-full max-w-md'>
        <div className='mb-2 overflow-hidden shadow  outline-none rounded'>
          <div 
          className='relative text-sm sm:text-base md:text-lg lg:text-xl flex items-center  px-4 py-2 cursor-pointer font-semibold
           bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-600 select-none'
           onClick={() => setIsOpen(!isOpen)}>
            <span className='font-extrabold text-2xl'>
              {isOpen ? '-' : '+'}
            </span>

            <span className='absolute flex justify-center inset-0 items-center'>
              <h1>{title}</h1>
              
            </span>

            
          </div>
          
            <div className={`text-gray-700 px-4 sm:px-6 md:px-8 bg-white transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-3': 'max-h-0 opacity-0 py-0'}`}>
              {children}
            </div>
          
          
        </div>
      </section>
}
    </>
  )
}

export default Accordion