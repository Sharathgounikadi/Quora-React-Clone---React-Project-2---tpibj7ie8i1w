import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import axios from 'axios';
import GetComments from './GetComments';
import CreatePost from './CreatePost';
import { useUser } from './UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import { Ask, Answer, PostImage } from './Icons';
import AddPost from './AddPost';

const SearchResults = ({ searchResults }) => {
  const { theme } = useUser();
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
    
  const colour = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white'
  };

  const inputStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#333',
    color: theme === 'light' ? 'black' : 'white',
  };

  const postCardStyle = {
    backgroundColor: theme === 'light' ? 'white' : 'gray',
    color: theme === 'light' ? 'black' : 'white',
  };

  const fetchPosts = async () => {
    const dataUser = localStorage.getItem("token");
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/quora/post?limit=100', {
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

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className='mx-auto '>
        <div className='mt-2.5 rounded-sm md:left-96'>
          <div>
            {searchResults.length > 0 ? searchResults.map((post, index) => {
              const authorInitial = post.author?.name ? post.author?.name.charAt(0).toUpperCase() : '';
              return (
                <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-sm xl:w-[38rem] lg:w-[30rem] md:w-[26rem] sm:w-[22rem] w-full" key={index} style={postCardStyle}>
                  <div className='flex items-center p-2'>
                    {post.channel?.image ? (
                      <img className="w-8 h-8 rounded-full" src={post.channel?.image} />
                    ) : (
                      <Avatar round size="25" className="mt-0.5 ml-2" name={authorInitial} />
                    )}
                    <h1 className='ml-5 font-semibold'>{post.author?.name}</h1>
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-black" >
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
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <GetComments postId={post?._id} likeCount={post?.likeCount} commentCount={post?.commentCount} postTitle={post?.title} postContent={post?.content} postImage={post.images[0]} />
                </div>
              )
            }) : posts.map((post, index) => {
              const authorInitial = post.author?.name ? post.author?.name.charAt(0).toUpperCase() : '';
              return (
                <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-sm xl:w-[38rem] lg:w-[30rem] md:w-[26rem] sm:w-[22rem] w-full" key={index} style={postCardStyle}>
                  <div className='flex items-center p-2'>
                    {post.channel?.image ? (
                      <img className="w-8 h-8 rounded-full" src={post.channel?.image} />
                    ) : (
                      <Avatar round size="25" className="mt-0.5 ml-2" name={authorInitial} />
                    )}
                    <h1 className='ml-5 font-semibold'>{post.author?.name}</h1>
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-black" >
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
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <GetComments postId={post?._id} likeCount={post?.likeCount} commentCount={post?.commentCount} postTitle={post?.title} postContent={post?.content} postImage={post.images[0]} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
