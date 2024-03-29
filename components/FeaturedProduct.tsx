import React from 'react'
import FeaturedProductSlider from './FeaturedProductSlider'

const FeaturedProduct = () => {
  return (
    <div className='pt-[6rem] pb-[3rem] bg-gray-900'>
        <div className="w-[80%] mx-auto flex items-center justify-between">
            <h1 className='md:text-[20px] text-[22px] lg:text-[34px] text-white'>
                Featured Products
            </h1>
            <button className='text-[13px] md:text-[15px] text-stone-400' style={{ letterSpacing: '0.05em' }}>
                View All Products
            </button> 
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto'>
            <FeaturedProductSlider></FeaturedProductSlider>
        </div>
    </div>
  )
}

export default FeaturedProduct