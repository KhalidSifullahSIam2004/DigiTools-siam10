import React, { use, useState } from 'react'
import AllProducts from '../AllProducts/AllProducts';
import CartSection from '../CartSection/CartSection';


const ProductsSection = ({productsPromise}) => {
    const productsData = use(productsPromise);
    
    const [activeButton, setActiveButton] = useState(111);
    
  return (
    <div className='my-32 container mx-auto'>

        <h1 className='text-5xl text-[#101727FF] font-extrabold text-center mb-4'>Premium Digital Tools</h1>
        <p className='text-[#627382FF] text-center mb-4'>Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity.</p>

    <div className='flex justify-center'>
       <button className={`bg-white rounded-full px-6 py-3 flex items-center justify-center cursor-pointer ${activeButton === 111 &&'border border-[#7b47e3] bg-linear-to-r from-[#a139f6] to-[#7504fe] text-white'}`} onClick={() => setActiveButton(111)}>Products</button>

      <button className={`bg-white rounded-full px-6 py-3 flex items-center justify-center cursor-pointer ${activeButton === 222 && 'border border-[#7b47e3] bg-linear-to-r from-[#a139f6] to-[#7504fe] text-white'}`} onClick={() => setActiveButton(222)}>Cart(2)</button>  
    </div>

    {
      activeButton === 111 ? <AllProducts productsData={productsData} /> : <CartSection />
      
    }

    </div>
  )
}

export default ProductsSection
