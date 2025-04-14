'use client'


import Image from "next/image";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Hero3 = () => {
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
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6 ">
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
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6">
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
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6">
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
          <div className="flex flex-col items-center text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-12 px-6">
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

          <div >
            <p>
              <Image src='/image/1s.jpg' width={300} height={300} alt="image"/>
            </p>
            <p>Uniformed Security Guards</p>
          </div>

          <div>
            <p>
              <Image src='/image/1s.jpg' width={300} height={300} alt="image"/>
            </p>
            <p>Escort Services</p>
          </div>

          <div>
            <p>
              <Image src='/image/1s.jpg' width={300} height={300} alt="image"/>
            </p>
            <p>Bulletproof SUV</p>
          </div>
        </div>

        {/* C 3 */}
        <div className="flex items-center justify-center gap-8 py-8">
          <div>
            <p>
              <Image src='/image/1s.jpg' width={300} height={300} alt="image"/>
            </p>
            <p>Hilux and Buses</p>
          </div>

          <div>
            <p>
              <Image src='/image/1s.jpg' width={300} height={300} alt="image"/>
            </p>
            <p>Bouncers </p>
          </div>

          <div>
            <p>
              <Image src='/image/1s.jpg' width={300} height={300} alt="image"/>
            </p>
            <p>Due Diligence</p>
          </div>
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
          <div>
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
          <div>
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
          <div>
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
        <div className="py-12 flex  items-center">
          <div>
            <Image src='/image/lock.png' width={500} height={500} className=""/>
          </div>



          {/* Swiper */}
          <div className="">
            {/* <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </section>



    </div>
  );
};

export default Hero3;
