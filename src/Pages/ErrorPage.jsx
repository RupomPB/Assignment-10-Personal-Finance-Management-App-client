import React from 'react';
import errorpage from '../assets/errorpage.png'
import { useNavigate } from 'react-router';


const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center text-center space-y-5 my-10'>
            <img src={errorpage}></img>
            <h1 className=' font-bold text-3xl '> This page note found</h1>
            <p className=' text-gray-500 font-semibold'>The page you are looking for is not available.</p>
            <button onClick={()=> navigate('/')} className='btn my-3 bg-linear-to-r from-[#db28eb] to-[#e84646]  font-semibold text-xl text-white'>Go Back</button>
        </div>
    );
};

export default ErrorPage;