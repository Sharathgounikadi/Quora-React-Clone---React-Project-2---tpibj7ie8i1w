import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'


const Home = () => {
  return (
    <div className='h-full w-screen bg-gray-100 grid grid-cols-6'>
        <div>
        <Leftbar/>
        </div>
        <div className='col-span-3'>
        <Rightbar/>
        </div>
    </div>
  )
}

export default Home