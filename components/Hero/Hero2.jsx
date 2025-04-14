import React from 'react'
import { TfiLineDashed } from "react-icons/tfi";
import Image from 'next/image';
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";

const Hero2 = () => {
  return (
    <>
      <section className='flex'>
        <div className='flex flex-col md:px-[4rem] space-y-8 py-12 bg-gray-300/20'>
          <h1 className='flex gap-1 items-center text-red-500 uppercase font-montserrat'><span className='text-blue-500 '><FaPersonWalkingDashedLineArrowRight /></span>About<span className='text-red-500 font-bold font-montserrat'>Bull</span><span className='text-blue-500 font-bold font-montserrat'>Shark</span>security</h1>

          <h3 className='text-4xl font-bold font-montserrat'>Dedicatedly Delivering  The <br /> Utmost Security Solutions To Clients!</h3>

          <div className='text-3xl text-red-500'>......</div>

          <p className='text-xl font-roboto'><span className='text-red-500 font-bold '>Bull</span><span className='text-blue-500 font-bold t'>Shark</span> is your trusted and leading licensed security <br />  organization  that  extends security consultancy, facility- <br /> management, guarding, investigations and intelligence <br /> solutions to many corporations today.</p>

          <button className='bg-black text-white font-bold p-4 hvr-float-shadow w-fit cursor-pointer rounded-md hover:rounded-md font-montserrat'>Read More</button>
        </div>


        <div className='ml-auto'>
          <Image src='/image/3.jpg' width={700} height={700} alt='image' className='h-screen'/>
        </div>
      </section>
    </>
  )
}

export default Hero2
