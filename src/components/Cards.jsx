import React from 'react'
import One from '../assets/one.jpg'
import Three from '../assets/three.jpeg'
import Two from '../assets/two.jpeg'


const  Cards= () => {
  return (
    // Single User Flex Box
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                <img className='w-80 mx-auto mt-[-3rem] bg-white rounded-xl'  src={One} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Advanced SEO Keyword Research  Learn All the Secrets </h2>
                <p className='text-center text-4xl font-bold'> रु 40000</p>
                <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8' >Valid Til 30days</p>
                    <p className='py-2 border-b mx-8' >1 Granted User</p>
                    {/* <p className='py-2 border-b mx-8'></p> */}
                </div>
                <button className='bg-[#3bddaa] w-[200px] rounded-md font-medium   my-6 mx-auto px-6 py-3 '>Buy Now</button>
            </div>
            {/* Double User Flex Box */}
            <div className='w-full shadow-xl flex flex-col  p-4 my-8 md:my-0  rounded-lg hover:scale-105 duration-300'> 
                <img className='w-80 mx-auto mt-[-3rem] bg-transparent rounded-xl '  src={Two} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'> Content Writing: Write an Article with me in 3 hours</h2>
                <p className='text-center text-4xl font-bold'> रु 24000</p>
                <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8' >Valid Till 60days</p>
                    <p className='py-2 border-b mx-8' >2 Granted User</p>
                    {/* <p className='py-2 border-b mx-8'>Send upto 5 GB</p> */}
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium   my-6 mx-auto px-6 py-3 text-white'>Buy Now</button>
            </div>
            {/* Triple User Flex Box  */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'> 
                <img className='w-80 mx-auto mt-[-3rem] bg-white'  src={Three} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'> Violin Classes for Beginners</h2>
                <p className='text-center text-4xl font-bold'> रु 30000</p>
                <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8' >Unlimited Access</p>
                    <p className='py-2 border-b mx-8' >3 Granted User</p>
                    {/* <p className='py-2 border-b mx-8'>hello</p> */}
                </div>
                <button className='bg-[#3bddaa] w-[200px] rounded-md font-medium   my-6 mx-auto px-6 py-3 '>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards