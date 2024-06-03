import React from 'react';

const Answers = () => {
  return (
    <div className="p-4 flex items-center">
      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit mb-3">Questions for you</h4>
      <div className="bg-background-primary dark:bg-neutral-800 text-neutral-900 dark:text-neutral-300 transition-opacity duration-500">
        <div className="flex gap-2 m-3">
          <div className="rounded-full text-background-primary flex items-center justify-center cursor-pointer shrink-0 bg-rose-500 w-10 h-10 text-xl">
            T
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <a href="/profile/6617dcbd5d3210cda1872509">
                <div className="text-sm">test</div>
              </a>
              <span>•</span>
              <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20 text-blue-500 capitalize p-0">
                Follow
              </button>
            </div>
            <div className="text-sm">a month</div>
          </div>
        </div>
        <div className="m-3">eszxdfcgvhjikopl;'</div>
        <div className="m-3"></div>
        <div className="blur-md transition-filter duration-700"></div>
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center p-3">
          <div className="flex flex-col items-center sm:flex-row gap-2">
            <div className="row flex">
              <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-4 rounded-lg border hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-85 rounded-r-none border-r-0 flex items-center border-gray-300 dark:border-gray-700 capitalize h-6 text-gray-700 dark:text-gray-300 rounded-s-full py-4 gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-blue-500">
                  <path d="M12 4 3 15h6v5h6v-5h6z" className="icon_svg-stroke icon_svg-fill" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path>
                </svg>
                Upvote<span>&nbsp;•&nbsp;3</span>
              </button>
              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-10 max-h-10 rounded-lg text-xs border hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 border-gray-300 dark:border-gray-700 h-6 text-gray-700 dark:text-gray-300 rounded-e-full py-4">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-700 dark:stroke-gray-300">
                    <path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </button>
            </div>
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg border hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 border-gray-300 dark:border-gray-700 flex items-center h-6 text-gray-700 dark:text-gray-300 p-2 py-4">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-700 dark:stroke-gray-300">
                <path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" className="icon_svg-stroke icon_svg-fill" strokeWidth="1.5" fill="none"></path>
              </svg>
              <span>&nbsp;1</span>
            </button>
            <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-10 max-h-10 rounded-lg text-xs border hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 border-gray-300 dark:border-gray-700 h-6 text-gray-700 dark:text-gray-300 py-4">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                  <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Answers;
