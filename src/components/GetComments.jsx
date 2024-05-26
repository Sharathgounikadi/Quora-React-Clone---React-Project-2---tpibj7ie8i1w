import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import comment from '../assets/Comment.jpg'
import refresh from '../assets/Refresh.jpg'
import uparrow from '../assets/Uparrow.jpg'
import downarrow from '../assets/Downarrow.jpg'

const GetComments = () => {
//   const [getComment,setComments]=useState('');
//     const params=useParams();
//   console.log(params)
//   const [data,setData]=useState({});
//   // Fetch data from the API
//   const fetchData = async () => {
//     // Define the headers
//     const token=localStorage.getItem('token');
//     const headers = {
//         'projectID': 'tpibj7ie8i1w',
//         'Authorization': `Bearer ${token}`
//     };

//     try {
//         // Make the API call using Axios
//         const response = await axios.get(`https://academics.newtonschool.co/api/v1/quora/post/${params.id}/comments`, { headers });
        
//         // Set the data from the response
//         setData(response.data);
//         console.log(response.data)
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// // Use the useEffect hook to fetch data when the component mounts
// useEffect(() => {
//     fetchData();
// }, []);

  return (
      <div>
        <div className="flex m-1">
          <div className="flex bg-gray-200 rounded-full">
            <button className="left-button post-button bg-second-color border-0 text-black p-2 flex items-center">
              <img src={uparrow} className="p-1 w-6 mr-2" />
              Upvote
            </button>
            <button className="right-button post-button bg-second-color border-0 text-black p-1 flex items-center">
              <img src={downarrow} className="p-1 w-6 mr-2" />
            </button>
          </div>
          <button type="button" className="post-button post-button-bg border-0 rounded-circle text-black p-1 flex items-center">
            <img src={comment} width="20" className="m-2" />
            1
          </button>
          <button type="button" className="post-button post-button-bg border-0 rounded-circle text-black p-1 flex items-center">
            <img src={refresh} width="25" className="p-1 m-2" />
            123
          </button>
        </div>
    </div>
  )
}

export default GetComments