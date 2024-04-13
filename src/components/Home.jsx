import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Adds from './Adds'


const Home = () => {
  return (
    <div className='h-full w-full bg-gray-100 grid grid-cols-6'>
        <div>
        <Leftbar/>
        </div>
        <div className='col-span-3'>
        <Rightbar/>
        </div>
        <div>
        <Adds/>
        </div>
    </div>
  )
}

export default Home