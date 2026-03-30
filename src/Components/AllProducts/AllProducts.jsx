import React from 'react'
import SingleProductData from '../ProductsSection/SingleProductData/SingleProductData'

const AllProducts = ({productsData}) => {
  return (
    <div className='grid justify-center gap-4 md:grid-cols-2 xl:grid-cols-3 lg:justify-between'>
      {
        productsData.map(singleProductData => { 
          return  <SingleProductData singleProductData={singleProductData}  key={singleProductData.id}/>
        })
      }
    </div>
  )
}

export default AllProducts
