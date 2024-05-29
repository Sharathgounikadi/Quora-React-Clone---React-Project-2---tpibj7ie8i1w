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

const Rightbar = () => {
  const { theme } = useUser();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

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
      return response.data;
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      return [];
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
      <div className='mx-auto'>
        <div className='mt-20 rounded-sm'>
          <div className='p-2 h-20 border border-spacing-1' style={colour}>
            <div className='flex'>
              <Avatar round size="25" className="mt-0.5 ml-2" name="w" />
              <input
                placeholder='What do you want to ask for share?'
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
            {/* PostCard */}
            {posts.map((post, index) => {
              return (
                <div className='mt-2 p-2 border' key={index} style={postCardStyle}>
                  <div className='flex items-center'>
                    <img className="w-10 h-10 rounded-full" src={post.channel?.image} alt="Channel" />
                    <h1 className='ml-5 font-semibold'>{post.channel?.name}</h1>
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
