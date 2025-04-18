'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from 'motion/react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link';



const Nav = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleShowMenu=()=>{
    setShowMenu ((prev) => !prev)
  }

  
  return (
    <div className='z-50 fixed w-full'>
      {/* top nav for desktop */}
      <nav className='lg:flex justify-end items-center hidden bg-gray-400 px-[4rem]'>
          <div className='flex items-center text-gray-800 gap-2 font-bold'><FaPhoneVolume className='animate-pulse' /> 0809-872-7936 | 091-815-5494</div>
      </nav>
     
      
      {/* Desktop nav */}
      <nav className='lg:flex items-center justify-between px-[2rem] md:px-[4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  w-full py-1  backdrop-blur-xl bg-white/45 fixed z-50 hidden'>

          <Link href={'/'}>
            <Image src='/image/logobgr.png' width={80} height={80} alt='logo'  />
          </Link>

          <motion.ul 
            initial={{ x:500, opacity:0, scale:0.5}}
            animate={{ x:0, opacity:1, scale:1}}
            transition={{ duration:0.9}}
            
            className='flex items-center gap-8 text-blue-800 font-medium  font-montserrat'>

            <Link href={'/'}>
              <li className='hvr-underline-from-center cursor-pointer'>Home</li>
            </Link>

            <Link href={'/about'}>
              <li className='hvr-underline-from-center cursor-pointer'>About Us</li>
            </Link>

            <Link href={'/serv'}>
              <li className='hvr-underline-from-center cursor-pointer'>Our Services</li>
            </Link>

            {/* <li className='hvr-underline-from-center cursor-pointer'>Testimonials</li> */}

            <Link href={'/certificate'}>
              <li className='hvr-underline-from-center cursor-pointer'>Certificates</li>
            </Link>

            <Link href={'/contact'}>
              <li className='hvr-underline-from-center cursor-pointer'>Contact Us</li>
            </Link>

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
                url="https://www.linkedin.com/in/stanley-nsofor-css-fniis-7b356024?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGIfmOxCyTh6qND28K%2BySDA%3D%3D"
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
                url="https://web.facebook.com/stanley.nsofor.5"
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
                network="facebook"
                style={{ height: 40, width: 40 }}
              />

              <SocialIcon
                url="https://www.youtube.com/@bullsharksecurityltd1681"
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
                network="youtube"
                style={{ height: 40, width: 40 }}
              />
          </motion.div>
      </nav>

      {/* top nav for phone screen */}
      <nav className='flex justify-center items-center lg:hidden bg-gray-400 px-[1rem]'>
        <div className='flex items-center gap-2 text-gray-800 font-extrabold'><FaPhoneVolume className='animate-pulse' /> 0809-872-7936 | 091-815-5494</div>
      </nav>

      {/* phone nav */}
      <nav className='flex items-center justify-between px-[1rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  w-full py-1  backdrop-blur-xl bg-white/45 relative '>

        <Link href={'/'}>
          <Image src='/image/logobgr.png' width={80} height={80} alt='logo'  />
        </Link>

        <div onClick={toggleShowMenu}>
          <Image src='/image/menu.svg' width={55} height={55} alt='logo'  />

          {
            showMenu === true ? 
            <ul 
             

              className='absolute scale-in-hor-right top-[5.5rem] font-semibold right-[0rem]  w-[60vw] h-screen bg-white flex flex-col gap-10 text-xl'>
              <li className='md:pt-8 z-50'></li>

              <Link href={'/'}>
                <motion.li 
                  whileHover={{ scale:1.1}}
                  whileTap={{ scale:0.9, color:'red'}}
                  className='flex items-center justify-center'>Home
                </motion.li>
              </Link>

              <Link href={'/about'}>
                <motion.li 
                  whileHover={{ scale:1.1}}
                  whileTap={{ scale:0.9, color:'red'}}
                  className='flex items-center justify-center'>About Us
                </motion.li>
              </Link>

              <Link href={'serv'}>
                <motion.li 
                  whileHover={{ scale:1.1}}
                  whileTap={{ scale:0.9, color:'red'}}
                  className='flex items-center justify-center'>Services
                </motion.li>
              </Link>

              <Link href={'/certificate'}>
                <motion.li 
                  whileHover={{ scale:1.1}}
                  whileTap={{ scale:0.9, color:'red'}}
                  className='flex items-center justify-center'>Certificate
                </motion.li>
              </Link>

              <Link href={'/contact'}>
                <motion.li 
                  whileHover={{ scale:1.1}}
                  whileTap={{ scale:0.9, color:'red'}}
                  className='flex items-center justify-center'>Contact Us
                </motion.li>
              </Link>

              
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
