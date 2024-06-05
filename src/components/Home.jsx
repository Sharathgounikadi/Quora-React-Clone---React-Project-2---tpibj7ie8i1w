import React, { useState } from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Adds from './Adds'
import { useUser } from './UserProvider';
import NavbarDefault from './NavbarDefault';


const Home = () => {
  const {theme}=useUser();
  const colour={
    backgroundColor:theme=='light'?'rgb(241, 242, 242)':'black'
  }
  
  return (
    <>
    <div  style={colour}>
    <NavbarDefault />
    <div className='flex'> 
      <div>    
        <Leftbar />
        </div>  
        <Rightbar />      
        </div>
        <div >
        <Adds/>
        </div>
    </div>
    </>
  )
}

export default Home