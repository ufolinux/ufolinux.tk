import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import ProfileCard from '../../components/ui/ProfileCard';

const Contributors = () => {
  return (
    <>
      <Navbar />

      <div className='p-4 bg-black text-white py-14 h-full pb-24'>

        <h2 className='flex items-center gap-2 text-3xl font-bold my-8'>Contributors</h2>
        <hr className='border-red-500 border-b-2 my-3' />

        <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-around my-8'>

          <ProfileCard name={"Navjot Singh (Cybersecbyte)"} role={"Project founder"} image={"contributorA.jpg"} github='cybersecbyte' telegram='cybersecbyte' />
          <ProfileCard name={"Stefan Kuny (H@x)"} role={"Repo Hosting"} image={"contributorB.jpg"} telegram='h_2_o0' />
          <ProfileCard name={"Martin Valba (HilledKinged)"} role={"Maintainer"} image={"contributorC.jpg"} telegram='hilledkinged' />
          <ProfileCard name={"Naman Saini (Realpxd)"} role={"Web Developer"} image={"contributorD.jpg"} github='realpxd' linkedin='programmerxd' website='programmerxd.vercel.app' x='dotpxd' />
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Contributors