import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import quora from '../assets/Quora.jpg';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import { Notification } from './Notification';
import CreatePost from './CreatePost';
import { Icons, Post, Home, Spaces, Notify, Quora, Globe } from './Icons';
import { useUser } from './UserProvider';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Heroicons for menu icons
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Input,
    Tooltip,
} from "@material-tailwind/react";


const NavbarDefault = () => {
    const { theme } = useUser();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const postCardStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'gray',
        color: theme === 'light' ? 'black' : 'white',
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
            <Navbar className="mx-auto max-w-screen-xl lg:max-w-full fixed top-0 left-0 right-0 z-20 h-16" style={postCardStyle}>
                <div className="container mx-auto flex flex-wrap justify-center text-gray-900 mb-4 ml-32 gap-2">
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
                        <Link to="/home"><Tooltip title="Home"><Home /></Tooltip></Link>
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
                    <Link to="/ComingSoon">
                        <Typography
                            as="span"
                            className="mr-4 cursor-pointer font-medium"
                        >
                            <Notification />
                        </Typography>
                    </Link>

                    <div className="hidden items-center gap-x-2 lg:flex">
                        <div className="relative flex w-full md:w-max ">
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
                            <div class="!absolute left-3 top-[11px]">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm10.45 2.95L16 16l4.95 4.95Z" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <Typography

                                className=" ml-3 h-10 cursor-pointer py-1.5 font-medium text-sm border border-spacing-lg rounded-full flex items-center roun "
                            >
                                <Tooltip title="Delete">
                                    <Subscription />
                                </Tooltip>
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="mr-3 cursor-pointer  font-medium rounded-full"
                            >
                                <ProfileMenu />
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="mr-3 cursor-pointer font-medium"
                            >
                                <LanguageMenu />
                            </Typography>
                            <Typography
                                className="mr-4 cursor-pointer font-medium"
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
                    <div className="container mx-auto p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
                            <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
                                <img
                                    src={quora}
                                    className="w-24 h-7 cursor-pointer"
                                    onClick={() => navigate('/home')}
                                    alt="Quora"
                                />
                                <div className="sm:hidden">
                                    <ProfileMenu />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 w-full sm:w-auto">
                                <Link to="/home">
                                    <Home />
                                </Link>
                                <Link to="/ComingSoon">
                                    <Post />
                                </Link>
                                <Link to="/Answers">
                                    <Icons />
                                </Link>
                                <Link to="/ComingSoon">
                                    <Spaces />
                                </Link>
                                <Link to="/ComingSoon">
                                    <Notification />
                                </Link>
                                <div className="hidden items-center gap-2">
                                    <Input
                                        type="search"
                                        placeholder="Search Quora"
                                        value={query}
                                        onChange={handleSearch}
                                        containerProps={{
                                            className: "min-w-[288px]",
                                        }}
                                        className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <div className="flex items-center gap-2">
                                        <Subscription />
                                        <ProfileMenu />
                                        <LanguageMenu />
                                        <h1 className="bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9">
                                            <CreatePost />
                                        </h1>
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


