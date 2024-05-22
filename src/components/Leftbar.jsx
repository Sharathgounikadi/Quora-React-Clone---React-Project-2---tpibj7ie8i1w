import React, { useState,useEffect } from 'react';
import axios from 'axios';
import cooking from "../assets/Cooking.jpg"
import CreateSpace from './CreateSpace'
import { useNavigate } from 'react-router-dom'
const Leftbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const [communities, setCommunities]=useState([])
    const fetchCommunities = async () => {
        try {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/quora/channel/?limit=10', {
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
        <div className='pl-20 mt-20 ml-5 text-sm fixed'>
            <div className='flex mt-2 bg-gray-200 pl-1 pr-2 pt-1 pb-1'>
                <div className='rounded-sm p-1 bg-gray cursor-pointer'>+</div>
                <button className='ml-1 cursor-pointer'><CreateSpace /></button>
            </div>
            {communities.map((comm,idx) => {
                return (
                    <div className='flex mt-5 cursor-pointer' key={idx}>
                        <img src={cooking} className='w-4 h-4 rounded-sm' />
                        <p className='ml-3 text-gray-500' onClick={() => navigate('/ComingSoon')} >{comm.name}</p>
                    </div>)
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