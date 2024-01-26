import React from 'react'

const FeaturedProduct = () => {
  return (
    <div className='pt-[6rem] pb-[3rem] bg-gray-900'>
        <div className="w-[80%] mx-auto flex items-center justify-between">
            <h1 className='md:text-[20px] test-[22px] lg:text-[34px] text-white'>
                Featured Products
            </h1>
            <button className='uppercase text-[13px] md:text-[15px] text-indigo-300'>
                View all products
            </button> 
        </div>
    </div>
  )
}

export default FeaturedProduct