import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cooking from "../assets/Cooking.jpg";
import CreateSpace from './CreateSpace';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider';
import {
    div,
    Typography,
    List,
    // div,
    ListItemPrefix,
} from "@material-tailwind/react";

const Leftbar = () => {
    const { theme } = useUser();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [communities, setCommunities] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const postCardStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'gray',
        color: theme === 'light' ? 'black' : 'white',
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
            setCommunities(data.data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    useEffect(() => {
        fetchCommunities();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth < 1024) { // Adjust this value based on the Tailwind CSS breakpoint you want to use
        return null;
    }

    return (
        <>
            <div className="h-[calc(100vh-10rem)] max-w-[8rem]  clr-gray fixed top-20 ml-80 " style={postCardStyle}>
                <Typography variant="h5" p-1 className='text-black'>  
                    <CreateSpace />
                </Typography>
                <List>
                    {communities.map((comm, idx) => (
                        <div key={idx} className='text-sm hover:bg-gray-300 hover:rounded-md p-2 flex gap-2 w-32'>
                            {/* <ListItemPrefix className='flex gap-2 items-center'> */}
                                <img src={cooking} className="h-4 w-4" />
                               <div className='break-words'>{comm.name}</div> 
                            {/* </ListItemPrefix> */}
                            
                        </div>
                    ))}
                </List>
                <div>
                    <hr className='mt-3' />
                    <h1 className='mt-3 text-gray-500 text-sm'>About . Careers .</h1>
                    <h1 className=' text-gray-500 text-sm'>Terms . Privacy .</h1>
                    <h1 className=' text-gray-500 text-sm'>Acceptable Use</h1>
                    <h1 className=' text-gray-500 text-sm'>Terms . Privacy .</h1>
                </div>
            </div>
        </>
    );
}

export default Leftbar;
