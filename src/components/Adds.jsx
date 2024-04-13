import React from 'react'
import adds from '../assets/Adds.jpg'
import adds1 from '../assets/Adds1.jpg'
const Adds = () => {
  return (
    <div className='ml-2 mt-20 border bg-gray-300 fixed'>
        <div className='w-100 h-100'>
        <img src={adds} className='w-80 h-50 pl-5 pt-2 pr-5' />
        </div>
        <div>
        <img src={adds1} className='w-80 h-50 pl-5 pt-2 pr-5 pb-2' />
        </div>
        <div className='text-center border bg-blue-gray-50 '>
            Advertisement
        </div>
    </div>
  )
}

export default Adds