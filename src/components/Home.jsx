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
    <div className='flex justify-center' style={colour}>
    <Navbar />
    <div className='flex'>       
        <Leftbar />
        <Rightbar className="ml-20"/>      
        </div>
        <div>
        <Adds/>
        </div>
    </div>
    </>
  )
}

export default Home