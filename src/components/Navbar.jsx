import React from 'react'
import  { useNavigate } from "react-router-dom";
import quora from  '../assets/Quora.jpg';
import home from  '../assets/Home.jpg';
import search from  '../assets/Search.jpg';
import globe from  '../assets/Globe.jpg';
import edit from  '../assets/Edit.jpg';
import bell from  '../assets/Bell.jpg';
import group from  '../assets/Group.jpg';
import account from  '../assets/Account.jpg';
import { ProfileMenu } from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import Subscription from './Subscription';
import {Notification} from './Notification';
import  MessageDialog  from './MessageDialog';
import CheckoutForm from './CheckoutForm';
import CreatePost from './CreatePost';

const Navbar = () => {
  const navigate=useNavigate();

  const nav=()=>{
    navigate('/ComingSoon')
  }
  return (
    <div className='fixed flex z-10 bg-white pl-20 pt-4 shadow-md h-14 w-full ml-30'>
    <img src={quora} className='w-24 h-7' onClick={() => navigate('/home')} />
    <img src={home} className='w-7 h-7 ml-10' onClick={() => navigate('/home')} />
    <img src={group} className='w-7 h-7 ml-10' onClick={nav} />
    <img src={edit} className='w-7 h-7 ml-10' onClick={nav} />
    <img src={group} className='w-7 h-7 ml-10' onClick={nav} />
    <div  className='w-7 h-7 ml-10'><Notification /></div> 
    <input className='ml-5 w-50 h-8 border border-spacing-1 rounded-lg' placeholder='        Search Quora'/>
    {/* <div className='flex border border-spacing-1 h-9 ml-10 w-72 p-1'>
        <img src={search} className='w-3 h-3 mt-2'/>
        
    </div> */}
    <h1 className='text-sm border border-spacing-1 rounded-full p-2 ml-5 h-9'><Subscription /></h1>
    <div><ProfileMenu /></div>
    <div><LanguageMenu /></div>
    <h1 className='bg-red-800 rounded-full text-sm text-white w-36 pl-6 ml-6 pt-2 h-9' ><CreatePost /></h1>
    </div>
//     <nav class="py-4 shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border w-full max-w-full rounded-none bg-white !bg-background-primary dark:!bg-neutral-800 text-neutral-900 dark:text-neutral-300 flex justify-between px-2 sm:px-3 md:px-6 lg:px-12 xl:px-24 2xl:px-[12em] items-center gap-1 md:gap-2 xl:gap-4 sticky top-0 z-10 overflow-hidden border-gray-300 dark:border-gray-700 !max-h-[52px]">
//     <span class="cursor-pointer">
//         <svg width="87.5px" height="50px" viewBox="0 0 202 115">
//             <g stroke="none" fill="#b91c1c" fill-rule="evenodd" class="logo_fill">
//                 <path d="M24.4,31.9 C37.1,31.9 49.1,41.8 49.1,56.2 C49.1,64.3 45.3,70.9 39.9,75.3 C41.5,77.9 43.5,79.7 45.9,79.7 C48.7,79.7 49.9,77.5 50.1,75.7 L50.1,75.7 L53.7,75.7 C53.9,78.1 52.7,87.3 42.7,87.3 C36.5,87.3 33.3,83.7 30.9,79.7 C28.9,80.1 26.7,80.5 24.5,80.5 C12.2,80.5 0,70.6 0,56.2 C0,41.8 12.2,31.9 24.4,31.9 Z M114.1,42.8 C124.3,42.8 132.5,50 132.6,60.7 C132.6,72 124.3,79.4 114.1,79.4 C104.2,79.4 95.6,71.9 95.6,60.7 C95.6,49.8 104.1,42.8 114.1,42.8 Z M181.4,42.8 C190.4,42.8 196,45.2 196,54.2 L196,54.2 L196,69.6 C196,72 196.8,73.2 198.8,73.2 C199.8,73.2 200.6,72.8 201,72.6 L201,72.6 L201.9,74.4 C201.1,75.8 198.5,78.4 193.7,78.4 C189.5,78.4 186.9,76.4 186.5,73.2 L186.5,73.2 L186.3,73.2 C184.3,76.8 180.7,79.2 175.5,79.2 C169.3,79.2 165.5,76 165.5,70.2 C165.5,58.8 181.4,62 186,54.4 L186,54.4 L186,52.6 C186,47.2 183.8,46 181.4,46 C174.2,46 177.4,54.4 171,54.4 C167.8,54.4 166.6,52.6 166.6,50.4 C166.6,46.2 171.8,42.8 181.4,42.8 Z M67.6,43.6 L67.6,67 C67.6,71.4 69.8,73.4 73,73.4 C75.6,73.4 78.4,72.2 79.8,69.4 L79.8,50 C79.8,48 79.2,47.2 77,47.2 L74.6,47.2 L74.6,43.6 L89.8,43.6 L89.8,69.3 C89.8,71.7 90.6,72.9 93.4,72.9 L93.8,72.9 L93.8,76.7 L80.2,78.9 L80.2,73.8 L80,73.8 C77.4,77.1 73.6,79.1 68.6,79.1 C62.4,79.1 57.8,75.9 57.8,67.3 L57.8,50 C57.8,48 57,47.2 54.8,47.2 L52.6,47.2 L52.6,43.6 L67.6,43.6 Z M157.9,43 C161.1,43 163.7,44.8 163.7,48.4 C163.7,51 162.5,53.6 158.9,53.6 C155.9,53.6 155.3,50.8 152.7,50.8 C150.5,50.8 148.7,53 148.7,56.2 L148.7,70.4 C148.7,73.6 149.5,74.6 153.1,74.6 L155.1,74.6 L155.1,78.4 L133.5,78.4 L133.5,74.7 L134.9,74.7 C138.5,74.7 138.9,73.7 138.9,70.5 L138.9,50 C138.9,48 137.9,47.2 135.7,47.2 L133.7,47.2 L133.7,43.6 L147.5,43.6 L148.1,50.8 L148.5,50.8 C149.9,45.6 154.1,43 157.9,43 Z M24.5,35.8 C15.3,35.8 11.3,42.7 11.3,56.1 C11.3,69.5 15.3,76.4 24.5,76.4 C26.2,76.4 27.7,76 28.9,75.6 C27.1,71.4 24.7,67.4 20.1,67.4 C19.3,67.4 18.5,67.6 17.7,68 L17.7,68 L16.3,65.2 C18.3,63.5 21,62.2 24.7,62.2 C30.5,62.2 33.5,65 35.9,68.6 C37.3,65.6 37.9,61.4 37.9,56.1 C37.9,42.7 33.9,35.8 24.5,35.8 Z M114.1,46.2 C109.3,46.2 106.5,51 106.5,60.6 C106.5,70.4 109.3,75.4 114.1,75.4 C119.3,75.4 121.3,70.4 121.5,60.6 C121.7,51.1 119.3,46.2 114.1,46.2 Z M185.9,58.6 C182.7,62.1 175.3,62.6 175.3,69 C175.3,72.2 177.3,74 179.9,74 C184.3,74 185.9,70.2 185.9,66 L185.9,66 Z"></path>
//             </g>
//         </svg>
//     </span>
//     <button aria-expanded="false" aria-haspopup="menu" id=":r2:" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-background-primary dark:bg-neutral-800 flex xl:hidden p-4" type="button">
//         <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" class="fill-white">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.25a1 1 0 011-1h13a1 1 0 110 2h-13a1 1 0 01-1-1zM4.5 18.75a1 1 0 011-1h13a1 1 0 110 2h-13a1 1 0 01-1-1zM4.5 12a1 1 0 011-1h13a1 1 0 110 2h-13a1 1 0 01-1-1z"></path>
//             </svg>
//         </span>
//     </button>
//     <nav class="xl:flex hidden flex-row gap-2 items-center">
//         <a class="relative" href="/home">
//             <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-background-primary dark:bg-neutral-800">
//                 <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//                     <svg width="28" height="28" viewBox="0 0 24 24" class="fill-white">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M19.481 4.87a4.236 4.236 0 00-1.653-1.653C16.663 2.716 15.615 2.5 14 2.5H8c-1.615 0-2.663.216-3.828.717A4.236 4.236 0 002.52 4.87C2.019 6.037 1.804 7.085 1.804 8.7v6.6c0 1.615.215 2.663.717 3.828a4.236 4.236 0 001.653 1.653c1.165.501 2.213.717 3.828.717h6c1.615 0 2.663-.216 3.828-.717a4.236 4.236 0 001.653-1.653c.501-1.165.717-2.213.717-3.828V8.7c0-1.615-.216-2.663-.717-3.828zM8 1.5C6.385 1.5 5.337 1.716 4.172 2.217 3.007 2.718 2.07 3.554 1.48 4.872.896 6.184.704 7.634.704 9.3v5.4c0 1.667.192 3.116.776 4.428.59 1.318 1.526 2.154 2.692 2.655C5.337 22.284 6.385 22.5 8 22.5h6c1.615 0 2.663-.216 3.828-.717 1.166-.501 2.102-1.337 2.692-2.655.584-1.312.776-2.761.776-4.428V9.3c0-1.666-.192-3.116-.776-4.428-.59-1.318-1.526-2.154-2.692-2.655C16.663 1.716 15.615 1.5 14 1.5H8z"></path>
//                         <path d="M15.75 11.725a.75.75 0 01.028 1.06l-3.994 4.244a.75.75 0 01-1.088.028l-2.006-2.014a.75.75 0 011.061-1.06l1.476 1.48 3.463-3.68a.75.75 0 011.06-.028z"></path>
//                     </svg>
//                 </span>
//             </button>
//         </a>
//         <a class="relative" href="/following">
//             <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-background-primary dark:bg-neutral-800">
//                 <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//                     <svg width="28" height="28" viewBox="0 0 24 24" class="fill-white">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M14.01 4.96c0 1.369-.555 2.608-1.455 3.509a4.957 4.957 0 01-3.55 1.455 4.957 4.957 0 01-3.509-1.455 4.957 4.957 0 01-1.455-3.51c0-1.369.555-2.608 1.455-3.508A4.957 4.957 0 019.004.005a4.957 4.957 0 013.55 1.455 4.957 4.957 0 011.455 3.51zM17.36 22.485a.75.75 0 00.215-1.035c-1.117-1.74-2.784-2.951-4.843-3.459-1.985-.49-4.248-.372-6.505.633-1.052.49-2.01 1.125-2.846 1.864a.75.75 0 10.991 1.124 7.6 7.6 0 012.454-1.61c2.03-.947 3.998-1.035 5.756-.607 1.77.437 3.233 1.472 4.165 2.905a.75.75 0 001.035.215zm5.94-13.76c0 1.368-.555 2.607-1.455 3.508a4.957 4.957 0 01-3.51 1.455 4.957 4.957 0 01-3.508-1.455 4.957 4.957 0 01-1.455-3.509c0-1.369.555-2.608 1.455-3.509A4.957 4.957 0 0118.335.004a4.957 4.957 0 013.51 1.455 4.957 4.957 0 011.455 3.509z"></path>
//                         <path d="M24.99 17.685a.75.75 0 01-.216 1.035 7.6 7.6 0 01-2.454 1.61c-2.03.947-3.999 1.035-5.756.607-1.77-.437-3.233-1.472-4.165-2.905a.75.75 0 011.25-.82c1.117 1.74 2.784 2.951 4.843 3.459 1.986.49 4.248.372 6.506-.633a7.6 7.6 0 002.454-1.61.75.75 0 011.035-.216z"></path>
//                     </svg>
//                 </span>
//             </button>
//         </a>
//         <a class="relative" href="/answers">
//             <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-background-primary dark:bg-neutral-800">
//                 <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//                     <svg width="28" height="28" viewBox="0 0 24 24" class="fill-white">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M18.805 20.113a1.5 1.5 0 001.195-2.425L15.477 9.75a2 2 0 10-3.307 0l-4.523 7.938a1.5 1.5 0 001.295 2.325h9.863zm-4.963-5.363a.75.75 0 110 1.5.75.75 0 010-1.5zM15 14a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zM1.5 12c0-5.799 4.701-10.5 10.5-10.5 5.799 0 10.5 4.701 10.5 10.5 0 5.799-4.701 10.5-10.5 10.5-5.799 0-10.5-4.701-10.5-10.5z"></path>
//                     </svg>
//                 </span>
//             </button>
//         </a>
//         <a class="relative" href="/notifications">
//             <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-background-primary dark:bg-neutral-800">
//                 <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//                     <svg width="28" height="28" viewBox="0 0 24 24" class="fill-white">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 3.75a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm1.75 15.5a4.25 4.25 0 01-8.5 0 .75.75 0 111.5 0 2.75 2.75 0 005.5 0 .75.75 0 011.5 0z"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 14.75A3.75 3.75 0 0122 18.5v2a.75.75 0 01-.75.75H2.75a.75.75 0 01-.75-.75v-2a3.75 3.75 0 013.75-3.75h.75V9.5a8.75 8.75 0 0117.5 0v5.25h.75z"></path>
//                     </svg>
//                 </span>
//             </button>
//         </a>
//     </nav>
// </nav>

  )
}

export default Navbar