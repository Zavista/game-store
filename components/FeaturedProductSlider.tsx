import React from 'react'
import Carousel from "react-multi-carousel";
import ProductCard from './ProductCard';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  big_desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 5,
    slidesToSlide: 2 // optional, default to 1.
  },
  small_desktop: {
    breakpoint: { max: 1500, min: 1300 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
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
    infinite 
    responsive={responsive} 
    itemClass='item'
    >
      <ProductCard 
        title='Call of Duty' 
        actualPrice='$59.99' 
        discountPrice='$49.99' 
        category='Shooting' 
        image='/images/g1.jpg'>
      </ProductCard>
      <ProductCard 
        title='Zombie House' 
        actualPrice='$39.99' 
        discountPrice='$29.99' 
        category='Actions' 
        image='/images/g2.jpg'>
      </ProductCard>
      <ProductCard 
        title='Gun of Wars' 
        actualPrice='$49.99' 
        discountPrice='$34.99' 
        category='Shooting' 
        image='/images/g3.jpg'>
      </ProductCard>
      <ProductCard 
        title='House of Fire' 
        actualPrice='$49.99' 
        discountPrice='$29.99' 
        category='Action' 
        image='/images/g4.jpg'>
      </ProductCard>
      <ProductCard 
        title="Assasin's Creed" 
        actualPrice='$69.99' 
        discountPrice='$59.99' 
        category='Action' 
        image='/images/g5.jpg'>
      </ProductCard>


    </Carousel>
  )
}

export default FeaturedProductSlider