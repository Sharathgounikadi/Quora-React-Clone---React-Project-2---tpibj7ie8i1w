import React from 'react'
import cooking from "../assets/Cooking.jpg"
import science from "../assets/Science.jpg"
import music from "../assets/Music.jpg"
import tech from "../assets/Tech.jpg"
import technology from "../assets/Technology.jpg"
import pshycology from "../assets/Psycology.jpg"
const Leftbar = () => {
  return (
    <div className='pl-20 pt-5 text-sm'>
        <div className='flex mt-5'>
            <img src={cooking} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Cooking</h2>
        </div>
        <div className='flex mt-5'>
            <img src={cooking} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Health</h2>
        </div>
        <div className='flex mt-5'>
            <img src={tech} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Technology</h2>
        </div>
        <div className='flex mt-5'>
            <img src={music} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Music</h2>
        </div>
        <div className='flex mt-5'>
            <img src={science} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Science</h2>
        </div>
        <div className='flex mt-5'>
            <img src={pshycology} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Psycology</h2>
        </div>
        <div className='flex mt-5'>
            <img src={technology} className='w-4 h-4 rounded-sm' />
            <h2 className='ml-3 text-gray-500'>Social</h2>
        </div>
        <hr className='mt-3'/>
        <h1 className='mt-3 text-gray-400 text-sm'>About . Careers .</h1>
        <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
        <h1 className=' text-gray-400 text-sm'>Acceptable Use</h1>
        <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
    </div>
  )
}

export default Leftbar