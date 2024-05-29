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
    backgroundColor:theme=='light'?'rgb(230, 230, 230)':'black'
  }
  return (
    <>
    <div className='h-full w-50 grid grid-cols-6' style={colour}>
        <div>
        <Navbar />
        <Leftbar/>
        </div>
        <div className='col-span-3'>
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