import React from 'react'


const Hero = () => {
  return (
    <div className='relative w-[100vw] h-[60vh] md:h-[87vh] bg'>
        <div className='w-[80%] mx-auto h-[100%] flex flex-col items-start justify-center'>
            <div className='text-white font-bold text-[25px] md:text-[30px] lg:text-[40px] uppercase'>
            The Best Place to Buy Games
            </div>
            <p className='text-white text-[18px]  w-[80%] lg:w-[55%] mt-[1rem] md:mt-[0.2rem] mb-[1rem] opacity-75'>
            Step into Game Haven, where gaming dreams come to life! We're more than just a store; we're your gaming sanctuary. With an expansive collection, unbeatable prices, and a commitment to customer satisfaction, we redefine what it means to shop for games. Experience the joy of exploring our meticulously curated selection, where every title is a gem waiting to be discovered. At our store, it's not just about transactions; it's about creating a community of passionate gamers. Elevate your gaming journey with us – because when it comes to buying games, we're the unrivaled champions. Welcome to the ultimate gaming destination!
            </p>
            <div>
                <button className='before:ease bg-white text-[17px] relative h-12 w-40 overflow-hidden 
                border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
                before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-indigo-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black
                hover:before:-rotate-180'>
                    <span className='relative z-10'>Buy Now</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero