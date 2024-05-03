import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import question from '../assets/Question.jpg'
import pen from '../assets/Pen.jpg'
import edit from '../assets/Edit.jpg'
import comment from '../assets/Comment.jpg'
import refresh from '../assets/Refresh.jpg'
import uparrow from '../assets/Uparrow.jpg'
import downarrow from '../assets/Downarrow.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Rightbar = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const dataUser = localStorage.getItem("token");
    // console.log(dataUser)
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/quora/post?limit=2', {
        headers: {
          'projectID': 'tpibj7ie8i1w',
          'Authorization': `Bearer ${dataUser}`
        }
      });
      setPosts(response.data.data)
      console.log(response.data.data)
      //   return response.data; 
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchPosts()
  }, [])

  const handlePostOpen = (postId) => {
    navigate(`/question/${postId}`)
  }

  return (
    <div className='mt-20 rounded-sm'>
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
      {/* PostCard */}
      {posts.map((post, index) => {
        return (
          <div className='bg-white mt-2 p-2' key={index} onClick={() => handlePostOpen(post._id)}>
            <div className='flex items-center'>
              <img className="w-10 h-10 rounded-full" src={post.channel.image} />
              <h1 className='ml-5 font-semibold'>{post.channel.name}</h1>
            </div>
            <h1 className='font-semibold mt-3'>{post.title}</h1>
            <h1 className='mt-2'>{post.content}</h1>
            <img src={post.images[0]} className='mt-3 w-full' />
            <div>
              <div className="flex m-1">
                <div className="flex bg-gray-200 rounded-full">
                  <button  className="left-button post-button bg-second-color border-0 text-black p-2 flex items-center">
                    <img src={uparrow}  className="p-1 w-6 mr-2"/>
                    Upvote
                  </button>
                  <button  className="right-button post-button bg-second-color border-0 text-black p-1 flex items-center">
                    <img src={downarrow}  className="p-1 w-6 mr-2"/>
                  </button>
                </div>
                <button type="button" className="post-button post-button-bg border-0 rounded-circle text-black p-1 flex items-center">
                  <img src={comment} width="20" className="m-2"/>
                  1
                </button>
                <button type="button" className="post-button post-button-bg border-0 rounded-circle text-black p-1 flex items-center">
                  <img src={refresh} width="25" className="p-1 m-2"/>
                  123
                </button>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Rightbar