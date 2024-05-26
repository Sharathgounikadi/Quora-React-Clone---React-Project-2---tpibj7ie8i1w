import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpBgm from '../assets/SignUpBgm.jpg';
import google from "../assets/google.jpeg"
import facebook from "../assets/facebook.jpeg";
import SignUpDialogue from './SignUpDialogue';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export default function SignUp() {

    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'quora'
    });

    const [getError, setError] = useState(null);

    const navigate = useNavigate();

    const onChangeHandler =  (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setError(null);
        if (!getData.email) {
            setError('email is mandatory');
            toast.error('Email is mandatory');
            return;
        }
        else if (!getData.password) {
            setError('password cannot be empty');
            toast.error('Password cannot be empty');
            return;
        }
        await axios.post('https://academics.newtonschool.co/api/v1/user/login',getData, {
            headers: {
                projectID: 'tpibj7ie8i1w',
                "Content-Type": "application/json",
            }
        }).then((result) => {
            console.log(result);
            localStorage.setItem("userInfo", JSON.stringify(result.data.data.user));
            localStorage.setItem("token",(result.data.token));
            if(result.data.status==='success'){
                toast.success("Login Successful") 
                navigate('/home');  
                console.log("Login Successful")
            }
        }).catch((error) => {
            setError("internal server error please try after sometime",error);
            toast.error("internal server error please try after sometime")
        })
    }

    return (
        <>
        <ToastContainer />
        <div style={{ backgroundImage: `url(${SignUpBgm})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }} className='flex items-center justify-center'>
            <div className='bg-white h-11/12 w-7/12 rounded-sm p-8'>
                <h1 className='text-red-700 text-6xl font-bold font-serif text-center'>Quora</h1>
                <h1 className='text-center font-bold text-gray-500 mt-3 '>A place to share knowledge and better understand the world</h1>
                <div className='flex'>
                    <div>
                        <h1 className='text-zinc-400 text-sm w-72'>By continuing you indicate that you agree to Quora’s
                            <span className='text-cyan-700'>Terms of Service</span> and <span className='text-cyan-700'>Privacy Policy.</span></h1>
                        <div className='flex p-4 border border-spacing-1 items-center w-80 rounded-sm mt-5'>
                            <img src={google} className='w-5 h-5 ml-2' />
                            <h1 className='ml-7'>Continue with Google</h1>
                        </div>
                        <div className='flex p-4 border border-spacing-1 items-center w-80 rounded-sm mt-5'>
                            <img src={facebook} className='w-6 h-5 ml-2 rounded-full' />
                            <h1 className='ml-7' onClick={()=>navigate('/')}>Continue with Facebook</h1>
                        </div>
                        <h1 className='text-center text-sm font-semibold text-zinc-600 mt-3 hover:bg-gray-100 rounded-full cursor-pointer'><SignUpDialogue /> </h1>
                    </div>
                    <div className="ml-16">
                        <h1 className='text-l'>Login</h1>
                        <hr className='w-72 mt-3' />
                        <h1 className='mt-4 font-bold text-sm'>Email</h1>
                        <input
                                name="email"
                                value={getData.email}
                                onChange={onChangeHandler}
                                placeholder='Your Email'
                                className='border border-spacing-1 p-2 w-72 mt-2'
                            />
                            <h1 className='mt-4 font-bold text-sm'>Password</h1>
                            <input
                                name="password"
                                type="password"
                                value={getData.password}
                                onChange={onChangeHandler}
                                placeholder='Your Password'
                                className='border border-spacing-1 p-2 w-72 mt-2'
                            />
                        <div className='flex mt-4'>
                        <button className='bg-blue-500 text-white p-2 ml-24 rounded-full' onClick={onSubmitHandler}>Login</button>
                        </div> 
                    </div>
                </div>
                <hr className='mt-3'/>
                <h1 className='text-sm text-center mt-3 text-zinc-600'>About . Careers . Privacy . Terms . Contact . Languages . Your Ad ChoicesPress© Quora, Inc. 2024</h1>
            </div>
        </div>
       </>

    )
}