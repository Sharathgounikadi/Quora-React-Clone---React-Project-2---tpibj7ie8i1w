import { FaHome,FaCircle } from 'react-icons/fa';
import React from 'react'
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div><a href='https://www.quora.com/'><FaHome/></a></div>
        <div><a href='https://www.quora.com/'><FaCircle/></a></div>
        <div><a href='https://www.quora.com/'><FaHome/></a></div>
        <div>About</div>
        <div>Feed</div> 
        <div>Page</div>
        <div>Home</div>
        <div>About</div>
        <div>Feed</div> 
        <div className='askQuestion'>Ask Question</div>
    </div>
  )
}
