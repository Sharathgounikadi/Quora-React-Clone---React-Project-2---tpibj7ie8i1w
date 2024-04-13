import React from 'react'
import  { useNavigate } from "react-router-dom";
import quora from  '../assets/Quora.jpg';
import home from  '../assets/Home.jpg';
import search from  '../assets/Search.jpg';
import globe from  '../assets/Globe.jpg';
import edit from  '../assets/Edit.jpg';
import bell from  '../assets/Bell.jpg';
import group from  '../assets/Group.jpg';
import Avatar from 'react-avatar';
import AskDialog from './AskDialog';


const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='flex pl-20 pt-4 shadow-md h-14 w-screen'>
    <img src={quora} className='w-24 h-7' onClick={() => navigate('/')} />
    <img src={home} className='w-7 h-7 ml-10'/>
    <img src={group} className='w-7 h-7 ml-10'/>
    <img src={edit} className='w-7 h-7 ml-10'/>
    <img src={group} className='w-7 h-7 ml-10'/>
    <img src={bell} className='w-7 h-7 ml-10'/>
    <div className='flex border border-spacing-1 h-9 ml-10 w-72 p-1'>
        <img src={search} className='w-3 h-3 mt-2'/>
        <input className='ml-2' placeholder='Search Quora'/>
    </div>
    <h1 className='text-sm border border-spacing-1 rounded-full p-2 ml-5 h-9'>Try Quora+</h1>
    <img src={globe} className='w-5 h-5 ml-5 mt-2'/>
    <Avatar round size="25" className="mt-0.5 ml-2" name="wee"/>
    <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9'><AskDialog /></h1>
    </div>
  )
}

export default Navbar