import React from 'react'
import bell from  '../assets/Bell.jpg';
import notification from '../assets/Notification.jpg'
import { useNavigate } from 'react-router-dom';
import ComingSoon from './ComingSoon';
const Notification = () => {
    const navigate=useNavigate();
  return (
    <div className='flex ml-20'>
        <div className='mt-20 flex flex-col text-center'>
            <div className='p-1'>Filters</div>
            <hr className='h-1'/>
            <button className='p-2 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>All notes</button>
            <button className='p-2 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Articles</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Questions</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>venues</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>People updates</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Comments</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Upvotes</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Your content</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Your profile</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Announcements</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Earnings</button>
            <button className='p-1 m-1 text-center bg-gray-300 rounded' onClick={() => navigate('/ComingSoon')}>Subscriptions</button>
        </div>
        <div className='ml-20 mt-20'>
            <div className='mt-1 p-1 text-center'>Notifications</div>
            <hr/>
            <img className='flex ml-20 mt-20 w-20 h-20' src={notification}/>
            <div className=''>There are no notification till now</div>
        </div>
    </div>
  )
}

export default Notification