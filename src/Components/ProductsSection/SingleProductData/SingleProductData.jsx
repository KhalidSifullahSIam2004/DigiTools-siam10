import React from 'react'
import { toast } from 'react-toastify';

const SingleProductData = ({singleProductData, totalCart, setTotalCart}) => {
    const {id, name, description, price, tag, features, icon} = singleProductData;
    const isSelected = totalCart.some(cartItem => cartItem.id === id);

    const handleSelected = () => {
      setTotalCart([...totalCart, singleProductData]);
      toast('Item Added to Cart SuccessFully!');
    }
  return (
    <div className="card w-96 bg-base-100 shadow-sm hover:-translate-y-2 transition-all duration-300 mt-4">
  <div className="card-body">


    <div className='flex justify-end'>
    <span className={`badge badge-xs font-medium px-3 py-2 ${tag === 'best seller' && 'bg-[#fef3c6FF] text-[#bb4d00FF]'} ${tag === 'popular' && 'bg-[#e1e7ffFF] text-[#ad0ef2]'}  ${tag === 'new' && 'bg-[#dbfce7FF] text-[#3ca960]'} `}>{tag}</span>
    </div>

    <img src={icon}  className='w-6 h-6'/>

      <h2 className="text-3xl font-bold">{name}</h2>

      <p className='text-[#627382FF]'>{description}</p>

      <h3 className='text-[#101727FF] text-2xl font-bold'>${price}<span className='text-[#627382FF] text-[16px] font-normal'>/month</span></h3>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
            features.map(feature => {
        return<>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        </>
        })
        }
    </ul>

    <div className="mt-6">

   <button className={`font-bold w-80 text-white rounded-full px-6 py-3 ${isSelected 
      ? 'bg-green-500 cursor-not-allowed' 
      : 'bg-linear-to-r from-[#a139f6] to-[#7504fe] cursor-pointer'}`} disabled={isSelected} onClick={handleSelected}
>
  {isSelected ? 'Added to Cart' : 'Buy Now'}
</button> 
     
     </div>
  </div>
</div>
  )
}

export default SingleProductData
