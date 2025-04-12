'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from 'motion/react'
import { SocialIcon } from 'react-social-icons'



const Nav = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleShowMenu=()=>{
    setShowMenu ((prev) => !prev)
  }

  
  return (
    <div className='z-50 fixed w-full'>
      {/* top nav for desktop */}
      <nav className='lg:flex justify-end items-center hidden bg-gray-400 px-[4rem]'>
          <div className='flex items-center gap-2 font-bold'><FaPhoneVolume className='animate-pulse' /> 08098727936 | 0918155494</div>
      </nav>
     
      
      {/* Desktop nav */}
      <nav className='lg:flex items-center justify-between px-[2rem] md:px-[4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  w-full py-1  backdrop-blur-xl bg-white/45 fixed z-50 hidden'>
          <div>
            <Image src='/image/logobgr.png' width={80} height={80} alt='logo'  />
          </div>

          <motion.ul 
            initial={{ x:500, opacity:0, scale:0.5}}
            animate={{ x:0, opacity:1, scale:1}}
            transition={{ duration:0.9}}
            
            className='flex items-center gap-8 text-blue-800 font-medium  font-montserrat'>
            <li className='hvr-underline-from-center cursor-pointer'>Home</li>
            <li className='hvr-underline-from-center cursor-pointer'>About Us</li>
            <li className='hvr-underline-from-center cursor-pointer'>Services</li>
            {/* <li className='hvr-underline-from-center cursor-pointer'>Testimonials</li> */}
            <li className='hvr-underline-from-center cursor-pointer'>Certificates</li>
            <li className='hvr-underline-from-center cursor-pointer'>Contact</li>
          </motion.ul>

          <motion.div 
            initial={{ x:500, opacity:0, scale:0.5}}
            animate={{ x:0, opacity:1, scale:1}}
            transition={{ duration:0.9}}


            className='hidden lg:flex space-x-3'>
            {/* <button 
              onClick={() => window.open("https://wa.me/2348098727936", "_blank")}
              className='  px-6   py-2 rounded-md  text-white  hover:bg-red-700  cursor-pointer flex items-center gap-2 transition duration-300 bg-blue-700 '>Request a Quote 
              <span className='text-green-500 text-xl '><SiWhatsapp className=' font-bold' /></span> </button> */}

              <SocialIcon
                url="https://linkedin.com/"
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
                network="linkedin"
                style={{ height: 40, width: 40 }}
              />

              <SocialIcon
                url="https://wa.me/+2348098727936"
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
                network="whatsapp"
                style={{ height: 40, width: 40 }}
              />

              <SocialIcon
                url="https://facebook.com/"
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
                network="facebook"
                style={{ height: 40, width: 40 }}
              />
          </motion.div>
      </nav>

      {/* top nav for phone screen */}
      <nav className='flex justify-center items-center lg:hidden bg-gray-400 px-[1rem]'>
        <div className='flex items-center gap-2 font-extrabold'><FaPhoneVolume className='animate-pulse' /> 08098727936 | 0918155494</div>
      </nav>

      {/* phone nav */}
      <nav className='flex items-center justify-between px-[1rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  w-full py-1  backdrop-blur-xl bg-white/45 relative '>
        <div>
          <Image src='/image/logobgr.png' width={80} height={80} alt='logo'  />
        </div>

        <div onClick={toggleShowMenu}>
          <Image src='/image/menu.svg' width={55} height={55} alt='logo'  />

          {
            showMenu === true ? 
            <ul 
             

              className='absolute scale-in-hor-right top-[5.5rem] font-semibold right-[0rem]  w-[60vw] h-screen bg-gray-500 flex flex-col gap-10 text-xl'>
              <li className='md:pt-8'></li>

              <motion.li 
                
                className='flex items-center justify-center'>Home</motion.li>

              <li className='flex items-center justify-center'>About Us</li>

              <li className='flex items-center justify-center'>Services</li>

              <li className='flex items-center justify-center'>Certificate</li>

              <li className='flex items-center justify-center'>Contact Us</li>

              
            </ul>
             : 
            <div></div>
          }
        </div>






      </nav>




     

      
    </div>
  )
}

export default Nav
