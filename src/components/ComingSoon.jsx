import React from 'react'
import notification from '../assets/Notification.jpg'
const ComingSoon = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='mt-20 flex items-center justify-center flex-col'>
        <img className='w-20 h-20' src={notification} />
        <div className='p-2 text-2xl'>No new Notifications</div>
        <div className='p-2'>Notifications you received in the last 24 hours will show up here.</div>
        </div>
    </div>
  )
}

export default ComingSoon