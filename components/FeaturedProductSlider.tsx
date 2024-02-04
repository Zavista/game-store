import React from 'react'
import Carousel from "react-multi-carousel";
import ProductCard from './ProductCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const FeaturedProductSlider = () => {
  return (
    <Carousel 
    additionalTransfrom={0} 
    arrows={true} 
    autoPlay={true} 
    autoPlaySpeed={5000} 
    centerMode={false} 
    responsive={responsive} 
    itemClass='item'
    >
      <div>
        <ProductCard></ProductCard>
      </div>
    </Carousel>
  )
}

export default FeaturedProductSlider