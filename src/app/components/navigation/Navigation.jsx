import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div className="menuBar">
            <Link href="/Home">
                <img src="./assets/img/scaledlogo.png" className="Logo" alt="Ufo Linux Logo" />
            </Link>
            <input value="&#9776;" type="text" id="menuIcon" onClick={toggleNav} readOnly />
            <div className={`Snav ${isNavVisible ? 'block' : 'hidden'}`}>
                <Link href="/Home" alt="index.html" onClick={toggleNav} className="nav">
                    Home
                </Link>
                <Link href="/Home#todo" alt="#todo" onClick={toggleNav} className="nav">
                    Docs
                </Link>
                <Link href="Contributors" onClick={toggleNav} alt="contributors.html" className="nav">
                    Contributors
                </Link>
                <Link href="Downloads" onClick={toggleNav} alt="download.html" className="nav">
                    Download
                </Link>
                <Link href="Mirror" onClick={toggleNav} alt="mirror.html" className="nav">
                    Mirror List
                </Link>
                <hr />
                <Link href="/Home#contact" onClick={toggleNav} className="nav" id="#contact">
                    Contact Us
                </Link>
                <div className="container-contact">
                    <Link className="navC" target="_blank" rel="noopener noreferrer" href="http://github.com/ufolinux">
                        <i className="bi bi-github"></i>
                    </Link>
                    <Link className="navC" target="_blank" rel="noopener noreferrer" href="http://gitlab.com/ufolinux">
                        <i className="fa fa-gitlab"></i>
                    </Link>
                    <Link className="navC" target="_blank" rel="noopener noreferrer" href="http://t.me/ufolinux">
                        <i className="bi bi-telegram"></i>
                    </Link>
                    <Link
                        className="navC"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://matrix.to/#/#ufolinux:matrix.org"
                    >
                        <i className="bi bi-mastodon"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
