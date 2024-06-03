import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import quora from '../assets/Quora.jpg';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import { Notification } from './Notification';
import CreatePost from './CreatePost';
import { Icons, Post, Home, Spaces, Notify, Quora } from './Icons';
import { useUser } from './UserProvider';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Input,
} from "@material-tailwind/react";


const NavbarDefault = () => {
    const { theme } = useUser();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const colour = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
    };

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
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
        <>
            <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 clr-gray" style={colour}>
                <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img src={quora} className='w-24 h-7 cursor-pointer' onClick={() => navigate('/home')} alt="Quora" />
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/home"><Home /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/ComingSoon"><Post /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/Answers"><Icons /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/ComingSoon"><Spaces /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/ComingSoon" ><Notification /></Link>
                    </Typography>

                    <div className="hidden items-center gap-x-2 lg:flex">
                        <div className="relative flex w-full gap-2 md:w-max">
                            <Input
                                type="search"
                                placeholder='Search Quora'
                                value={query}
                                onChange={handleSearch}
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography

                                className="mr-4 cursor-pointer py-1.5 font-medium text-sm border border-spacing-md rounded-xl w-20"
                            >
                                <Subscription />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="mr-4 cursor-pointer py-1.5 font-medium"
                            >
                                <ProfileMenu />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="mr-4 cursor-pointer py-1.5 font-medium"
                            >
                                <LanguageMenu />
                            </Typography>
                            <Typography
                                className="mr-4 cursor-pointer py-1.5 font-medium"
                            >
                                <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9' ><CreatePost /></h1>
                            </Typography>
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
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
                        <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img src={quora} className='w-24 h-7 cursor-pointer' onClick={() => navigate('/home')} alt="Quora" />
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/home"><Home /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/ComingSoon"><Post /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/Answers"><Icons /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/ComingSoon"><Spaces /></Link>
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="/ComingSoon" ><Notification /></Link>
                    </Typography>

                    <div className="hidden items-center gap-x-2 lg:flex">
                        <div className="relative flex w-full gap-2 md:w-max">
                            <Input
                                type="search"
                                placeholder='Search Quora'
                                value={query}
                                onChange={handleSearch}
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography

                                className="mr-4 cursor-pointer py-1.5 font-medium text-sm border border-spacing-md rounded-xl w-20"
                            >
                                <Subscription />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="mr-4 cursor-pointer py-1.5 font-medium"
                            >
                                <ProfileMenu />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="mr-4 cursor-pointer py-1.5 font-medium"
                            >
                                <LanguageMenu />
                            </Typography>
                            <Typography
                                className="mr-4 cursor-pointer py-1.5 font-medium"
                            >
                                <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9' ><CreatePost /></h1>
                            </Typography>
                            <div className="relative w-full gap-2 md:w-max">
                            <Input
                                type="search"
                                placeholder='Search Quora'
                                value={query}
                                onChange={handleSearch}
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                </MobileNav>
            </Navbar>
         

        </>
    );
};

export default NavbarDefault;


{/* <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
              <svg
                width="13"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"
                />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <Button size="md" className="rounded-lg ">
            Search
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Button size="md" className="mt-1 rounded-lg sm:mt-0">
              Search
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar> */}