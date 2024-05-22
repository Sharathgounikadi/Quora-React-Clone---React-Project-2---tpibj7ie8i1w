import React from 'react'
import  { useNavigate } from "react-router-dom";
import quora from  '../assets/Quora.jpg';
import home from  '../assets/Home.jpg';
import search from  '../assets/Search.jpg';
import globe from  '../assets/Globe.jpg';
import edit from  '../assets/Edit.jpg';
import bell from  '../assets/Bell.jpg';
import group from  '../assets/Group.jpg';
import account from  '../assets/Account.jpg';
import AskDialog from './AskDialog';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import Notification from './Notification';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='fixed flex z-10 bg-white pl-20 pt-4 shadow-md h-14 w-full ml-auto'>
    <img src={quora} className='w-24 h-7' onClick={() => navigate('/')} />
    <img src={home} className='w-7 h-7 ml-10' onClick={() => navigate('/')} />
    <img src={group} className='w-7 h-7 ml-10' onClick={() => navigate('/ComingSoon')} />
    <img src={edit} className='w-7 h-7 ml-10' onClick={() => navigate('/ComingSoon')}/>
    <img src={group} className='w-7 h-7 ml-10' onClick={() => navigate('/ComingSoon')}/>
    <img src={bell} className='w-7 h-7 ml-10' onClick={() => navigate('/Notification')}/>
    <input className='ml-5 w-50 h-8 border border-spacing-1 rounded-lg' placeholder='        Search Quora'/>
    {/* <div className='flex border border-spacing-1 h-9 ml-10 w-72 p-1'>
        <img src={search} className='w-3 h-3 mt-2'/>
        
    </div> */}
    <h1 className='text-sm border border-spacing-1 rounded-full p-2 ml-5 h-9'><Subscription /></h1>
    <div><ProfileMenu /></div>
    <div><LanguageMenu /></div>
    <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9' onClick={() => navigate('/AskDialog')}>Ask Question</h1>
    </div>
  )
}

export default Navbar