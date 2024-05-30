
import {
  Navbar,
  NavbarContainer,
  NavbarWrapper,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarList,
  NavbarItem,
  NavbarLink,
  IconButton,
  Input,
  Avatar,
} from "@material-tailwind/react";
import { MenuIcon } from "@heroicons/react/outline";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import quora from '../assets/Quora.jpg';
import home from '../assets/Home.jpg';
import search from '../assets/Search.jpg';
import globe from '../assets/Globe.jpg';
import edit from '../assets/Edit.jpg';
import bell from '../assets/Bell.jpg';
import group from '../assets/Groups.svg';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import { Notification } from './Notification';
import CreatePost from './CreatePost';

const ResponsiveNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Perform search logic here and update searchResults
  };

  return (
    <Navbar className="fixed top-0 z-10 bg-white shadow-md w-full">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <img src={quora} className='w-24 h-7 cursor-pointer' onClick={() => navigate('/home')} alt="Quora" />
          </NavbarBrand>
          <div className="flex gap-2 items-center ml-auto lg:hidden">
            <IconButton
              variant="text"
              className="text-gray-700"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              <MenuIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <NavbarCollapse open={openNav}>
            <NavbarList className="lg:flex lg:items-center lg:gap-4 lg:ml-auto">
              <NavbarItem>
                <NavbarLink href="/home">
                  <img src={home} className='w-7 h-7' alt="Home" />
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="/Answers">
                  <img src={group} className='w-7 h-7' alt="Group" />
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="#" >
                  <img src={edit} className='w-7 h-7' alt="Edit" />
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <div className='w-7 h-7'><Notification /></div>
              </NavbarItem>
              <NavbarItem>
                <Input
                  variant="outlined"
                  className='ml-5 w-50 h-8 border border-spacing-1 rounded-lg'
                  placeholder='Search Quora'
                  value={query}
                  onChange={handleSearch}
                />
              </NavbarItem>
              <NavbarItem>
                <h1 className='text-sm border border-spacing-1 rounded-full p-2 ml-5 h-9'>
                  <Subscription />
                </h1>
              </NavbarItem>
              <NavbarItem>
                <ProfileMenu />
              </NavbarItem>
              <NavbarItem>
                <LanguageMenu />
              </NavbarItem>
              <NavbarItem>
                <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9'>
                  <CreatePost />
                </h1>
              </NavbarItem>
            </NavbarList>
          </NavbarCollapse>
        </NavbarWrapper>
      </NavbarContainer>
      {query && searchResults.length > 0 && (
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg mt-2 p-4 max-h-72 overflow-scroll">
          {searchResults.map((result, index) => (
            <div key={index} className="p-2 border-b last:border-b-0">
              <h2 className='font-bold'>{result?.title}</h2>
              <p>{result?.content.length > 90 ? `${result.content.slice(0, 90)}...` : result.content}</p>
            </div>
          ))}
        </div>
      )}
    </Navbar>
  );
};

export default ResponsiveNavbar;
