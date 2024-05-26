import React, { useState } from "react";
import { Dialog, Input, Textarea, Button } from "@material-tailwind/react";
import AddPost from "./AddPost";

export default function CreatePost() {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <>
      <h1 onClick={openModal} className="cursor-pointer">Ask Question</h1>
      <Dialog open={show} handler={closeModal} size="l" className="flex" >
        <div className="w-screen md:h-fit md:max-h-screen md:max-w-[600px] bg-white dark:bg-gray-900 rounded-lg py-6 px-3 sm:px-6 flex flex-col items-start gap-2">
          <div className="text-lg font-semibold mx-auto text-center">
            Add Question
          </div>
          <div className="w-full h-1 bg-blue-600 rounded-t"></div>
          <div className="p-3 w-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-md text-sm sm:text-base">
            <div className="font-bold">
              Tips on getting good answers quickly
            </div>
            <ul className="list-disc list-inside">
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>

          <label htmlFor="post-title" className="font-semibold">
            Post Title <span className="font-normal ">(required)</span>:
          </label>
          <Input
            id="post-title"
            placeholder="Enter The Question or Title"
            className="w-full border border-gray-300 dark:border-gray-700 p-2 focus:border-blue-600 dark:focus:border-blue-600 transition duration-300"
          />
          <label htmlFor="post-content" className="font-semibold">
            Post Description :
          </label>
          <Textarea
            id="post-content"
            placeholder="Enter Description or Answer"
            className="w-full border border-gray-300 dark:border-gray-700 p-2 focus:border-blue-600 dark:focus:border-blue-600 transition duration-300"
          />
          <div className="w-full flex justify-between items-center px-6 py-4">
          <div className="flex gap-4 items-center">
            <Button
              onClick={closeModal}
              variant="text"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            >
              Close
            </Button>
            <Button
              className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 px-4 rounded-full transition duration-300"
            >
              Add Post
            </Button>
          </div>
        </div>
        </div>
       <AddPost />
      </Dialog>
    </>
  );
}