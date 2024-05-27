import React from 'react'
import { FaGithub, FaGitlab, FaTelegram } from "react-icons/fa";
import { PiMatrixLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='w-full bg-teal-950 p-5 text-white' id="contact">
            <h3 className='text-2xl font-bold'>Community Links</h3>
            <hr className='w-1/5 border-b-2 border-red-600 mt-2 mb-6' />
            <div className='flex flex-nowrap text-3xl gap-4 *:size-10 *:bg-white *:text-black hover:*:text-white hover:*:bg-red-500 *:rounded-full *:p-1 *:transition-all text-center'>
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
            </div>

            <hr className='border-gray-400 my-8' />
            <div className='flex flex-col gap-3 font-semibold text-sm lg:text-lg'>
                <p>Developed by
                    <a className='text-red-500' href="https://cybersecbyte.tk"> Cybersecbyte</a>
                </p>
                <p>Ufo Linux® is a registered trademark of Cybersecbyte.</p>
                <p>Linux® is a registered trademark of Linus Torvalds in the United States and other countries.</p>
                <p className='text-orange-400'>Copyright ©2022. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer