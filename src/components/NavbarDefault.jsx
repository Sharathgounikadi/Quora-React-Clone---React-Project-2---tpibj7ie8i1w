import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import quora from '../assets/Quora.jpg';
import home from '../assets/Home.jpg';
import group from '../assets/Groups.svg';
import search from '../assets/Search.jpg';
import globe from '../assets/Globe.jpg';
import edit from '../assets/Edit.jpg';
import bell from '../assets/Bell.jpg';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import { Notification } from './Notification';
import CreatePost from './CreatePost';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Existing nav items */}
      <Typography as="li" variant="small" color="blue-gray" className="flex items-center gap-x-2 p-1 font-medium">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5C4 1.76522 4.10536 2.01957 4.29289 2.20711C4.48043 2.39464 4.73478 2.5 5 2.5H11C11.2652 2.5 11.5196 2.39464 11.7071 2.20711C11.8946 2.01957 12 1.76522 12 1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H5ZM2 4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H13C13.2652 3.5 13.5196 3.60536 13.7071 3.79289C13.8946 3.98043 14 4.23478 14 4.5C14 4.76522 13.8946 5.01957 13.7071 5.20711C13.5196 5.39464 13.2652 5.5 13 5.5H3C2.73478 5.5 2.48043 5.39464 2.29289 5.20711C2.10536 5.01957 2 4.76522 2 4.5ZM0 8.5C0 7.96957 0.210714 7.46086 0.585786 7.08579C0.960859 6.71071 1.46957 6.5 2 6.5H14C14.5304 6.5 15.0391 6.71071 15.4142 7.08579C15.7893 7.46086 16 7.96957 16 8.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V8.5Z" fill="#90A4AE"/>
        </svg>
        <a href="#" className="flex items-center">Pages</a>
      </Typography>
      {/* Add other nav items as needed */}
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            Material Tailwind
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
              <span>Sign in</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>

      {/* Additional Navbar Content */}
      <div className='fixed flex z-10 bg-white pl-20 pt-4 shadow-md h-14 w-full sm:w-64 md:w-80 lg:w-full'>
        <div className='flex mx-auto gap-2 w-full sm:w-2/4 md:w-3/4 lg:w-2/4 xl:w-3/4'>
          <img src={quora} className='w-24 h-7 cursor-pointer' onClick={() => navigate('/home')} alt="Quora" />
          <img src={home} className='w-7 h-7 ml-10 cursor-pointer' onClick={() => navigate('/home')} alt="Home" />
          <img src={group} className='w-6 h-6 ml-8 cursor-pointer' onClick={nav} alt="Group" />
          <div className='relative w-full ml-8'>
            <input 
              className='w-full py-2 px-4 text-xs border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='text'
              placeholder='Search Quora'
              value={query}
              onChange={handleSearch}
            />
            {query && searchResults.length > 0 && (
              <ul className="absolute bg-white border rounded-lg shadow-lg w-full max-h-60 overflow-auto mt-2">
                {searchResults.map((result, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {result.content}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <img src={search} className='w-5 h-5 absolute right-3 top-3' alt="Search" />
        </div>

        <div className='hidden sm:flex ml-4 gap-2'>
          <img src={globe} className='w-6 h-6 cursor-pointer' alt="Globe" />
          <img src={edit} className='w-6 h-6 cursor-pointer' alt="Edit" />
          <img src={bell} className='w-6 h-6 cursor-pointer' alt="Bell" />
        </div>
        
        <div className='flex items-center gap-2 ml-4'>
          <ProfileMenu />
          <LanguageMenu />
          <Subscription />
          <Notification />
          <CreatePost />
        </div>
      </div>
    </div>
  );
}
