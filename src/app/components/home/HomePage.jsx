import React, { useEffect } from 'react';
import WaveA from '../waves/WaveA';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const HomePage = () => {
    useEffect(() => {
        const chngVid = document.getElementById("mob-desk");
        const screenWidth = window.innerWidth;

        if (screenWidth < 600) {
            chngVid.setAttribute("src", "./assets/vid/invasion-mobile.webm");
        } else {
            chngVid.setAttribute("src", "./assets/vid/invasion.mp4");
        }
    }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

    return (
        <>
            <div className="video-header" id="home">
                <video id="mob-desk" autoPlay loop muted>
                    <source src="./assets/vid/invasion-mobile.webm" type="video/webm" />
                    <source src="./assets/vid/invasion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="viewport-header">
                    <h1>
                        Welcome to Ufolinux
                        <span>The distribution made for everyday use</span>
                    </h1>
                </div>
            </div>

            <WaveA />
            <div className="blockA" id="blockA">
                <h1>What is UfoLinux</h1>
                <hr />
                <p>
                    UfoLinux or UfoOS is a GNU / Linux Operating System built completely from scratch.
                </p>
                <p>
                    It is led by a team of passionate individuals who thrive on pushing the limits of knowledge in this project.
                </p>
                <p>
                    This project was started on 11th April 2022 and it's still a long way to go.
                </p>
                <p>
                    It uses a fork of the Pacman package manager which is named as KEPLER.
                </p>
            </div>
        </>
    );
};

export default HomePage;
