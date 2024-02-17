import React from 'react'
import WaveA from '../waves/WaveA'
import { FiActivity } from "react-icons/fi";
import { IoCloudDownload } from "react-icons/io5";
import Link from 'next/link';

const Downloads = () => {
    return (
        <>
            <WaveA />
            <div class="blockD">
                <h2 className='flex gap-4 items-center'> Download UFO LINUX - Smooth & Reliable <FiActivity />
                </h2><br /><br />
                <h3>You can download the first release of live iso from below</h3>
                <Link href="https://files.martinvlba.eu/ufo/releases/development/ufolinux.iso" target="_blank" rel="noopener noreferrer">
                    <IoCloudDownload /> Live ISO </Link><br /> <hr /> <br /><br />
                <div class="d-a">
                    <h3> Virtualbox ova</h3>
                    <Link href="https://t.me/ufolinux" rel='noopener noreferrer'>
                        <IoCloudDownload /> Coming Soon</Link>
                </div>
                <div class="particle top-left"></div>
                <div class="particle top-right"></div>
            </div>
        </>
    )
}

export default Downloads