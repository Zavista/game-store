import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import TopProduct from '@/components/TopProduct'
import BestSeller from '@/components/BestSeller'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav></Nav>
      <Hero></Hero>
      <FeaturedProduct></FeaturedProduct>
      <TopProduct></TopProduct>
      <BestSeller></BestSeller>
    </div>
  )
}

export default HomePage