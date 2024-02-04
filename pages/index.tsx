import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import TopProduct from '@/components/TopProduct'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav></Nav>
      <Hero></Hero>
      <FeaturedProduct></FeaturedProduct>
      <TopProduct></TopProduct>
    </div>
  )
}

export default HomePage