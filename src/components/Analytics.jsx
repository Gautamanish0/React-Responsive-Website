import React from 'react';
import laptop from "../assets/image.jpeg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-1[1240px] mx-auto grid md:grid-cols-2 '>
      <img  className = 'w-[400px] mx-auto my-4 rounded-xl' src={laptop} alt="/" />
        <div className='flex flex-col justify-center ' >
            <p className='text-[#00df9a] font-bold text-4xl '> Rent My Tutor</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2' > Comprehensive Resources and Tools </h1> 
             <p>To ensure students have the necessary tools for their studies, we provide access to relevant software licenses. This includes coding environments, design software, statistical tools, and more, depending on the course requirements. Virtual lab environments are also available, allowing students to practice and apply what they’ve learned using real-world software in a safe, controlled setting.</p>
      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 '> Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default Analytics