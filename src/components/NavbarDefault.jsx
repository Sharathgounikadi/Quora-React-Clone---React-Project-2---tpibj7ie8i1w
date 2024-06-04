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
    div,
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

    const postCardStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'gray',
        color: theme === 'light' ? 'black' : 'white',
        // borderColor: theme === 'light' ? '#ddd' : '#444'
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
            <div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 clr-gray fixed top-0 left-0 right-0 z-50" style={postCardStyle}>
                <div className="container mx-auto flex flex-wrap items-center justify-between text-gray-900">
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
            </div>
        </>
    );
};

export default NavbarDefault;

