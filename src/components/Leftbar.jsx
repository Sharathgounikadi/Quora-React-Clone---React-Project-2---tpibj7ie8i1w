import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cooking from "../assets/Cooking.jpg"
import CreateSpace from './CreateSpace'
import { useNavigate } from 'react-router-dom'
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
    const token = localStorage.getItem("token")
    const [communities, setCommunities] = useState([])

    const colour = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'gray' : 'white'
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
        <  >
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[10rem] shadow-xl shadow-blue-gray-900/5  bg-gray-400  fixed " style={colour}>
                <Typography variant="h5" p-1 text-md>+
                    <CreateSpace />
                </Typography>
                <List>
                    {communities.map((comm, idx) => {
                        return (
                            <ListItem key={idx}>
                                <ListItemPrefix>
                                    <img src={cooking} className="h-5 w-5" />
                                </ListItemPrefix>
                                {comm.name}
                            </ListItem>
                        )
                    })}
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

    )
}

export default Leftbar

