import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { IoCloudDownloadSharp } from "react-icons/io5";
import { GiMirrorMirror, GiBlackHandShield } from "react-icons/gi";
import { RiArrowUpWideFill } from "react-icons/ri";

function Home() {
    const [imgSrc, setImgSrc] = useState('/images/loaders/2.webp');
    const [vidSrc, setVidSrc] = useState('/videos/invasion.mp4');
    const [isPreloaderActive, setIsPreloaderActive] = useState(true);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 600) {
            setVidSrc("/videos/invasion-mobile.webm");
        } else {
            setVidSrc("/videos/invasion.mp4");
        }
    }, [isPreloaderActive]);

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 12);
        setImgSrc(`/images/loaders/${randomNumber}.webp`);
        setTimeout(() => {
            setIsPreloaderActive(false);
        }, 3300);
    }, []);

    return (
        <> {
            isPreloaderActive ?
                < div className='absolute w-screen h-screen self-center top-0 left-0 duration-75 overflow-hidden bg-black z-50' >
                    <img className='preloaderImg mt-[20rem] mb-[4rem] mx-auto h-[5rem] w-[5rem]' src={imgSrc} alt="Loading.." />
                </div >
                :
                <>
                    <Navbar />
                    {/* wrapper */}
                    <div className='flex flex-col w-full snap-both snap-mandatory *:snap-start *:text-white'>
                        {/* section 1 */}
                        <div className='fixed -z-10'>
                            <video id="mob-desk" className='lg:w-screen h-screen lg:h-auto brightness-75 object-cover' autoPlay loop muted>
                                {/* <source src="/videos/invasion-mobile.webm" type="video/webm" /> */}
                                <source src={vidSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className='flex flex-col justify-center text-center items-center gap-5 absolute m-auto h-screen w-full top-0 left-0  *:w-fit *:font-bold'>
                                <h1 className='text-3xl'>
                                    Welcome to Ufolinux
                                </h1>
                                <p className='text-lg lg:text-2xl'>The distribution made for everyday use</p>
                            </div>
                        </div>

                        {/* empty transparent block */}
                        <div className='w-full h-[95vh]'>

                        </div>

                        {/* section 2 */}
                        <div className='w-full h-full lg:h-[85vh] bg-gray-900 rounded-t-3xl shadow-2xl'>
                            <RiArrowUpWideFill className='m-auto mt-2 animate-bounce' size={25} />
                            <h2 className='w-fit m-auto text-2xl lg:text-4xl font-extrabold mt-10 tracking-wider'>What is UFOLINUX ?</h2>
                            <hr className='w-1/2 m-auto border-b-2 border-red-600 my-6' />
                            <div className='w-5/6 *:text-justify m-auto text-lg lg:text-xl bg-gray-800 rounded-3xl p-3 flex flex-col gap-5'>
                                <p>UfoLinux or UfoOS is a GNU / Linux Operating System built completely from the scratch.</p>

                                <p>It led by a team of passionate individuals who thrive on pushing the limits of knowledge in this project.</p>

                                <p>This project was started on 11th april 2022 and it's still a long way to go.</p>

                                <p>It uses fork of pacman package manager which is named as KEPLER.</p>
                            </div>
                            <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row flex-nowrap justify-around items-center my-12 w-5/6 m-auto *:bg-gray-600 text-2xl font-bold *:w-full lg:*:w-auto *:text-center lg:*:text-start *:rounded-3xl *:p-3 *:px-5 *:shadow-md *:hover:shadow-xl hover:*:bg-orange-600 hover:*:-translate-y-2 *:transition-all *:flex *:items-center *:gap-2 hover:*:animate-pulse'>
                                <NavLink to="/download" >
                                    <IoCloudDownloadSharp /> Download
                                </NavLink>

                                <NavLink to="/mirror" >
                                    <GiMirrorMirror /> Mirror List
                                </NavLink>

                                <NavLink to="/contributors" >
                                    <GiBlackHandShield /> Contributors
                                </NavLink>
                            </div>
                        </div>

                        {/* footer */}
                        <Footer />
                    </div>

                </>
        }
        </>

    );
}

export default Home;