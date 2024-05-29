import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const GetComments = ({ postId }) => {
  const [toggleComments, setToggleComments] = useState(false);
  const [postComment, setPostComment] = useState("");
  const [count, setCount] = useState(3);
  const [data, setData] = useState([]);

  const countHandler = () => {
    setCount(prevCount => prevCount + 1);
  };

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'projectID': 'tpibj7ie8i1w',
      'Authorization': `Bearer ${token}`
    };

    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/quora/post/${postId}/comments`, { headers });
      setData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchData();
    }
  }, [postId]);

  const handleAddComment = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'projectID': 'tpibj7ie8i1w',
      'Authorization': `Bearer ${token}`
    };

    const body = {
      content: postComment
    };

    try {
      const response = await axios.post(`https://academics.newtonschool.co/api/v1/quora/comment/${postId}`, body, { headers });
      setData(prevData => [...prevData, response.data.data]);
      setPostComment(''); // Clear the input field
      toast.success('Comment added successfully');
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error('Error adding comment');
    }
  };

  const handleDeleteComment = async (id) => {
    const token = localStorage.getItem('token');
    const headers = {
      "projectID": 'tpibj7ie8i1w',
      'Authorization': `Bearer ${token}`
    };

    try {
      await axios.delete(`https://academics.newtonschool.co/api/v1/quora/comment/${id}`, { headers });
      setData(prevData => prevData.filter(comment => comment._id !== id));
      toast.success('Comment deleted successfully');
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast.error('Error deleting comment');
    }
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))?._id;
  // useEffect(()=>{

  // },[data])

  return (
    <>
     
      <div className="flex flex-col gap-2 sm:flex-row justify-between items-center p-3">
        <div className="flex flex-col items-center sm:flex-row gap-2">
          <div className="row flex">
            <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 
              disabled:shadow-none disabled:pointer-events-none text-xs px-4 rounded-lg border hover:opacity-75 focus:ring
              focus:ring-white/50 active:opacity-[0.85] rounded-r-none border-r-0 flex items-center border-gray-300
              dark:border-gray-700 capitalize h-6 text-gray-700 dark:text-gray-300 rounded-s-full py-4 gap-1"
              type="button" onClick={countHandler}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-blue-500">
                <path d="M12 4 3 15h6v5h6v-5h6z" className="icon_svg-stroke icon_svg-fill" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path>
              </svg>
              Upvote<span>&nbsp;•&nbsp;{count}</span>
            </button>
            <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 
              disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] max-h-[40px] rounded-lg text-xs border hover:opacity-75 
              focus:ring focus:ring-gray-300 active:opacity-[0.85] border-gray-300 dark:border-gray-700 h-6 text-gray-700
              dark:text-gray-300 rounded-e-full py-4" type="button">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-700 dark:stroke-gray-300">
                  <path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path>
                </svg>
              </span>
            </button>
          </div>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 
            disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg border hover:opacity-75 focus:ring 
            focus:ring-gray-300 active:opacity-[0.85] border-gray-300 dark:border-gray-700 flex items-center h-6 text-gray-700
            dark:text-gray-300 p-2 py-4" type="button" onClick={() => { setToggleComments(!toggleComments) }}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-700 dark:stroke-gray-300">
              <path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z"
                className="icon_svg-stroke icon_svg-fill" strokeWidth="1.5" fill="none"></path>
            </svg>
          </button>
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all
            disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] max-h-[40px] rounded-lg 
            text-xs border hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] border-gray-300 
            dark:border-gray-700 h-6 text-gray-700 dark:text-gray-300 py-4" type="button">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-700 dark:stroke-gray-300">
                <g className="icon_svg-stroke" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path>
                  <path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <button aria-expanded="false" aria-haspopup="menu" id=":r2bk:" className="relative align-middle select-none font-sans 
          font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
          w-10 max-w-[40px] max-h-[40px] rounded-lg text-xs border hover:opacity-75 focus:ring focus:ring-gray-300 
          active:opacity-[0.85] h-6 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-4" type="button">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
              <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd"></path>
            </svg>
          </span>
        </button>
      </div>
      {toggleComments &&
        <div className='flex flex-col'>
          <div className='flex'>
            <input type="text" value={postComment} className='border border-red-500' onChange={(e) => { setPostComment(e.target.value) }} />
            <button onClick={handleAddComment}>Add</button>
          </div>
          <div>
            {data?.map((comment, idx) => (
              <div key={idx} className='flex justify-between'>
                <div className='flex justify-between'>
                  <h1>{comment?.author_details?.name}</h1>
                  <h1>{comment?.content}</h1></div>
                {(userInfo === comment?.author_details?._id) && <div className='text-red-900 cursor-pointer' onClick={() => handleDeleteComment(comment?._id)}>DELETE</div>}
              </div>
            ))}
          </div>
        </div>}
    </>
  );
};

export default GetComments;
