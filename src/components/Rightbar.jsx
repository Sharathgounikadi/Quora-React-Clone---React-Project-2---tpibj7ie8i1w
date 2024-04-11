import React from 'react'
import Avatar from 'react-avatar';
import account from '../assets/Account.jpg'
import question from '../assets/Question.jpg'
import pen from '../assets/Pen.jpg'
import edit from '../assets/Edit.jpg'
import image from '../assets/Image.jpg'
import axios from 'axios';
const Rightbar = () => {

    const fetchPosts = async () => {
        try {
          const response = await axios.get('https://academics.newtonschool.co/api/v1/quora/post?limit=100', {
            
            headers: {
              'projectID': 'YOUR_PROJECT_ID'
            }
          });
          console.log(response.json())
          return response.data; // Assuming the response contains post data
        } catch (error) {
          console.error('Failed to fetch posts:', error);
          return []; // Return an empty array in case of error
        }
      };

    return (
        <div className='p-2 rounded-sm'>
            <div className='bg-white p-2 h-20 border border-spacing-1'>
                <div className='flex'>
                    <Avatar round size="25" className="mt-0.5 ml-2" name="w" />
                    <input placeholder='What do you want to ask for share?' className='bg-gray-100 p-1 ml-4 placeholder-gray-600 border border-spacing-1 rounded-full w-full' />
                </div>
                <div className='flex pt-2'>
                    <div className='ml-16 flex'>
                        <img src={question} className='w-5 h-5' />
                        <h1 className='ml-2'>Ask</h1>
                    </div>
                    <h1 className='ml-20'>|</h1>
                    <div className='ml-16 flex'>
                        <img src={edit} className='w-5 h-5' />
                        <h1 className='ml-2'>Answer</h1>
                    </div>
                    <h1 className='ml-20'>|</h1>
                    <div className='ml-16 flex'>
                        <img src={pen} className='w-5 h-5' />
                        <h1 className='ml-2'>Post</h1>
                    </div>
                </div>
            </div>
            <div className='bg-white mt-2 p-2'>
                <div className='flex'>
                    <Avatar round size="25" className="mt-0.5 ml-2" name="w" />
                    <h1 className='ml-5 font-semibold'>Name</h1>
                </div>
                <h1 className='font-semibold mt-3'>Title</h1>
                <h1 className='mt-2'>This is content</h1>
                <img src={image} className='mt-3 w-full'/>
            </div>
        </div>
    )
}

export default Rightbar