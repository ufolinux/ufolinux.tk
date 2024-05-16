import React from 'react'
import { IoIosCloudDownload } from "react-icons/io";
import { PiCoffeeFill } from "react-icons/pi";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Download = () => {
    return (
        <>
            <Navbar />
            <div className='p-4 bg-black text-white py-14 h-full lg:h-screen pb-24'>
                <img className=' size-60 m-auto animate-bounce my-12' src="/images/loaders/5.webp" alt="download ufolinux" />
                <h2 className='flex items-center gap-2 text-2xl lg:text-3xl font-extrabold my-8'>Download UFO LINUX - Smooth & Reliable <PiCoffeeFill className='size-20 animate-pulse lg:size-auto' /></h2>
                <h3 className='text-lg lg:text-xl my-3'>You can download the first release of live iso from below
                    Live ISO</h3>
                <a href="https://files.martinvlba.eu/ufo/releases/development/ufolinux.iso" className=' w-fit'><p className='flex items-center font-bold text-md bg-white p-2 rounded-lg w-fit text-black gap-2 cursor-pointer hover:bg-teal-200'><IoIosCloudDownload /> Live ISO </p></a>

                <hr className='border-b-2 border-red-500 my-6' />

                <h3 className='text-lg lg:text-xl my-3'>Virtualbox ova</h3>
                <p className='flex items-center font-bold text-md bg-white p-2 rounded-lg w-fit text-black gap-2 cursor-pointer hover:bg-teal-200'><IoIosCloudDownload /> Coming Soon</p>
            </div>
            <Footer />
        </>
    )
}

export default Download