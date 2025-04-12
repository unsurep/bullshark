'use client'

import React, { useEffect, useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'motion/react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero1 = () => {

  // react simple typewriter
  const [text] = useTypewriter({
    words: ['Partners', 'Experts', 'Solutions', 'Specialists!'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })



  // AOS 
  useEffect(() => {
    AOS.init({
      animatedClassName: 'aos-animate',
      useClassNames: false,
      duration: 400,
      easing: 'ease',
      once: false,
      anchorPlacement: 'top-bottom',
    });
    }, []);





  const [background, setBackground] = useState ('/image/s2.png')
  // const [write, setWrite] = useState ("Uniformed Security Guards | Escort Services| Bulletproof SUV | Hilux & Buses | Bouncers ")

  useEffect (() =>{
    const timeout = setTimeout(() =>{
      setBackground('/image/111.jpg');
      // setWrite('Trained. Trusted. Tested. | Your Safety, Our Priority | Vigilance Redefined | We Protect You ')
    }, 10000);

    return () => clearTimeout(timeout)

  }, []);


  // style={{backgroundImage: "url('/image/2.avif')"}}

  return (
    <>
      <section className='h-screen bg-no-repeat bg-cover bg-center px-[1rem] md:px-[4rem] relative' style={{backgroundImage: `url(${background})`}}>

       {/* Overlay to make text readable */}
       <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>


        {/* write up for image 2.avif */}
        <div 
          data-aos="zoom-in-up"
          data-aos-duration="1000"

          className=' flex flex-col items-center justify-center pt-3 lg:pt-16'>
          <div className='flex flex-col pt-[20vh] font-montserrat'>
            <h3 className='text-xl font-semibold text-white relative text-center font-montserrat'>Welcome to <span className='text-red-500 font-bold font-montserrat'>Bull</span><span className='text-blue-500 font-bold font-montserrat'>Shark</span> Security Services</h3>
         

            <h1 className='text-4xl md:text-5xl font-extrabold py-6 text-white relative tracking-[5px] text-center  leading-[1.15] sm:text-6xl font-montserrat'>Your Reliable <br /> Security {" "}
              <span className='text-red-500'>{text}</span>
              <Cursor cursorColor='red' />
            </h1>

            <h1 className='text-white relative text-2xl text-center font-montserrat'>Thinking about personal security? <br /> We have the best agents to take care of your at anytime.</h1>

            <div className='relative items-center flex  justify-center pt-8 lg:pt-10'>
              <motion.button 
                whileTap={{ scale:0.9 }}
                className='bg-black text-white font-bold p-4 hvr-float-shadow hover:bg-white hover:text-black cursor-pointer rounded-md hover:rounded-md font-montserrat'>Get in touch</motion.button>
            </div>
          </div>

         
        </div>

      </section>
      
    </>
  )
}

export default Hero1
