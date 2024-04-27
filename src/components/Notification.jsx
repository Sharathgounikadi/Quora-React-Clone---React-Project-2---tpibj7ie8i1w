import React from 'react'
import bell from  '../assets/Bell.jpg';
import notification from '../assets/Notification.jpg'
const Notification = () => {
  return (
    <div className='flex ml-20'>
        <div className='mt-20 flex flex-col text-left'>
            <div className='p-1'>Filters</div>
            <hr className='h-1'/>
            <button className='p-1 text-left'>All notes</button>
            <button className='p-1 text-left'>Articles</button>
            <button className='p-1 text-left'>Questions</button>
            <button className='p-1 text-left'>venues</button>
            <button className='p-1 text-left'>People updates</button>
            <button className='p-1 text-left'>Comments, as well as mentions</button>
            <button className='p-1 text-left'>Upvotes</button>
            <button className='p-1 text-left'>Your content</button>
            <button className='p-1 text-left'>Your profile</button>
            <button className='p-1 text-left'>Announcements</button>
            <button className='p-1 text-left'>Earnings</button>
            <button className='p-1 text-left'>Subsriptions</button>
        </div>
        <div className='ml-20 mt-20'>
            <div className='mt-1 p-1'>Notifications</div>
            <hr/>
            <img className='flex ml-20 mt-20 w-30 h-30' src={notification}/>
            <div className='p-5'>There are no notification till now, updated just now</div>
        </div>
    </div>
  )
}

export default Notification