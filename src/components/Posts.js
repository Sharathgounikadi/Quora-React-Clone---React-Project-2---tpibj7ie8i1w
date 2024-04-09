import React from 'react';
import cooking from '../assets/Cooking.jpg';
import { Avatar } from "@material-tailwind/react";

const Posts = () => {
  return (
    <div className="flex items-center">
       <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />;
      <div className="ml-4">
        <p className="text-lg font-semibold">Title of the Post</p>
        <p className="text-sm text-gray-600">
          Description or content of the post goes here...
        </p>
      </div>
    </div>
  );
};

export default Posts;

import { Avatar } from "@material-tailwind/react";
 
export function AvatarDefault() {
  return <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />;
}
