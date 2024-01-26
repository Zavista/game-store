import React from 'react'
import Image from 'next/image'
import {  HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/16/solid'

const Nav = () => {
  return (
    <div className='h-[13vh] bg-gray-800'>
        <div className='w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between'>
            <div>
                <Image src='/images/logo.png' alt='logo' width={140} height={140}></Image>
            </div>
            <div className='h-[50%] hidden flex-[0.7] overflow-hidden bg-gray-200 rounded-md md:flex items-center'>
                <input 
                    type='text' 
                    placeholder='Search game (eg. Minecraft)' 
                    className='block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200'>
                </input>
                <MagnifyingGlassIcon className='w-[1.8rem] h-[1.8rem] mr-[1.4rem] cursor-pointer'></MagnifyingGlassIcon>
            </div>
            <div className='flex items-center justify-center space-x-8'>
                <div className='relative'>
                    <ShoppingBagIcon className='w-[2rem] h-[2rem] text-white cursor-pointer'></ShoppingBagIcon>
                    <div className='w-[20px] text-[12px] absolute top-[-6px] right-[-6px] h-[20px] flex items-center
                    text-white justify-center font-semibold rounded-full bg-blue-400'>
                        7
                    </div>
                </div>
                <HeartIcon className='w-[2rem] h-[2rem] text-white cursor-pointer'></HeartIcon>
                <UserIcon className='w-[2rem] h-[2rem] text-white cursor-pointer'></UserIcon>
            </div>
        </div>
    </div>
  )
}

export default Nav