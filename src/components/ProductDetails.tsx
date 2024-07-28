import React from 'react'
import ImagesCarousel from './ImagesCarousel'

const ProductDetails = () => {
  return (
    <section>
        <div className='w-full max-w-[1190px] mx-auto'>
            <ImagesCarousel />
            <div>
                <h1>Product Name</h1>
                <p>Product Price</p>
                <p>Product Description</p>
                <button>Add to Cart</button>
                <img src="" alt="icon" />
            </div>
        </div>
    </section>
  )
}

export default ProductDetails