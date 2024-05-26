import React, { useState } from 'react';

const AddPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    // Implement the logic to handle post submission
    console.log('Post Title:', postTitle);
    console.log('Post Content:', postContent);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <div className="mb-4">
        <label htmlFor="postTitle" className="block text-gray-700 text-sm font-bold mb-2">
          Post Title
        </label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={handleTitleChange}
          placeholder="Enter the title of your post"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">
          Post Content
        </label>
        <textarea
          id="postContent"
          value={postContent}
          onChange={handleContentChange}
          placeholder="Write your post content here"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32"
        />
      </div>
      <button
        onClick={handlePostSubmit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Post
      </button>
    </div>
  );
};

export default AddPost;
