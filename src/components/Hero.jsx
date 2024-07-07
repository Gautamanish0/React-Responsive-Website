import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'> <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-[#dbdf00] font-bold p-2 '>  Empowering Learners <span className='text-blue-300 font-bold text-xl'>Worldwide</span></p>

    <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'> Access to a Global Network of Experts</h1>
    <div className='flex justify-center items-center '>
      <p  className='md:text-4xl sm:text-3xl text-xl font-bold py-4'> Get Started  </p>

      < ReactTyped className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-400 ' strings={['Today']}
        typeSpeed={200}
        backSpeed={150}
        loop /> 
    </div>
    <p className=' md:text-2xl text-xl font-bold text-gray-500'> Discover a vast array of courses, expert instructors, and interactive learning tools designed to help you achieve your educational goals. </p>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
      </div>
       </div>
  )
}

export default Hero