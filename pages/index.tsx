import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav></Nav>
      <Hero></Hero>
      <FeaturedProduct></FeaturedProduct>
    </div>
  )
}

export default HomePage