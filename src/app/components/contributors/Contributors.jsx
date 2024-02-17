import React from 'react';
import WaveA from '../waves/WaveA';
import { FaGithub, FaTelegram, FaTwitter, FaGlobe, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Contributors = () => {
    return (
        <>
            <WaveA />
            <div className="container-home" id="contributors">
                <div className="blockB"><br />
                    <h1> Contributors </h1><hr /><br />
                    <div className="c-slider ">
                        <div className="c-a">
                            <img src="./assets/img/contributorA.jpg" alt="CONTRIBUTOR-CARD" /><br /><br />
                            <h4> Navjot Singh (Cybersecbyte) </h4>
                            <h6> Project founder / maintainer </h6><br />
                            <div className='flex flex-row flex-nowrap justify-around items-center gap-4'>
                                <Link href="https://github.com/cybersecbyte" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </Link>
                                <Link href="https://t.me/cybersecbyte" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram />
                                </Link>
                            </div>
                        </div>
                        <div className="c-a c-b">
                            <img src="./assets/img/contributorB.jpg" alt="CONTRIBUTOR-CARD" /><br /><br />
                            <h4> H@x</h4>
                            <h6> Repo Hosting </h6><br />
                            <div className='flex flex-row flex-nowrap justify-around items-center gap-4'>
                                <Link href="https://t.me/h_2_o0" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram />
                                </Link>
                            </div>
                        </div>
                        <div className="c-a c-c">
                            <img src="./assets/img/contributorC.jpg" alt="CONTRIBUTOR-CARD" /><br /><br />
                            <h4> Martin Valba</h4>
                            <h6> Maintainer </h6><br />
                            <div className='flex flex-row flex-nowrap justify-around items-center gap-4'>
                                <Link href="https://t.me/hilledkinged" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram />
                                </Link>
                            </div>
                        </div>
                        <div className="c-a c-d">
                            <img src="./assets/img/contributorD.jpg" alt="CONTRIBUTOR-CARD" /><br /><br />
                            <h4> Naman Saini (ProgrammerXD) </h4>
                            <h6> Web Developer </h6><br />
                            <div className='flex flex-row flex-nowrap items-center gap-4'>
                                <Link href="https://programmerxd.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <FaGlobe />
                                </Link>
                                <Link href="https://github.com/realpxd" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </Link>
                                <Link href="https://in.linkedin.com/in/programmerxd" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </Link>
                                <Link href="https://x.com/dotpxd" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contributors;
