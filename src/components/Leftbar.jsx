import React, { useState,useEffect } from 'react';
import axios from 'axios';
import cooking from "../assets/Cooking.jpg"
import CreateSpace from './CreateSpace'
import { useNavigate } from 'react-router-dom'
import { useUser } from './UserProvider';
import {
    Typography 
}from "@material-tailwind/react";

const Leftbar = () => {
    const { theme } = useUser();
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const [communities, setCommunities]=useState([])

    const colour = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      };

    const fetchCommunities = async () => {
        try {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/quora/channel/?limit=6', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': 'tpibj7ie8i1w',
                }
            });
            const data = res.data;
            setCommunities(data.data)
            console.log("data", data.data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };
    useEffect(() => {
        fetchCommunities()
    }, [])
    return (
        
        <div className='pl-12 mt-20 text-sm fixed w-42 sm:w-15 md:w-30'style={colour} >
            <div className='flex mt-2 bg-gray-300 pl-1 pr-1 pt-1 pb-1 rounded-lg'>
                <div className='rounded-sm p-1 bg-gray cursor-pointer hover:bg-gray-300'>+</div>
                <button className='ml-1 cursor-pointer text-center hover:bg-gray-300'><CreateSpace /></button>
            </div>
            {communities.map((comm,idx) => {
                return (
                    <Typography  >
                    <div className='flex mt-5 cursor-pointer hover:bg-gray-300 items-center rounded-md mx-auto p-0.5' key={idx}>
                        <img src={cooking} className='w-4 h-4 rounded-sm' />
                        <p className='ml-1  cursor-pointer  color: rgb(40, 40, 41) rounded-sm pl-1 pr-1' onClick={() => navigate('/ComingSoon')} >{comm.name}</p>
                    </div>
                    </Typography>
                )
            })}
            
            <hr className='mt-3' />
            <h1 className='mt-3 text-gray-400 text-sm'>About . Careers .</h1>
            <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
            <h1 className=' text-gray-400 text-sm'>Acceptable Use</h1>
            <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
        </div>
        
    )
}

export default Leftbar