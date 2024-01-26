import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='h-[13vh] bg-gray-800'>
        <div className='w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between'>
            <div>
                <Image src='/images/logo.png' alt='logo' width={140} height={140}></Image>
            </div>
        </div>
    </div>
  )
}

export default Nav