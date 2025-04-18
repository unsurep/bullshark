import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";


// 

const Footer =()=>{
    return (
        <>
            <footer className="bg-cover bg-no-repeat bg-center h-[75vh] md:p-[4rem] bg-white/60 mt-12 text-white font-medium" style={{backgroundImage: "url('/image/footer2.svg')"}}>

                <div className="flex items-center justify-between py-8">
                    <div>
                        <Link href={'/'} className="">
                            <Image src='/image/bslogobg.png' width={150} height={150} alt="logo"/>
                        </Link>

                        <p className="pt-3">BullShark is a premier security organization, <br /> delivering high-quality, customized solutions <br /> to safeguard people and their assets. Trusted <br /> by our clients, we have earned a strong <br /> reputation as a reliable name in the protection <br /> and security industry.</p>
                    </div>

                    <div className="flex  justify-between mx-auto gap-24">
                    {/* 1 */}
                    <div >
                        <h1 className="font-bold text-xl">Quick Links</h1>
                        <ul className="pt-6 flex flex-col gap-3">
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Home</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">About Us</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Our Services</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Certificates</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div >
                        <h1 className="font-bold text-xl">Our Services</h1>
                        <ul className="pt-6 flex flex-col gap-3">
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Uniformed Security Guards</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Escort Services</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Bulletproof SUV</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Hilux and Buses</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Bouncers</li>
                            <li className="hvr-wobble-horizontal hover:text-blue-500 cursor-pointer">Due Diligence</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div>
                        <h1 className='font-bold text-xl'>Contact Us</h1>
                        <ul className="pt-6 space-y-3">
                            <li className="flex items-center gap-2"><FaPhoneAlt />0809-872-7936 | 091-815-5494</li>
                            <li className="flex items-center gap-2"><IoMdMail />bullsharkltd@gmail.com</li>
                            <li className="flex items-center gap-2"><FaMapMarkerAlt />location</li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* sm */}
                <p className="text-center text-sm text-gray-500 pt-5">&copy; 2025 <span className="font-semibold"><span className="text-red-500">Bull</span><span className="text-blue-500">Shark</span> Security Services</span> | All rights reserved | Designed & Developed by <span className="italic">1sureplayer</span>
</p>


            </footer>
        </>
    )
};
export default Footer