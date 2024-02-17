import React from 'react'
import Link from 'next/link'
import { FaGithub, FaGitlab, FaTelegram, } from "react-icons/fa";
import { TbBrandMatrix } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="footer " id="contact">
            <div>
                Community links <br /><hr /><br />
                <div className="flex flex-row flex-nowrap gap-4" >
                    <Link target="_blank" rel="noopener noreferrer" href="http://github.com/ufolinux">
                        <FaGithub className="fnav" />
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="http://gitlab.com/ufolinux">
                        <FaGitlab className="fnav" />
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="http://t.me/ufolinux">
                        <FaTelegram className="fnav" />
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://matrix.to/#/#ufolinux:matrix.org">
                        <TbBrandMatrix className="fnav" />
                    </Link>
                </div>
                <br /><br /><hr /><br />
            </div>

            <p>Developed by <Link href="https://github.com/cybersecbyte" target="_blank" rel="noopener noreferrer">Cybersecbyte</Link><br /><br />
                Ufo Linux&reg; is a registered trademark of Cybersecbyte.<br />
                Linux&reg; is a registered trademark of Linus Torvalds in the
                United States and other countries.<br /><br />
                Copyright &copy;2022. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer