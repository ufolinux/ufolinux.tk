import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Code from '../../components/ui/Code';

const Mirror = () => {

  return (
    <>
      <Navbar />

      <div className='p-4 bg-black text-white py-14 h-full pb-24'>
        <img className=' size-60 m-auto animate-pulse my-12' src="/images/loaders/9.webp" alt="download ufolinux" />
        <h2 className='flex items-center gap-2 text-2xl lg:text-3xl font-extrabold my-8'>Mirrorlist for official packages</h2>
        <h3 className='text-lg lg:text-xl my-3 text-yellow-300'>Edit /etc/kepler.conf file and add these</h3>

        <h2 className='flex items-center gap-2 text-2xl lg:text-3xl font-bold my-8'>Main official</h2>
        <hr className='border-red-500 border-b-2 my-3' />

        <div className='flex flex-col gap-2'>
          <div>
            <p>[core]</p>
            <Code code={"Server = http://files.martinvlba.eu/ufo/$repo/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[extra]</p>
            <Code code={"Server = http://files.martinvlba.eu/ufo/$repo/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[cross-tools]</p>
            <Code code={"Server = http://files.martinvlba.eu/ufo/$repo/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[perl]</p>
            <Code code={"Server = http://files.martinvlba.eu/ufo/$repo/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[python]</p>
            <Code code={"Server = http://files.martinvlba.eu/ufo/$repo/packages/"} language={'shell'} />
          </div>
        </div>


        <h2 className='flex items-center gap-2 text-2xl lg:text-3xl font-bold my-8'>Development</h2>
        <hr className='border-red-500 border-b-2 my-3' />

        <div className='flex flex-col gap-2'>
          <div>
            <p>[core]</p>
            <Code code={"Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[extra]</p>
            <Code code={"Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[extra32]</p>
            <Code code={"Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[cross-tools]</p>
            <Code code={"Server = https://git.n64.cc/ufolinux/repository/$arch/cross_tools/-/raw/main/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[perl]</p>
            <Code code={"Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/"} language={'shell'} />
          </div>
          <div>
            <p>[python]</p>
            <Code code={"Server = https://git.n64.cc/ufolinux/repository/$arch/$repo/-/raw/main/packages/"} language={'shell'} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Mirror