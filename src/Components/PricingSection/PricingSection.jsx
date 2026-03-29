import React from 'react'

const PricingSection = () => {
  return (
    <div className='text-center my-40 container mx-auto py-48'>
      <h2 className='text-[#101727FF] text-center text-5xl font-extrabold  mb-4'>Simple, Transparent Pricing</h2>
      <p className='text-[#627382FF] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className=' grid justify-center gap-4 md:grid-cols-2 lg:flex lg:justify-between'>

{/* 1st */}
        <div className="card bg-base-400 shadow-2xl text-left p-6 my-6">
  <div className="card-body">

    
    <span className="text-[#101727FF] text-2xl font-bold">Starter</span>
    <span className="text-[#627382FF] text-left">Perfect for getting started</span>
    
      <p className="text-[#101727FF] text-4xl font-bold mt-6">$0<span className='text-[#627382FF] text-xl'>/month</span></p>
   
    <ul className="mt-6 flex flex-col gap-2 text-xs ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-6">
        <button className='bg-linear-to-r from-[#a139f6] to-[#7504fe] font-bold w-64 text-white rounded-full px-6 py-3 cursor-pointer hover:text-green-400'>
            Get Started Free
          </button>
    </div>
  </div>
</div>


{/* 2nd */}
        <div className="card bg-linear-to-r from-[#a139f6] to-[#7504fe] shadow-2xl text-left p-6 my-6 text-white">
  <div className="card-body">

    
    <span className="text-2xl font-bold">Pro</span>
    <span className="text-left">Best for professionals</span>
    
      <p className="text-4xl font-bold mt-6">$29<span className='text-xl'>/month</span></p>
   
    <ul className="mt-6 flex flex-col gap-2 text-xs ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-6">
       <button className="bg-white font-semibold text-[#7b47e3] rounded-full flex items-center justify-center gap-2 border border-[#7b47e3] w-64 px-6 py-3 cursor-pointer">Start Pro Trial</button>
    </div>
  </div>
</div>




{/* 3rd */}
      <div className="card bg-base-400 shadow-2xl text-left p-6 my-6">
  <div className="card-body">

    
    <span className="text-[#101727FF] text-2xl font-bold">Enterprise</span>
    <span className="text-[#627382FF] text-left">For teams and businesses</span>
    
      <p className="text-[#101727FF] text-4xl font-bold mt-6">$99<span className='text-[#627382FF] text-xl'>/month</span></p>
   
    <ul className="mt-6 flex flex-col gap-2 text-xs ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
    </ul>
    <div className="mt-6">
        <button className='bg-linear-to-r from-[#a139f6] to-[#7504fe] font-bold w-64 text-white rounded-full px-6 py-3 cursor-pointer hover:text-green-400'>
            Get Started Free
          </button>
    </div>
  </div>
</div>




      </div>


    </div>
  )
}

export default PricingSection

