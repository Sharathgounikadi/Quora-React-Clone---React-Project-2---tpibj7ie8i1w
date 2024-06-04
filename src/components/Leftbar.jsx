import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cooking from "../assets/Cooking.jpg";
import CreateSpace from './CreateSpace';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider';
import {
    Card,
    Typography,
    List,
    ListItem,
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
        // borderColor: theme === 'light' ? '#ddd' : '#444'
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
            <Card className="h-[calc(100vh-15rem)] w-full max-w-[15rem]  p-5 clr-gray fixed top-24 ml-44" style={postCardStyle}>
                <Typography variant="h5" p-1 text-md className='text-black'>+
                    <CreateSpace />
                </Typography>
                <List>
                    {communities.map((comm, idx) => (
                        <ListItem key={idx}>
                            <ListItemPrefix>
                                <img src={cooking} className="h-5 w-5" />
                            </ListItemPrefix>
                            {comm.name}
                        </ListItem>
                    ))}
                </List>
                <div>
                    <hr className='mt-3' />
                    <h1 className='mt-3 text-gray-400 text-sm'>About . Careers .</h1>
                    <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
                    <h1 className=' text-gray-400 text-sm'>Acceptable Use</h1>
                    <h1 className=' text-gray-400 text-sm'>Terms . Privacy .</h1>
                </div>
            </Card>
        </>
    );
}

export default Leftbar;
