import React from 'react'
import cooking from "../assets/Cooking.jpg"
import science from "../assets/Science.jpg"
import music from "../assets/Music.jpg"
import tech from "../assets/Tech.jpg"
import technology from "../assets/Technology.jpg"
import pshycology from "../assets/Psycology.jpg"
import CreateSpace from './CreateSpace'
import { useNavigate } from 'react-router-dom'
const Leftbar = () => {
    const navigate=useNavigate();
    return (
        <div className='pl-20 mt-20 ml-10 text-sm fixed'>
            <div className='flex mt-2 bg-gray-200 pl-1 pr-2 pt-1 pb-1'>
                <div className='rounded-sm p-1 bg-gray cursor-pointer'>+</div>
                <button className='ml-1 cursor-pointer'><CreateSpace /></button>
            </div>
            <div className='flex mt-5'>
                <img src={cooking} className='w-4 h-4 rounded-sm' />
                <button className='ml-3 text-gray-500' onClick={() => navigate('/')} >Cooking</button>
            </div>
            <div className='flex mt-5'>
                <img src={tech} className='w-4 h-4 rounded-sm' />
                <button className='ml-3 text-gray-500' onClick={()=>navigate('/Spaces')}>Technology</button>
            </div>
            <div className='flex mt-5'>
                <img src={music} className='w-4 h-4 rounded-sm' />
                <button className='ml-3 text-gray-500'>Music</button>
            </div>
            <div className='flex mt-5'>
                <img src={science} className='w-4 h-4 rounded-sm' />
                <button className='ml-3 text-gray-500'>Science</button>
            </div>
            <div className='flex mt-5'>
                <img src={pshycology} className='w-4 h-4 rounded-sm' />
                <button className='ml-3 text-gray-500'>Psycology</button>
            </div>
            <div className='flex mt-5'>
                <img src={technology} className='w-4 h-4 rounded-sm' />
                <button className='ml-3 text-gray-500'>Social</button>
            </div>
            <hr className='mt-3' />
            <h1 className='mt-3 text-gray-400 text-sm'>About . Careers .</h1>
            <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
            <h1 className=' text-gray-400 text-sm'>Acceptable Use</h1>
            <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
        </div>
    )
}

export default Leftbar