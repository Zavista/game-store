import React from 'react'
import ProductCard from './ProductCard';

const TopProduct = () => {
  return (
    <div className='bg-gray-800 pt-[4rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
            <h1 className='md:text-[20px] text-[22px] lg:text-[34px] text-white'>Top Products</h1>
            <button className='text-[13px] md:text-[15px] text-stone-400' style={{ letterSpacing: '0.05em' }}>
                View All Products
            </button>
        </div>
        <div className='grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto'>
            <div className="">
                <ProductCard 
                    title='Gravity Guy' 
                    actualPrice='$19.99' 
                    discountPrice='$9.99' 
                    category='Racing' 
                    image='/images/g1.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title='Zombie House' 
                    actualPrice='$39.99' 
                    discountPrice='$29.99' 
                    category='Actions' 
                    image='/images/g2.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title='Gun of Wars' 
                    actualPrice='$49.99' 
                    discountPrice='$34.99' 
                    category='Shooting' 
                    image='/images/g3.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title='House of Fire' 
                    actualPrice='$49.99' 
                    discountPrice='$29.99' 
                    category='Action' 
                    image='/images/g4.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title="Assasin's Creed" 
                    actualPrice='$69.99' 
                    discountPrice='$59.99' 
                    category='Action' 
                    image='/images/g5.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title="Space Fight" 
                    actualPrice='$44.99' 
                    discountPrice='$39.99' 
                    category='Action' 
                    image='/images/g6.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title="Super Cars" 
                    actualPrice='$19.99' 
                    discountPrice='$15.99' 
                    category='Racing' 
                    image='/images/g7.jpg'
                />
            </div>
            <div className="">
                <ProductCard 
                    title="Wild Wolf" 
                    actualPrice='$39.99' 
                    discountPrice='$19.99' 
                    category='Adventure' 
                    image='/images/g8.jpg'
                />
            </div>
        </div>
    </div>
  )
}

export default TopProduct