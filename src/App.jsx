import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion'
import AccordionData from '../assets/content'

function App() {

  return (
    <>
      <div className='flex flex-col items-center px-4'>
        <h1 className='text-2xl font-bold text-center py-2 '>My Accordion Demo</h1>

        {AccordionData.map((item, index) => (
          <Accordion title={item.title} children={item.content} key={index}/>
        ))}
      </div>

    </>
  )
}

export default App
