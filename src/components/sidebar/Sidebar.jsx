import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaTimes, FaGithub, FaGitlab, FaTelegram } from "react-icons/fa";
import { PiMatrixLogoFill } from "react-icons/pi";

const Sidebar = ({ closeSidebar, sidebarVisible }) => {
    const sidebarRef = useRef(null);
    const location = useLocation();

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
        <section ref={sidebarRef} className={`overflow-hidden h-screen fixed right-0 top-0 bg-black z-10 shadow-xl shadow-slate-900 transition-all duration-200 *:text-white ${sidebarVisible ? 'w-[75%]' : 'w-0'}`}>
            <button className='bg-none font-bold text-2xl mt-4 ml-4' onClick={closeSidebar}><FaTimes /></button>

            {/* Navlinks */}
            <div className="font-semibold text-lg py-3 text-center flex flex-col justify-start items-center h-[80%]" >
                <ul className='w-full h-full flex flex-col justify-around items-center gap-9'>
                    <li className='text-center'>
                        <NavLink to="/" className={location.pathname === "/" ? 'text-red-400 underline underline-offset-8' : ''}>
                            Home
                        </NavLink>
                    </li>

                    <li className='text-center' onClick={() => toast(<ToastDisplay className='bg-neutral-700 m-2' />)}>
                        Docs
                    </li>

                    <li className='text-center' onClick={() => toast(<ToastDisplay className='bg-neutral-700 m-2' />)}>
                        Blogs
                    </li>

                    <li className='text-center'>
                        <NavLink to="/contributors" className={location.pathname.toLowerCase() === "/contributors" ? 'text-red-400 underline underline-offset-8' : ''}>
                            Contributors
                        </NavLink>
                    </li>

                    <li className='text-center'>
                        <NavLink to="/download" className={location.pathname.toLowerCase() === "/download" ? 'text-red-400 underline underline-offset-8' : ''}>
                            Download
                        </NavLink>
                    </li>

                    <li className='text-center'>
                        <NavLink to="/mirror" className={location.pathname.toLowerCase() === "/mirror" ? 'text-red-400 underline underline-offset-8' : ''}>
                            Mirror list
                        </NavLink>
                    </li>

                    <hr className='border-b-2 border-teal-700 w-full rounded-full' />
                    <li className='flex w-full flex-nowrap items-center justify-center text-3xl gap-5 *:size-10 hover:*:text-red-500 *:transition-all'>
                        <a href="http://github.com/ufolinux">
                            <FaGithub />
                        </a>
                        <a href="http://gitlab.com/ufolinux">
                            <FaGitlab />
                        </a>
                        <a href="http://t.me/ufolinux">
                            <FaTelegram />
                        </a>
                        <a href="https://matrix.to/#/#ufolinux:matrix.org">
                            <PiMatrixLogoFill />
                        </a>
                    </li>
                </ul>
            </div>

        </section >
    )
}

export default Sidebar;