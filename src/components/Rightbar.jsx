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
import {
  Navbar
}from "@material-tailwind/react";

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
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleFollow = async (userId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`https://academics.newtonschool.co/api/v1/quora/follow/${userId}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectID': 'tpibj7ie8i1w'
        }
      });
      setFollowing(prev => ({ ...prev, [userId]: true }));
      toast.success('User followed successfully');
    } catch (error) {
      console.error('Failed to follow user:', error);
      toast.error('Failed to follow user');
    }
  };

  const handleUnfollow = async (userId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`https://academics.newtonschool.co/api/v1/quora/follow/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectID': 'tpibj7ie8i1w'
        }
      });
      setFollowing(prev => ({ ...prev, [userId]: false }));
      toast.success('User unfollowed successfully');
    } catch (error) {
      console.error('Failed to unfollow user:', error);
      toast.error('Failed to unfollow user');
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
      {/* <ToastContainer /> */}
      <div className='mx-auto w-full sm:w-64 md:w-80 lg:w-full '>
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
            <div className='flex pt-2'>
              <div className='ml-16 flex'>
                <img src={question} className='w-5 h-5' />
                <h1 className='ml-2'><CreatePost /></h1>
              </div>
              <h1 className='ml-20'>|</h1>
              <div className='ml-16 flex'>
                <img src={edit} className='w-5 h-5' />
                <h1 className='ml-2' onClick={() => navigate('/ComingSoon')}>Answer</h1>
              </div>
              <h1 className='ml-20'>|</h1>
              <div className='ml-16 flex'>
                <img src={pen} className='w-5 h-5' />
                <Link className='ml-2' to="/ComingSoon">Post</Link>
              </div>
            </div>
          </div>
          <div>
            {posts.map((post, index) => {
              if (!post || !post.channel) {
                // Ensure post and post.channel are defined before accessing their properties
                return null;
              }
              let channel = post.channel;
              let isFollowing = following[channel._id] || false;
              return (
                <div className='mt-2 p-2 border' key={index} style={postCardStyle}>
                  <div className='flex items-center'>
                    {channel.image && <img className="w-10 h-10 rounded-full" src={channel.image} alt="Channel" />}
                    <div className='flex gap-1'>
                      <h1 className='ml-5 font-semibold'>{channel.name || 'Unknown Channel'}</h1>
                      {channel._id && (
                        <div 
                          className="q-text qu-dynamicFontSize--small qu-medium text-blue-500 cursor-pointer" 
                          style={{ boxSizing: 'border-box' }}
                          onClick={() => isFollowing ? handleUnfollow(channel._id) : handleFollow(channel._id)}
                        >
                          {isFollowing ? 'Unfollow' : 'Follow'}
                        </div>
                      )}
                    </div>
                  </div>
                  <h1 className='font-semibold mt-3 cursor-pointer' onClick={() => handlePostOpen(post._id)}>{post?.title}</h1>
                  <h1 className='mt-2'>{post?.content}</h1>
                  {post.images && post.images[0] && (
                    <img src={post.images[0]} className='mt-3 w-full' alt="Post"/>
                  )}
                  <GetComments postId={post?._id}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
