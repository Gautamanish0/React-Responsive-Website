import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white  px-4 '>
        <div className='max-w[1240px] mx-auto grid lg:grid-cols-3'>
     <div className='lg:col-span-2 my-4 ml-3'>
     <h1 className='md:text-4xl sm:text-4xl text-xl font-bold py-2 '> Want to learn things <span className='text-green-300'>differently .?</span></h1>
     <p className='my-4 text-xl'>Sign up to out Email and we will reach out to you soon</p>
    </div>
    <div className='my-4 '>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black ' type='email' placeholder='Enter Email' />
            <button className='bg-[#3bddaa] w-[200px] rounded-md font-medium  ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
        </div>

    </div>
      <p> We care about the protection of your data. Read our {''} <span className='text-[#2745f3]'>Private Policy.</span>
      </p>
        </div>
    </div>
  )
}

export default Newsletter