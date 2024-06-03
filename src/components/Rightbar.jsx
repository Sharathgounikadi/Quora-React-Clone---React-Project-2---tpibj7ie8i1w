import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import question from '../assets/Question.jpg';
import pen from '../assets/Pen.jpg';
import edit from '../assets/Edit.jpg';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import GetComments from './GetComments';
import CreatePost from './CreatePost';
import { useUser } from './UserProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Ask, Answer, PostImage } from './Icons';
import {
  Navbar
} from "@material-tailwind/react";

const Rightbar = () => {
  const { theme } = useUser();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [following, setFollowing] = useState({});

  const colour = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white'
  };

  const inputStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#333',
    color: theme === 'light' ? 'black' : 'white',
  };

  const postCardStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#333',
    color: theme === 'light' ? 'black' : 'white',
    borderColor: theme === 'light' ? '#ddd' : '#444'
  };

  const fetchPosts = async () => {
    const dataUser = localStorage.getItem("token");
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/quora/post?limit=10', {
        headers: {
          'projectID': 'tpibj7ie8i1w',
          'Authorization': `Bearer ${dataUser}`
        }
      });
      setPosts(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostOpen = (postId) => {
    navigate(`/question/${postId}`);
  };

  return (
    <>
      <div className='mx-auto '>
        <div className='mt-20 rounded-sm'>
          <div className='p-2 h-20 border border-spacing-1' style={colour}>
            <div className='flex'>
              <Avatar round size="25" className="mt-0.5 ml-2" name="w" />
              <input
                placeholder='What do you want to ask or share?'
                className='p-1 ml-4 placeholder-gray-600 border border-spacing-1 rounded-full w-full'
                style={inputStyle}
              />
            </div>
            <div className='flex items-center gap-5 p-2 '>
              <div className='flex items-center'>
                {/* <img src={question} className='w-5 h-5' /> */}
                <Ask />
                <h1 className='flex items-center'><CreatePost /></h1>
              </div>
              <h1 className=''>|</h1>
              <div className=' flex'>
                {/* <img src={edit} className='w-5 h-5' /> */}
                <Answer />
                <h1 className='' onClick={() => navigate('/Answers')}>Answer</h1>
              </div>
              <h1 className=''>|</h1>
              <div className=' flex'>
                {/* <img src={pen} className='w-5 h-5' /> */}
                <PostImage />
                <Link className='' to="/ComingSoon">Post</Link>
              </div>
            </div>
          </div>
          <div>
            {posts.map((post, index) => {
              return (
                <div className='bg-white mt-2 p-2' key={index}  style={postCardStyle}>
                  <div className='flex items-center'>
                    <img className="w-10 h-10 rounded-full" src={post.channel?.image} />
                    <h1 className='ml-5 font-semibold'>{post.channel?.name}</h1>
                  </div>
                  <h1 className='font-semibold mt-3 hover:bottom-3 cursor-pointer' onClick={() => handlePostOpen(post._id)}>{post?.title}</h1>
                  <h1 className='mt-2'>{post?.content}</h1>
                  <img src={post.images[0]} className='mt-3 w-full' />
                  <GetComments postId={post?._id} likeCount={post?.likeCount} commentCount={post?.commentCount}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
