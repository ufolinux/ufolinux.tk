import React from 'react'
import WaveA from '../waves/WaveA'

const Mirror = () => {
    return (
        <>
            <WaveA />
            <div class="blockE">
                <h2 className='text-lime-500 text-4xl font-bold' styles="color:lime"> Mirrorlist for official packages</h2><br /><br />
                <h4 className='text-lime-500 text-xl font-semibold' styles="color:gold;">Edit /etc/kepler.conf file and add these</h4><br /><br />
                <h2 className='text-4xl font-bold'> Main official </h2> <hr /> <br /><br />
                <div class="m-a">
                    [core]<br />
                    Server = http://files.martinvlba.eu/ufo/$repo/packages/
                    <br /><br /><br />
                    [extra]<br />
                    Server = http://files.martinvlba.eu/ufo/$repo/packages/
                    <br /><br /><br />
                    [cross_tools]<br />
                    Server = http://files.martinvlba.eu/ufo/$repo/packages/
                    <br /><br /><br />
                    [perl]<br />
                    Server = http://files.martinvlba.eu/ufo/$repo/packages/
                    <br /><br /><br />
                    [python]<br />
                    Server = http://files.martinvlba.eu/ufo/$repo/packages/
                    <br /><br /><br />
                </div><br />
                <h2 className='text-4xl font-bold'> Development </h2> <hr /> <br /><br />
                <div class="m-a">
                    [core]<br />
                    Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/
                    <br /><br /><br />
                    [extra]<br />
                    Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/
                    <br /><br /><br />
                    [extra32]<br />
                    Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/
                    <br /><br /><br />
                    [cross_tools]<br />
                    Server = https://git.n64.cc/ufolinux/repository/$arch/cross_tools/-/raw/main/packages/
                    <br /><br /><br />
                    [perl]<br />
                    Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/
                    <br /><br /><br />
                    [python]<br />
                    Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/
                    <br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default Mirror