import React from 'react'
import bell from  '../assets/Bell.jpg';
const Notification = () => {
  return (
    <div className='flex ml-20'>
        <div className='mt-20 list-none'>
            <div className='p-2'>Filters</div>
            <hr className='h-1'/>
            <li className='p-2'>All notes</li>
            <li className='p-2'>Articles</li>
            <li className='p-2'>Questions</li>
            <li className='p-2'>venues</li>
            <li className='p-2'>People updates</li>
            <li className='p-2'>Comments, as well as mentions</li>
            <li className='p-2'>Upvotes</li>
            <li className='p-2'>Your content</li>
            <li className='p-2'>Your profile</li>
            <li className='p-2'>Announcements</li>
            <li className='p-2'>Earnings</li>
            <li className='p-2'>Subsriptions</li>
        </div>
        <div className='ml-20 mt-20'>
            <div className='mt-2 p-2'>Notifications</div>
            <hr/>
            <img className='flex ml-20 mt-20' src={bell}/>
            <div className='p-5'>There are no notification till now, updated just now</div>
        </div>
    </div>
  )
}

export default Notification