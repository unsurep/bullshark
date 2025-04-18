'use client';

import About from '@/components/About/About'
import Hero1 from '@/components/Hero/Hero1'
import Hero2 from '@/components/Hero/Hero2'
import Hero3 from '@/components/Hero/Hero3'
import Link from 'next/link'
import { FaArrowUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero1/>
      <Hero2/>
      <Hero3/>

      {/*  */}


      {/* <div
        onClick={() => window.open("https://wa.me/2348098727936", "_blank")}
        className="w-[5px] rounded-full px-6 py-4 bg-[#3177A3] 
        items-center cursor-pointer justify-center ring-4 hover:ring-red-300 z-50 flex fixed right-5 bottom-5">
        <span className="font-bold text-[18px] text-green-500 "><IoLogoWhatsapp /></span>
      </div> */}



      {/* <Link href='#top'>
        <div className="w-[5px] rounded-full cursor-pointer px-6 py-4 bg-[#3177A3] 
          items-center justify-center  z-50 
          flex fixed left-5 bottom-5"><span className="font-bold "><FaArrowUp /></span>
        </div>
      </Link> */}
    </div>
  )
}

export default Home
