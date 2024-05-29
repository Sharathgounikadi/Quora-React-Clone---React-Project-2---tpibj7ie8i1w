import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import quora from '../assets/Quora.jpg';
import home from '../assets/Home.jpg';
// import search from '../assets/Search.jpg';
// import globe from '../assets/Globe.jpg';
import edit from '../assets/Edit.jpg';
import bell from '../assets/Bell.jpg';
import group from '../assets/Group.jpg';
// import account from '../assets/Account.jpg';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import { Notification } from './Notification';
import CreatePost from './CreatePost';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm?.length > 2) {
      try {
        const response = await axios.get(`https://academics.newtonschool.co/api/v1/quora/post?search={"content":"${searchTerm}"}`, {
          headers: {
            'projectID': 'YOUR_PROJECT_ID'
          }
        });
        setSearchResults(response.data.data);
        // console.log(searchResults)
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const nav = () => {
    navigate('/ComingSoon');
  };

  return (
    <div className='fixed flex z-10 bg-white pl-20 pt-4 shadow-md h-14 w-full'>

      <div className='flex mx-auto gap-5'>
      <Tooltip title="Quora" arrow>
        <img
          src={quora}
          className='w-24 h-7 cursor-pointer'
          onClick={() => navigate('/home')}
          alt="Quora"
        />
      </Tooltip>

      <Tooltip title="Home" arrow>
        <img
          src={home}
          className='w-7 h-7 ml-10 cursor-pointer'
          onClick={() => navigate('/home')}
          alt="Home"
        />
      </Tooltip>

      <Tooltip title="Group" arrow>
        <img
          src={group}
          className='w-7 h-7 ml-10 cursor-pointer'
          onClick={nav}
          alt="Group"
        />
      </Tooltip>

      <Tooltip title="Edit" arrow>
        <img
          src={edit}
          className='w-7 h-7 ml-10 cursor-pointer'
          onClick={nav}
          alt="Edit"
        />
      </Tooltip>

      <Tooltip title="Notifications" arrow>
        <div className='w-7 h-7 ml-10'>
          <Notification />
        </div>
      </Tooltip>
        <input
          className='ml-5 w-50 h-8 border border-spacing-1 rounded-lg'
          placeholder='Search Quora'
          value={query}
          onChange={handleSearch}
        />
        <h1 className='text-sm border border-spacing-1 rounded-full p-2 ml-5 h-9'><Subscription /></h1>
        <div><ProfileMenu /></div>
        <div><LanguageMenu /></div>
        <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9' ><CreatePost /></h1>
        {query && searchResults.length > 0 && (
          <div className="absolute top-12 left-44 bg-white shadow-lg rounded-lg mt-2 p-4 max-h-72 overflow-scroll">
            {searchResults.map((result, index) => (
              <div key={index} className="p-2 border-b last:border-b-0 ">
                <h2 className='font-bold'>{result?.title}</h2>
                <p>{result?.content.length > 90 ? `${result.content.slice(0, 90)}...` : result.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
