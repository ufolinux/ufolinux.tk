import React from 'react'
import "./ProfileCard.comp.css"
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrSupport } from "react-icons/gr";

const ProfileCard = ({ image, name, role, github, telegram, linkedin, website, x }) => {
    return (
        <div className='flex flex-col'>
            <div class="container noselect">
                <div class="canvas">
                    <div class="tracker tr-1"></div>
                    <div class="tracker tr-2"></div>
                    <div class="tracker tr-3"></div>
                    <div class="tracker tr-4"></div>
                    <div class="tracker tr-5"></div>
                    <div class="tracker tr-6"></div>
                    <div class="tracker tr-7"></div>
                    <div class="tracker tr-8"></div>
                    <div class="tracker tr-9"></div>
                    <div class="tracker tr-10"></div>
                    <div class="tracker tr-11"></div>
                    <div class="tracker tr-12"></div>
                    <div class="tracker tr-13"></div>
                    <div class="tracker tr-14"></div>
                    <div class="tracker tr-15"></div>
                    <div class="tracker tr-16"></div>
                    <div class="tracker tr-17"></div>
                    <div class="tracker tr-18"></div>
                    <div class="tracker tr-19"></div>
                    <div class="tracker tr-20"></div>
                    <div class="tracker tr-21"></div>
                    <div class="tracker tr-22"></div>
                    <div class="tracker tr-23"></div>
                    <div class="tracker tr-24"></div>
                    <div class="tracker tr-25"></div>
                    <div id="card">
                        {/* <p id="prompt">HOVER OVER :D</p> */}
                        <div className='flex flex-col text-center gap-2 text-black'>
                            <img src={`/images/contributors/${image}`} alt={`${name} ${role}`} className='size-28 m-auto rounded-full' />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-xl font-bold'>{name}</h2>
                                <h3 className='text-md font-semibold'>{role}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-evenly mt-3 mb-5 flex-nowrap w-[210px] *:*:bg-white *:*:p-2 *:*:rounded-full *:*:size-10 *:*:text-black hover:*:*:bg-red-400 hover:*:*:text-white *:*:transition-all *:*:shadow-md *:*:shadow-teal-900'>
                {github && <a href={`https://github.com/${github}`}><FaGithub /></a>}
                {telegram && <a href={`https://t.me/${telegram}`}><FaTelegram /></a>}
                {x && <a href={`https://x.com/${x}`}><FaSquareXTwitter /></a>}
                {linkedin && <a href={`https://linkedin.com/in/${linkedin}`}><FaLinkedin /></a>}
                {website && <a href={`https://${website}`}><GrSupport /></a>}
            </div>
        </div>
    )
}

export default ProfileCard