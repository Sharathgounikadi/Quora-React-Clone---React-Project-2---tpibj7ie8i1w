import React from 'react'
import SignUpBgm from '../assets/SignUpBgm.jpg';

export default function SignUp() {
    return (
        <div style={{ backgroundImage: `url(${SignUpBgm})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }} className='flex items-center justify-center'>
            <div className='bg-white h-5/6 w-7/12 rounded-sm p-8'>
                <h1 className='text-red-700 text-6xl font-bold font-serif text-center'>Quora</h1>
                <h1 className='text-center font-bold text-gray-500 mt-3'>A place to share knowledge and better understand the world</h1>
                <div>
                    <h1 className='text-zinc-400 text-sm'>By continuing you indicate that you agree to Quora’s
                        <span className='text-cyan-700'>Terms of Service</span> and <span className='text-cyan-700'>Privacy Policy.</span></h1>
                </div>
            </div>
        </div>

    )
}
