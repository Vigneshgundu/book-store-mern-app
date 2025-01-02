import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {loginUser,signInwithgoogle}=useAuth();
    const navigate=useNavigate();
    const onSubmit = async(data) =>{
        try{
            await loginUser(data.email,data.password);
            alert("login successfull");
            navigate('/');
        }catch(error){
            setmeassage("please provide a valid email and password")
            console.error(error);
        }  

    }
         

    const [message,setmeassage]=useState("");
    const handleGoogleSignIn=async ()=>{
        try{
            await signInwithgoogle();
            alert("login successfull");
            navigate('/');

        }catch(error){
            setmeassage("please provide a valid email and password")
            console.error(error);

        }

    }
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
       
       <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='textxl font-semibold mb-4'>Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">email</label>
                <input
                {...register("email", { required: true })}
                 type='email' name="email" id='email' placeholder='email address'
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Password</label>
                <input
                {...register("password", { required: true })}
                 type='password' name="password" id='password' placeholder='enter password'
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>
            {
                message && <p className='text-red-500 text-xs mb-3'>{message}</p>
            }
            <div >
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 rounded focus:outline-none'>Login</button>
            </div>
        </form>
        <p className='align-baseline font-medium mt-4 text-sm'>No account ? <Link to="/register" className='text-blue-500 hover:text-blue-950'>
        create account</Link></p>

        {/* google sign in*/}
        <div className='mt-4'>
            <button
            onClick={handleGoogleSignIn} 
            className='w-full flex flex-wrap gap-1 items-center justify-center bg-white  text-black font-bold py-2 px-4 rounded focus:outline-none'>
            <FcGoogle className='mr-2'/>
            sign in with Google
            </button>
        </div>
        <p className='mt-5 text-center text-gray-500 text-xs'>All rights reserved</p>
       </div>
    </div>
  )
}

export default Login