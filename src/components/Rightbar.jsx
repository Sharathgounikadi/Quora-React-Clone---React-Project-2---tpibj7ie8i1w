import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import GetComments from './GetComments';
import CreatePost from './CreatePost';
import { useUser } from './UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import { Ask, Answer, PostImage } from './Icons';


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
      <div className='mx-auto'>
        <div className='mt-2.5 rounded-sm '>
          <div className='p-2 h-20 border border-spacing-1' style={colour}>
            <div className='flex'>
              <Avatar round size="25" className="mt-0.5 ml-2" name="w" />
              <input
                placeholder='What do you want to ask or share?'
                className='p-1 ml-4 placeholder-gray-600 border border-spacing-1 rounded-full w-full'
                style={inputStyle}
              />
            </div>
            <div className='flex items-center gap-10 p-2 '>
              <div className='flex items-center'>
                <Ask />
                <h1 className='flex items-center'><CreatePost /></h1>
              </div>
              <h1 className=''>|</h1>
              <div className=' flex'>
                <Answer />
                <h1 className='' onClick={() => navigate('/Answers')}>Answer</h1>
              </div>
              <h1 className=''>|</h1>
              <div className=' flex'>
                <PostImage />
                <Link className='' to="/ComingSoon">Post</Link>
              </div>
            </div>
          </div>
          <div>
            {posts.map((post, index) => {
              const authorInitial = post.author?.name ? post.author?.name.charAt(0).toUpperCase() : '';
              return (
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl xl:w-[40rem] lg:w-[40rem] md:w-[26rem] w-full" key={index} style={postCardStyle}>
                  <div className='flex items-center p-2'>
                    {post.channel?.image ? (
                      <img className="w-8 h-8 rounded-full" src={post.channel?.image} />
                    ) : (
                      <Avatar round size="25" className="mt-0.5 ml-2" name={authorInitial} />
                    )}
                    <h1 className='ml-5 font-semibold'>{post.author?.name}</h1>
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-black" onClick={handlePostOpen}>
                      {post?.title}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      {post?.content}
                    </p>
                  </div>
                  {post.images.length > 0 ? (
                    <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-sm bg-blue-gray-500 shadow-blue-gray-500/40">
                      <img
                        src={post.images[0]}
                        alt="card-image"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <GetComments postId={post?._id} likeCount={post?.likeCount} commentCount={post?.commentCount} />
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
