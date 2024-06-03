import React, { useState } from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Adds from './Adds'
import Navbar from './Navbar';
// import { UserProvider } from "./components/UserProvider";
import { useUser } from './UserProvider';


const Home = () => {
  const {theme}=useUser();
  const colour={
    backgroundColor:theme=='light'?'rgb(241, 242, 242)':'black'
  }
  
  return (
    <>
    <div className='h-full w-full grid grid-cols-7 mx-auto gap-1' style={colour}>
    <Navbar />
    <div className='col-span-1'></div>
        <div>
        <Leftbar />
        </div>
        <div className='col-span-2'>
        <Rightbar/>
        </div>
        <div>
        <Adds/>
        </div>
    </div>
    </>
  )
}

export default Home