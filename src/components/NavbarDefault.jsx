import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import { Notification } from './Notification';
import CreatePost from './CreatePost';
import { Icons, Post, Home, Spaces, } from './Icons';
import { useUser } from './UserProvider';
import quora from '../assets/Quora.jpg';
import {
    Navbar,
    Typography,
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
            <Navbar className="lg:mx-auto max-w-screen-xl lg:max-w-full fixed top-0 left-0 right-0 z-20 h-16 xs:flex xs:h-32 " style={postCardStyle}>
            <div className="container lg:mx-auto lg:flex flex-wrap justify-center text-gray-900 mb-4 lg:ml-32 lg:gap-2">
                <div className="lg:flex items-center">
                    <div className="relative flex w-full md:w-max xs:flex-wrap">
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium" >
                            <img src={quora} className="w-36 h-6 cursor-pointer xs:w-20" onClick={() => navigate('/home')} alt="Quora" />
                            {/* <Quora className="md:w-6 md:h-6 lg:w-7 lg:h-7 z-20 bg-blue-gray-200"/> */}
                        </Typography>
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                            <Link to="/home">
                                <Tooltip title="Home">
                                    <Home className="w-7 h-7 md:w-6 md:h-6 " />
                                </Tooltip>
                            </Link>
                        </Typography>
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                            <Link to="/ComingSoon">
                                <Post className="w-7 h-7 md:w-6 md:h-6 " />
                            </Link>
                        </Typography>
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                            <Link to="/Answers">
                                <Icons className="w-7 h-7 md:w-6 md:h-6 " />
                            </Link>
                        </Typography>
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                            <Link to="/ComingSoon">
                                <Spaces className="w-7 h-7 md:w-6 md:h-6 " />
                            </Link>
                        </Typography>
                        <Link to="/ComingSoon">
                            <Typography as="span" className="mr-4 cursor-pointer font-medium">
                                <Notification className="w-7 h-7 md:w-6 md:h-6 " />
                            </Typography>
                        </Link>
                        <Input
                            type="search"
                            placeholder="Search Quora"
                            value={query}
                            onChange={handleSearch}
                            containerProps={{
                                className: "lg:min-w-[288px] lg:h-[40px] xs:hidden",
                            }}
                            className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="!absolute ml-[300px] top-[11px]">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm10.45 2.95L16 16l4.95 4.95Z" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <Typography className="ml-3 h-10 cursor-pointer py-1.5 font-medium text-xs border border-spacing-lg rounded-full flex items-center">
                            <Tooltip title="Delete">
                                <Subscription />
                            </Tooltip>
                        </Typography>
                        <Typography as="a" href="#" className="mr-3 cursor-pointer font-medium rounded-full">
                            <ProfileMenu />
                        </Typography>
                        <Typography as="a" href="#" className="mr-3 cursor-pointer font-medium">
                            <LanguageMenu />
                        </Typography>
                        <Typography className="mr-4 cursor-pointer font-medium">
                            <h1 className="bg-red-800 rounded-full text-xs text-white w-36 pl-6 ml-5 pt-2 h-9">
                                <CreatePost />
                            </h1>
                        </Typography>
                        {query && searchResults.length > 0 && (
                            <div className="absolute top-12 left-44 bg-white shadow-lg rounded-lg mt-2 p-4 max-h-72 overflow-scroll">
                                {searchResults.map((result, index) => (
                                    <div key={index} className="p-2 border-b last:border-b-0">
                                        <h2 className="font-bold">{result?.title}</h2>
                                        <p>{result?.content.length > 90 ? `${result.content.slice(0, 90)}...` : result.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Navbar>

        </>
    );
};

export default NavbarDefault;


