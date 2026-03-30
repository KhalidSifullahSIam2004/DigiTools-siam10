import React from 'react'
import SingleProductData from '../ProductsSection/SingleProductData/SingleProductData'

const AllProducts = ({productsData, totalCart, setTotalCart, total, setTotal}) => {
  return (
    <div className='grid justify-center gap-4 md:grid-cols-2 xl:grid-cols-3 lg:justify-between'>
      {
        productsData.map(singleProductData => { 
          return  <SingleProductData singleProductData={singleProductData} totalCart={totalCart} setTotalCart={setTotalCart}  total={total} setTotal={setTotal} key={singleProductData.id}/>
        })
      }
    </div>
  )
}

export default AllProducts
