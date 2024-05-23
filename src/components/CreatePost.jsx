import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";

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
      <h1 onClick={openModal}>Ask Question</h1>
      <Dialog open={show} handler={closeModal} size="xl">
        <div className=" w-screen md:h-fit md:max-h-screen md:max-w-[600px] bg-white dark:bg-[#181818] rounded-lg py-6 px-3 sm:px-6 flex flex-col items-start gap-2">
         

          <div className="text-[18px] font-semibold mx-auto text-center">
            Create Post
          </div>
          <div className="w-full h-1 bg-[#2e69ff] rounded-t"></div>
          <div className="p-3 w-full bg-[#ebf0ff] dark:bg-[#282d41] text-[#2e69ff] dark:text-[#4894fd] rounded-md text-[12px] sm:text-[15px]">
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
            Post Title <span className="font-normal">(required)</span>:
          </label>
          <input
            className="w-full outline-none border-2 dark:border-[#393839] p-2 focus:border-[#2e69ff] dark:focus:border-[#2e69ff] transition-all duration-300"
            placeholder="Enter The Question or Title"
          />
          <label htmlFor="post-content" className="font-semibold">
            Post Description :
          </label>
          <textarea
            placeholder="Enter Description or Answer"
            className="w-full outline-none border-2 dark:border-[#393839] p-2 focus:border-[#2e69ff] dark:focus:border-[#2e69ff] transition-all duration-300"
          />
          <button className="sm:hidden w-full mt-4 bg-[#2e69ff] hover:bg-[#1a5aff] disabled:opacity-35 disabled:hover:bg-[#2e69ff] text-white text-[15px] font-medium p-2 rounded-full transition duration-300">
            Add Post
          </button>
        </div>
        <div className="w-full flex justify-between items-center ml-30">
            <div className="flex gap-4 items-center">
              <button
                onClick={closeModal}
                className="rounded-full p-[6px] flex-shrink-0 hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[#ffffff15] transition duration-300"
              >
                Close
              </button>
              <button
                className="hidden sm:block bg-[#2e69ff] hover:bg-[#1a5aff] disabled:opacity-35 disabled:hover:bg-[#2e69ff] text-white text-[13px] sm:text-[15px] font-medium p-2 sm:p-3 rounded-full transition duration-300"
              >
                Add Post
              </button>
            </div>
          </div>
      </Dialog>
    </>
  );
}
