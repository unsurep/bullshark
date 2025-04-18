'use client'
import { useEffect } from "react";
import axios from "axios";
import { motion} from 'motion/react'




import Image from "next/image";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import React from 'react';
// swiper import
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay,  } from 'swiper/modules';

import YouTube from 'react-youtube';




const Hero3 = () => {

  // youtube player
  const opts = {
    playerVars: {
      autoplay: 1,  // Autoplay enabled
      modestbranding: 1, // Hides YouTube logo
      rel: 0, // Prevents showing related videos
      vq: "hd1080", // Forces HD playback
      
    },
  }



  const [data, setData] = useState(null);
  const [error, setError] = useState (null);

  useEffect(() =>{
    async function fetchLiveData() {
      try {
        const response = await axios.get('/api/live');
        setData(response.data);
      } 
      catch (error) {
        console.error('Error fetching data', error);
        setError('Error loading live data.');
      }
    }
    fetchLiveData();
  },[]);




  // swiper auto
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
  };



  return (
    <div>
      {/* Section 3  Zero-Breach Protection*/}
      <section className="md:px-[4rem] py-24">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-red-500 uppercase font-semibold font-montserrat flex items-center gap-1">
            <span className="text-blue-500 ">
              <FaPersonWalkingDashedLineArrowRight />
            </span>
            Zero-Breach Protection
          </h3>

          <h1 className="text-4xl font-bold tracking-wide font-montserrat">
            Get Client-oriented Security Solutions
          </h1>

          <div className="text-3xl text-red-500">......</div>

          <p className="text-center text-xl tracking-wid font-roboto">
            We are diligent to deliver the utmost security to our clients for
            everyday operations, <br /> ensuring that they feel safe while
            operating their businesses. Explore our range of <br /> security
            services to protect valuable assets.
          </p>
        </div>

        {/* Four Divs */}
        <div className="flex items-center justify-between pt-16 gap-8">
          {/* A */}
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6 hover:bg-gray-200 transition-all duration-500 ease-initial">
            <div>
              <Image src="/image/a.png" width={60} height={60} alt="image" />
            </div>
            <div className="font-extrabold text-xl pt-3">Professional</div>
            <div className="font-extrabold text-xl">Agents</div>

            <div className="pt-4 ">
              <p>
                Our agents with rich experience create a secure and safe
                environment for any industry, event, and purpose.
              </p>
            </div>
          </div>

          {/* B */}
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6 hover:bg-gray-200 transition-all duration-500 ease-initial">
            <div>
              <Image src="/image/b.png" width={60} height={60} alt="image" />
            </div>
            <div className="font-extrabold text-xl pt-3">Best</div>
            <div className="font-extrabold text-xl">Equipment</div>

            <div className="pt-6 ">
              <p>
                Our security personnel comes equipped with skills, training, and
                arms to manage any problem with adeptness.
              </p>
            </div>
          </div>

          {/* C */}
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6 hover:bg-gray-200 transition-all duration-500 ease-initial">
            <div>
              <Image src="/image/c.png" width={60} height={60} alt="image" />
            </div>
            <div className="font-extrabold text-xl pt-3">
              Multifaceted security
            </div>
            <div className="font-extrabold text-xl">Services</div>

            <div className="pt-6 ">
              <p>
                Topshield ensures security for all our clients of ours;
                corporate houses, small businessmen, residential, and events,
                with the same zeal and passion.
              </p>
            </div>
          </div>

          {/* D */}
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6 hover:bg-gray-200 transition-all duration-500 ease-initial">
            <div>
              <Image src="/image/d.png" width={60} height={60} alt="image" />
            </div>
            <div className="font-extrabold text-xl pt-3">Advanced</div>
            <div className="font-extrabold text-xl">Techniques</div>

            <div className="pt-6 ">
              <p>
                Our workforce comes from reputed backgrounds and with expertise;
                they provide the best security services using the latest
                techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 Our Services*/}
      <section className="bg-gray-300/20 md:px-[4rem]">
        {/* A */}
        <div className="space-y-6 flex flex-col items-center text-center pt-16">
          <h3 className="text-red-500 uppercase font-semibold font-montserrat flex items-center gap-1">
            <span className="text-blue-500 ">
              <FaPersonWalkingDashedLineArrowRight />
            </span>
            OUR SERVICES
          </h3>
          <h1 className="text-4xl font-bold tracking-wide font-montserrat">We Care About Your Protection</h1>
          <div className="text-3xl text-red-500">......</div>
        </div>

        {/* B 3*/}
        <div className="flex items-center justify-center gap-8 pt-8">

          {/* Uniformed Security Guards */}
          <div className=" ring rounded ring-gray-600">
            <p >
              <Image src='/image/bs3.svg' width={300} height={300} alt="image" className="rounded"/>
            </p>
            <p className="text-center font-bold text-lg py-3 bg-gradient-to-r from-slate-900 to-rose-700 bg-clip-text text-transparent">Uniformed Security Guards</p>
          </div>

          {/* Escort Services */}
          <div className=" ring rounded ring-gray-600">
            <p>
              <Image src='/image/escort.svg' width={300} height={300} alt="image"/>
            </p>
            <p className="text-center font-bold text-lg py-3 bg-gradient-to-r from-slate-900 to-rose-700 bg-clip-text text-transparent">Escort Services</p>
          </div>

          {/* Bulletproof SUV */}
          <div className=" ring rounded ring-gray-600">
            <p>
              <Image src='/image/suv.svg' width={300} height={300} alt="image"/>
            </p>
            <p className="text-center font-bold text-lg py-3 bg-gradient-to-r from-slate-900 to-rose-700 bg-clip-text text-transparent">Bulletproof SUV</p>
          </div>
        </div>

        
        {/* C 3 */}
        <div className="flex items-center justify-center gap-8 py-8">

          {/* Hilux and Buses */}
          <div className=" ring rounded ring-gray-600">
            <p>
              <Image src='/image/notfbg.svg' width={300} height={300} alt="image"/>
            </p>
            <p className="text-center font-bold text-lg py-3 bg-gradient-to-r from-slate-900 to-rose-700 bg-clip-text text-transparent">Hilux and Buses</p>
          </div>

          {/* Bouncers */}
          <div className=" ring rounded ring-gray-600">
            <p>
              <Image src='/image/bouncers.svg' width={300} height={300} alt="image"/>
            </p>
            <p className="text-center font-bold text-lg py-3 bg-gradient-to-r from-slate-900 to-rose-700 bg-clip-text text-transparent">Bouncers </p>
          </div>

          {/* Due Diligence */}
          <div className=" ring rounded ring-gray-600">
            <p>
              <Image src='/image/dd.svg' width={300} height={300} alt="image"/>
            </p>
            <p className="text-center font-bold text-lg py-3 bg-gradient-to-r from-slate-900 to-rose-700 bg-clip-text text-transparent">Due Diligence</p>
          </div>
        </div>

        <div className="flex items-center w-full justify-center mx-auto pb-12">
          <button className='bg-black text-white font-bold p-4 hvr-float-shadow w-fit cursor-pointer rounded-md hover:rounded-md font-montserrat'>Contact Us</button>
        </div>
      </section>

      {/* Section 5 Industries */}
      <h1 className="text-center text-4xl font-black pt-12">Industries</h1>
      <section className="flex items-center justify-between px-[2rem] py-6 pb-16">
        

        {/* Marinetime securities */}
        <div className="flex items-center gap-4 bg-gray-50 py-3 px-8 border-2 border-gray-200 rounded-md">
          <div>
            <Image src='/image/ship.svg' width={100} height={100} alt="image"/>
          </div>
          <div className=" text-center">
            <p>Marinetime</p>
            <p className="pb-3">Security</p>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Read More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
              <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              </form>
              </div>
              </div>
            </dialog>
          </div>


        </div>

        {/* Industry and manufacturing */}
        <div className="flex items-center gap-4 bg-gray-50 py-3 px-8 border-2 border-gray-200 rounded-md">
          <div>
            <Image src='/image/industry.svg' width={100} height={100} alt="image"/>
          </div>
          <div className=" text-center">
            <p>Industry &</p>
            <p className="pb-3">Manufacturing</p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Read More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
              <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              </form>
              </div>
              </div>
            </dialog>
          </div>
        </div>


        {/* Aviation */}
        <div className="flex items-center gap-4 bg-gray-50 py-3 px-8 border-2 border-gray-200 rounded-md">
          <div>
            <Image src='/image/airplane.svg' width={100} height={100} alt="image"/>
          </div>
          <div className=" text-center">
            <p>Aviation</p>
            <p className="pb-3">Security</p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Read More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
              <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              </form>
              </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Offices */}
        <div className="flex items-center gap-4 bg-gray-50 py-3 px-8 border-2 border-gray-200 rounded-md">
          <div>
            <Image src='/image/office.svg' width={100} height={100} alt="image"/>
          </div>
          <div className=" text-center">
            <p>Offices & </p>
            <p className="pb-3">Infrastructure</p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Read More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
              <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              </form>
              </div>
              </div>
            </dialog>
          </div>
        </div>

      </section>

      {/*Section 6 Our Customers we work with */}
      <section className="bg-gray-300/20 md:px-[4rem]">
      {/* Div A */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-16">
          <h3 className="text-red-500 uppercase font-semibold font-montserrat flex items-center gap-1">
            <span className="text-blue-500 ">
              <FaPersonWalkingDashedLineArrowRight />
            </span>
            TESTIMONY FROM OUR CLIENTS
          </h3>

          <h1 className="text-4xl font-bold tracking-wide font-montserrat">
            People We Have Worked With
          </h1>

          <div className="text-3xl text-red-500">......</div>
        </div>
        
        {/* Div B / Image div  */}
        <div className="py-12 flex items-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
           }}

           transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
           }}>

            <Image src='/image/lock.png' width={500} height={500} alt="image"/>
          </motion.div>

          {/* Swiper */}
          <div className='w-fit py-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-blue-200/60 palncolor md:px-[3rem] flex flex-col  pt-5 rounded-xl ml-auto'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper ">

            {/* 1 */}
            <SwiperSlide className='px-4 '>
              <p ><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>

             {/* 2 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>




             {/* 3 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>



             {/* 4 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>


             {/* 5 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>Slide 6</SwiperSlide> */}
           
            <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
            </div>
            </Swiper>
          </div>
         
        </div>
      </section>

      {/* Section 7 compaines logo we have worked with */}
      <section className="flex items-center justify-between md:px-[4rem]">
        <Image src='/image/w1.jpg' width={100} height={100} alt="images"/>
        <Image src='/image/w2.jpg' width={100} height={100} alt="images"/>
        <Image src='/image/w3.jpg' width={100} height={100} alt="images"/>
        <Image src='/image/w1.jpg' width={100} height={100} alt="images"/>
        <Image src='/image/w2.jpg' width={100} height={100} alt="images"/>
        <Image src='/image/w3.jpg' width={100} height={100} alt="images"/>

      </section>
      

      {/* Section 8 Frequently asked Questions */}
      <section >
        <div className="flex flex-col items-center justify-center space-y-6 pt-16">
          <h3 className="text-red-500 uppercase font-semibold font-montserrat flex items-center gap-1">
            <span className="text-blue-500 ">
              <FaPersonWalkingDashedLineArrowRight />
            </span>
            Questions and Answers
          </h3>

          <h1 className="text-4xl font-bold tracking-wide font-montserrat">
            Frequently Asked Questions
          </h1>

          <div className="text-3xl text-red-500">......</div>
        </div>

        

        {/* FAQ Div*/}
        <div className="flex items-center md:px-[4rem] py-8">    
          <div className="flex flex-col gap-1">
          {/* FAQ 1 */}
          <div className="collapse collapse-plus bg-blue-300/20 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold text-red-500 text-base">Is Bull<span className="text-blue-500">Shark</span> Reliable?</div>
            <div className="collapse-content text-base"><span className='text-red-500 font-bold font-montserrat'>Bull</span><span className='text-blue-500 font-bold font-montserrat'>Shark</span> is a team of highly trained security professionals <br /> dedicated to ensuring safety and peace of mind. Each of our <br /> guards undergoes a rigorous training program before <br /> deployment, ensuring top-tier readiness and reliability.We <br /> offer a wide range of security services from Corporate security, <br /> Mobile patrols, Event security, Personal bodyguard services <br /> and more all tailored to your needs. With <span className='text-red-500 font-bold font-montserrat'>Bull</span><span className='text-blue-500 font-bold font-montserrat'>Shark</span>, your <br /> security is our priority.</div>
          </div>

            {/* FAQ 2 */}
          <div className="collapse collapse-plus bg-blue-300/20 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-red-500 text-base">Which industry can hire security services?</div>
            <div className="collapse-content text-base">Our security solutions are trusted and utilized across a wide <br /> range of industries. From airports and hospitals to banks, <br /> residential communities, museums, retail stores, commercial <br /> complexes, and warehouses. We provide reliable protection <br /> wherever it's needed most.</div>
          </div>
          
          {/* FAQ 3 */}
          <div className="collapse collapse-plus bg-blue-300/20 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-red-500 text-base">Will Security Guards come armed?</div>
            <div className="collapse-content text-base">Our security guards are equipped with latest technology, <br /> enabling them to monitor, report and respond to suspicious <br /> activity with maximum efficiency and precision.</div>
          </div>


           {/* FAQ 4 */}
           <div className="collapse collapse-plus bg-blue-300/20 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold text-red-500 text-base">Do the security guards maintain daily reports?</div>
            <div className="collapse-content text-base">Based on management requirements, our security <br /> guards deliver detailed daily reports for each shift. <br /> These reports cover incidents such as criminal <br /> activity, accidents, property damage or loss, injuries <br /> and any other notable occurrences.</div>
          </div>
        </div>


        {/* Image */}
          <div className="mx-auto">
            <Image src='/image/logobg.png' width={500} height={500} alt="image"/>
          </div>
        </div>
      </section>

      {/*Section 9 API Call for New update */}
      <section className="md:px-[4rem]">
        <h1 className="text-center text-red-500 font-semibold uppercase text-xl flex items-center gap-2 justify-center">Security News Update 
          <Image src='/image/news.svg' width={50} height={50} alt="image"/>
        </h1>
        
        {/* API Call */}
        <div className="py-8">
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Error message */}
              {error && <p className='text-red-500'>{error}</p>}

              {
                data ?
                  (data.articles && data.articles.length > 0 ?
                    (data.articles.map((article, index) => (
                      <div key={index} className="p-4 bg-white shadow-lg rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
                        {article.urlToImage && ( 
                          <img 
                            src={article.urlToImage}
                            alt={article.title}
                            className="w-full h-48 sm:h-64 object-cover rounded mb-4"
                          />)
                        }

                        <h2 className="text-base font-semibold">{article.title}</h2>

                        {/* Date added below */}
                          { article.publishedAt && (<p className="text-xs md:text-sm text-gray-500 mb-2">Published on:{new Date (article.publishedAt).toLocaleDateString()}</p>)
                        }

                        <p className=" mt-4 text-sm md:text-base text-gray-700">{article.description}</p>

                        <a href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black transition-opacity duration-300 text-sm md:text-base"
                          >
                          Read more
                        </a>

                      </div>))) : (<p className="text-center text-gray-600">No live articles found.</p> )) :

                      // Loader
                      <div className="w-full flex items-center justify-center">
                        <Image src='/image/spinner/gif' width={100} height={100} alt="loader" className=""/>
                      </div>
              }

            </main>
            
          













          

        </div>

      </section>

      {/* Section 10 Contact Me */}
      <section>
        <div className="flex flex-col items-center justify-center space-y-6 pt-16">
          <h3 className="text-red-500 uppercase font-semibold font-montserrat flex items-center gap-1">
            <span className="text-blue-500 ">
              <FaPersonWalkingDashedLineArrowRight />
            </span>
            Ask Us Anything
          </h3>

          <h1 className="text-4xl font-bold tracking-wide font-montserrat">
            Contact Us
          </h1>

          <div className="text-3xl text-red-500">......</div>
        </div>

        {/* The Contact Form */}
        <div className="flex gap-10 md:px-[4rem] py-12">

          <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  h-fit flex items-center justify-center overflow-hidden'>
            <YouTube videoId='XWOydAzTy3I' opts={opts} className='rounded-lg shadow-lg '/>
          </div>
          
          {/* form */}
          <div className="ml-auto rounded for " >
            <form className=' py-6 px-20 text-black form  border-2 space-y-2' >
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Your Name</label>
                <input type="text"
                  placeholder="Your name*"
                  required
                  className="border-black border-2 rounded px-4 py-1 text-gray-700"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Your Email</label>
                <input 
                  type="email"
                  placeholder="Your email address*"
                  required
                  className='border-black border-2 rounded px-4 py-1 text-gray-700'
                />
              </div>

              {/* Phone Number */}
              {/* <div className="flex flex-col gap-1">
                <label>Phone number</label>
                <input 
                  type="number"
                  placeholder="Your phone number"
                  className="border-black border-2 rounded"
                />
              </div> */}

              {/* Services Provided */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Servives Provided</label>
                <select name="" id="" className="border-2 rounded text-gray-600 px-4 py-1 font-semibold">
                  {/* <option value="">Select one</option> */}
                  <option value="" className="">Uniformed Security Guards</option>
                  <option value="" className="">Escort Services</option>
                  <option value="" className="">Bulletproof SUV</option>
                  <option value="" className="">Hilux and Buses</option>
                  <option value="" className="">Bouncers</option>
                  <option value="" className="">Due Diligence</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Message</label>
                <textarea
                  typeof="text"
                  placeholder="Enter message*"
                  required
                  className="border-black border-2 rounded text-gray-700 px-4 py-1 font-semibold"/>
              </div>

              <div className="w-full items-center text-center mt-4 bg-blue-700/30 hover:bg-red-300 coursor-pointer py-3 rounded cursor-pointer">
                <button className="font-bold">Submit</button>
              </div>
            </form>
          </div>

        </div>









      </section>

    </div>
  );
};

export default Hero3;
