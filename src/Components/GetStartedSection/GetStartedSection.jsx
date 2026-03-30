import React from 'react'
import UserImage from '../../assets/user.png'
import PackageImage from '../../assets/package.png'
import RocketImage from '../../assets/rocket.png'

const GetStartedSection = () => {
  return (
    <div className='text-center my-40 container mx-auto'>
      <h1 className='text-[#101727FF] text-5xl font-extrabold mb-4'>Get Started in 3 Steps</h1>
      <p className='text-[#627382FF] mb-10'>Start using premium digital tools in minutes, not hours.</p>

      <div className=' grid justify-center gap-4 md:flex md:justify-between lg:mx-32'>


        <div className="card bg-base-100 w-96 shadow-sm hover:-translate-y-2 transition-all duration-300 mt-4">
          <div className='flex justify-end'>
            <p className='bg-linear-to-b from-[#a139f6] to-[#7504fe] rounded-full w-6 text-white mt-6 mr-4'>01</p>
          </div>


  
  <div className="card-body items-center text-center space-y-4 ">
    <img src={UserImage} className='bg-[#cac8cd] rounded-full p-4' />
    <h2 className="text-[#101727FF] text-2xl font-bold">Create Account</h2>
    <p className="text-[#627382FF]">Sign up for free in seconds. No credit card required to get started.</p>
    <div>
    </div>
  </div>
</div>



    
        <div className="card bg-base-100 w-96 shadow-sm hover:-translate-y-2 transition-all duration-300 mt-4">
          <div className='flex justify-end'>
            <p className='bg-linear-to-b from-[#a139f6] to-[#7504fe] rounded-full w-6 text-white mt-6 mr-4'>02</p>
          </div>


  
  <div className="card-body items-center text-center space-y-4">
    <img src={PackageImage} className='bg-[#cac8cd] rounded-full p-4' />
    <h2 className="text-[#101727FF] text-2xl font-bold">Choose Products</h2>
    <p className="text-[#627382FF]">Browse our catalog and select the tools that fit your needs.</p>
    <div>
    </div>
  </div>
</div>
      


     
        <div className="card bg-base-100 w-96 shadow-sm hover:-translate-y-2 transition-all duration-300 mt-4">
          <div className='flex justify-end'>
            <p className='bg-linear-to-b from-[#a139f6] to-[#7504fe] rounded-full w-6 text-white mt-6 mr-4'>03</p>
          </div>


  
  <div className="card-body items-center text-center space-y-4">
    <img src={RocketImage} className='bg-[#cac8cd] rounded-full p-4' />
    <h2 className="text-[#101727FF] text-2xl font-bold">Start Creating</h2>
    <p className="text-[#627382FF]">Download and start using your premium tools immediately.</p>
    <div>
    </div>
  </div>
</div>


      </div>


      </div>


   


    


  
  )
}

export default GetStartedSection
