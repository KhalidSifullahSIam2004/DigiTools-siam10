import React from 'react'

const BannerImage = '/assets/banner.png';
const PlayImage = '/assets/Play.png';

const HeroSection = () => {
  return (
    <div className='container mx-auto my-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>

   
      <img
        className='mx-auto order-1 lg:order-2 w-full max-w-xl lg:max-w-lg'
        src={BannerImage}
        alt="banner image"
      />

  
      <div className='order-2 lg:order-1'>

        <div className='flex justify-center lg:justify-start'>
          <button className='font-medium bg-[#cbc9e4] text-[#1900ff] py-3 px-4 rounded-full mb-8'>
            New: AI-Powered Tools Available
          </button>
        </div>

        <h2 className='text-[#101727FF] text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-center lg:text-left'>
          Supercharge Your Digital Workflow
        </h2>

        <p className='text-[#627382FF] text-base md:text-lg lg:text-xl mb-8 text-center lg:text-left'>
          Access premium AI tools, design assets, templates, and productivity software—all in one place.
        </p>

        <div className='flex flex-col md:flex-row gap-4 justify-center lg:justify-start'>

          <button className='bg-linear-to-r from-[#a139f6] to-[#7504fe] font-semibold text-white rounded-full px-6 py-3 cursor-pointer hover:text-green-400 hover:-translate-y-2 transition-all duration-300 mt-4 hover:scale-95'>
            Explore Products
          </button>

          <button className="bg-white font-semibold text-[#7b47e3] rounded-full px-6 py-3 flex items-center justify-center gap-2 border border-[#7b47e3] hover:bg-linear-to-r from-[#a139f6] to-[#7504fe] hover:text-white cursor-pointer hover:-translate-y-2 transition-all duration-300 mt-4 hover:scale-95">
            <img src={PlayImage} />
            Watch Demo
          </button>

        </div>

      </div>

    </div>
  )
}

export default HeroSection
