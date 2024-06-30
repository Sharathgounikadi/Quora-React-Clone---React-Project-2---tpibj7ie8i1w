import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useUser } from './UserProvider';
import NavbarDefault from './NavbarDefault';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SpaceList = () => {
  const { theme } = useUser();
  const [communities, setCommunities] = useState([]);
  const token = localStorage.getItem("token");

  const fetchCommunities = async () => {
    try {
      const res = await axios.get('https://academics.newtonschool.co/api/v1/quora/channel/?limit=100', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectID': 'tpibj7ie8i1w',
        }
      });
      const data = res.data;
      // Shuffle the communities array to render random spaces
      setCommunities(data.data.sort(() => 0.5 - Math.random()));
      console.log(communities)
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchCommunities();
  }, []);

  const handleFollow = async (channelId) => {
    try {
      const res = await axios.post(`https://academics.newtonschool.co/api/v1/quora/channels/${channelId}/follow`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectID': 'tpibj7ie8i1w',
        }
      });
      console.log("Followed successfully:", res.data);
    } catch (error) {
      console.error("Error following channel:", error.message);
    }
  };

  const handleUnfollow = async (channelId) => {
    try {
      const res = await axios.delete(`https://academics.newtonschool.co/api/v1/quora/channels/${channelId}/unfollow`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectID': 'tpibj7ie8i1w',
        }
      });
      console.log("Unfollowed successfully:", res.data);
    } catch (error) {
      console.error("Error unfollowing channel:", error.message);
    }
  };

  const toggleFollow = (channelId, isFollowing) => {
    if (isFollowing) {
      handleUnfollow(channelId);
    } else {
      handleFollow(channelId);
    }
  };

  const cardStyle = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };

  const renderFollowButton = (channelId, isFollowing) => {
    if (isFollowing) {
      return (
        <button onClick={() => toggleFollow(channelId, true)} className="follow-button">
          Unfollow
        </button>
      );
    } else {
      return (
        <button onClick={() => toggleFollow(channelId, false)} className="follow-button">
          Follow
        </button>
      );
    }
  };

  return (
    <>
      <NavbarDefault />
      <div className="" style={cardStyle}>
        <div className="flex items-center">
          <div className='font-bold'>Discover Spaces</div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {communities.map((comm, idx) => (
              <div key={idx} className="community-card bg-gray-200 mt-20" >
                <Link to="/ComingSoon">
                  {comm.image ? (
                    <img
                      className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                      src={comm.image}
                      alt={comm.name}
                    />
                  ) : (
                    <div className="h-40 w-full max-w-full rounded-lg bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">No Image Available</span>
                    </div>
                  )}
                  {/* <h3 className="community-name text-xl font-bold mt-2 p-2">{comm.name}</h3>
                  <p className="community-description text-sm text-gray-600 p-2">{comm.description}</p> */}
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    {comm.name}
                    </Typography>
                    <Typography>
                    {comm.description}
                    </Typography>
                  </CardBody>
                </Link>
                {/* {renderFollowButton(comm._id, comm.isFollowing)} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceList;
