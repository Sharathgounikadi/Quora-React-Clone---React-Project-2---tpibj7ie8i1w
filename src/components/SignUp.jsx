import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpBgm from '../assets/SignUpBgm.jpg';
import google from "../assets/google.jpeg"
import facebook from "../assets/facebook.jpeg";
import SignUpDialogue from './SignUpDialogue';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'quora'
    });

    const [getError, setError] = useState(null);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setError(null);
        if (!getData.email) {
            // setError('email is mandatory');
            toast.error('Email is mandatory');
            return;
        }
        else if (!getData.password) {
            // setError('password cannot be empty');
            toast.error('Password cannot be empty');
            return;
        }
        await axios.post('https://academics.newtonschool.co/api/v1/user/login', getData, {
            headers: {
                projectID: 'tpibj7ie8i1w',
                "Content-Type": "application/json",
            }
        }).then((result) => {
            console.log(result);
            localStorage.setItem("userInfo", JSON.stringify(result.data.data.user));
            localStorage.setItem("token", (result.data.token));
            if (result.data.status === 'success') {
                localStorage.setItem('status', 'success')
                toast("Login Successful")
                setInterval(() => {
                    navigate('/home');
                }, 2000)

                // console.log("Login Successful")
            } else {
                localStorage.setItem('status', 'failure')
            }
        }).catch((error) => {
            // setError("internal server error please try after sometime", error);
            toast.error("Email or Password is incorrect")
        })
    }

    return (
        <>
            {/* <div class="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Sign Up
                </h4>
                <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Nice to meet you! Enter your details to register.
                </p>
                <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                    <div class="flex flex-col gap-6 mb-1">
                        <h6
                            class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Your Name
                        </h6>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="name@mail.com"
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                        <h6
                            class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Your Email
                        </h6>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="name@mail.com"
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                        <h6
                            class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Password
                        </h6>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input type="password" placeholder="********"
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                    </div>
                    <div class="inline-flex items-center">
                        <label class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
                            <input type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                id="remember" />
                            <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                    stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </label>
                        <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
                            <p class="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                I agree the
                                <a href="#" class="font-medium transition-colors hover:text-gray-900">
                                    &nbsp;Terms and Conditions
                                </a>
                            </p>
                        </label>
                    </div>
                    <button
                        class="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        sign up
                    </button>
                    <p class="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                        Already have an account?
                        <a href="#" class="font-medium text-gray-900">
                            Sign In
                        </a>
                    </p>
                </form>
            </div> */}

            <div style={{ backgroundImage: `url(${SignUpBgm})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }} className='flex items-center justify-center'>
                <div className='bg-white h-11/12 w-11/12 md:w-8/12 lg:w-7/12 rounded-sm p-4 md:p-8'>
                    <h1 className='text-red-700 text-4xl md:text-6xl font-bold font-serif text-center'>Quora</h1>
                    <h1 className='text-center font-bold text-gray-500 mt-3 '>A place to share knowledge and better understand the world</h1>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <h1 className='text-zinc-400 text-xs md:text-sm lg:w-72 text-center lg:text-left'>
                                By continuing you indicate that you agree to Quora’s
                                <span className='text-cyan-700'> Terms of Service</span> and <span className='text-cyan-700'> Privacy Policy.</span>
                            </h1>
                            <div className='flex p-4 border border-spacing-1 items-center w-full md:w-80 rounded-sm mt-5'>
                                <img src={google} className='w-5 h-5 ml-2' />
                                <h1 className='ml-7 cursor-not-allowed'>Continue with Google</h1>
                            </div>
                            <div className='flex p-4 border border-spacing-1 items-center w-full md:w-80 rounded-sm mt-5'>
                                <img src={facebook} className='w-6 h-5 ml-2 rounded-full' />
                                <h1 className='ml-7 cursor-not-allowed'>Continue with Facebook</h1>
                            </div>
                            <h1 className='text-center text-sm font-semibold text-zinc-600 mt-3 hover:bg-gray-100 rounded-full cursor-pointer'>
                                <SignUpDialogue />
                            </h1>
                        </div>
                        <div className='mt-8 lg:mt-0 lg:ml-16'>
                            <h1 className='text-lg'>Login</h1>
                            <hr className='w-full lg:w-72 mt-3' />
                            <h1 className='mt-4 font-bold text-sm'>Email</h1>
                            <input
                                name="email"
                                value={getData.email}
                                onChange={onChangeHandler}
                                placeholder='Your Email'
                                className='border border-spacing-1 p-2 w-full lg:w-72 mt-2'
                            />
                            <h1 className='mt-4 font-bold text-sm'>Password</h1>
                            <input
                                name="password"
                                type="password"
                                value={getData.password}
                                onChange={onChangeHandler}
                                placeholder='Your Password'
                                className='border border-spacing-1 p-2 w-full lg:w-72 mt-2'
                            />
                            <div className='flex justify-center lg:justify-start mt-4'>
                                <button className='bg-blue-500 text-white p-2 rounded-full' onClick={onSubmitHandler}>Login</button>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-3' />
                    <h1 className='text-xs md:text-sm text-center mt-3 text-zinc-600'>
                        About . Careers . Privacy . Terms . Contact . Languages . Your Ad ChoicesPress© Quora, Inc. 2024
                    </h1>
                </div>
            </div>

        </>
    )
}