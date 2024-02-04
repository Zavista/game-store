import React from 'react'

const TopProduct = () => {
  return (
    <div className='bg-gray-800 pt-[4rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
            <h1 className='md:text-[20px] text-[22px] lg:text-[34px] text-white'>Top Products</h1>
            <button className='text-[13px] md:text-[15px] text-stone-400' style={{ letterSpacing: '0.05em' }}>
                View All Products
            </button>
        </div>
    </div>
  )
}

export default TopProduct