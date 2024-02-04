import React from 'react'

interface Props {
    image:string;
    category: string;
    title:string;
    discountPrice:string;
    actualPrice:string;
}


const ProductCard = ({image, category, title, discountPrice, actualPrice}:Props) => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard