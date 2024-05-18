import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../sidebar/Sidebar';
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

    const openSidebar = () => {
        setSidebarVisible(true);
    };
    const closeSidebar = () => {
        setSidebarVisible(false);
    }

    useEffect(() => {
        setSidebarVisible(false);
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closeSidebar]);


    function ToastDisplay() {
        return (
            <div className='m-2'>
                <p className='text-md'>Coming Soon !</p>
            </div>
        )
    };

    return (
        <>
            <nav className='fixed z-50 w-screen h-[6vh] flex justify-between py-1 px-3 lg:px-7 shadow-md bg-black text-white'>

                {/* Logo */}
                <NavLink to="/" className='flex justify-center w-fit lg:w-auto items-center gap-3 bg-gray-800 rounded-full px-3 pr-4'>
                    <img className='w-[5vw] lg:w-[2vw] animate-pulse' src="/images/logos/scaledlogo.png" alt="ufolinux logo" />
                    <p className='font-semibold text-orange-300'>UFO-LINUX</p>
                </NavLink>

                {/* Navlinks */}
                <div className="font-semibold text-lg px-3 text-center hidden lg:flex justify-center items-center" >
                    <ul className='w-full flex justify-center items-center gap-7 *:text-center'>
                        <li className={location.pathname === "/" ? 'text-red-400 underline underline-offset-8' : ''}>
                            <NavLink to="/" >
                                Home
                            </NavLink>
                        </li>

                        <li onClick={() => toast(<ToastDisplay className='bg-neutral-700 m-2' />)}>
                            {/* <NavLink to="/docs" > */}
                            Docs
                            {/* </NavLink> */}
                        </li>

                        <li onClick={() => toast(<ToastDisplay className='bg-neutral-700 m-2' />)}>
                            {/* <NavLink to="/blogs" > */}
                            Blogs
                            {/* </NavLink> */}
                        </li>

                        <li className={location.pathname === "/contributors" ? 'text-red-400 underline underline-offset-8' : ''}>
                            <NavLink to="/contributors" >
                                Contributors
                            </NavLink>
                        </li>

                        <li className={location.pathname === "/download" ? 'text-red-400 underline underline-offset-8' : ''}>
                            <NavLink to="/download" >
                                Download
                            </NavLink>
                        </li>

                        <li className={location.pathname === "/mirror" ? 'text-red-400 underline underline-offset-8' : ''}>
                            <NavLink to="/mirror" >
                                Mirror list
                            </NavLink>
                        </li>

                        <li className={location.pathname === "#contact" ? 'text-red-400 underline underline-offset-8' : ''}>
                            <a href="#contact" >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* menu bar */}
                <button className='text-white block lg:hidden' onClick={openSidebar}><HiMenu size="30px" /></button>

                {/* Sidebar */}
                <Sidebar closeSidebar={closeSidebar} sidebarVisible={sidebarVisible} />
            </nav>

            <ToastContainer
                position={`${sidebarVisible ? 'top-left' : 'bottom-right'}`}
                autoClose={sidebarVisible ? 700 : 2000}
                hideProgressBar={false}
                newestOnTop={!sidebarVisible}
                closeOnClick={true}
                closeButton={true}
                limit={sidebarVisible ? 2 : 5}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={!sidebarVisible}
                theme="dark" />
        </>
    )
}

export default Navbar;