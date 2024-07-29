import React from 'react'
import ImagesCarousel from './ImagesCarousel'

const ProductDetails = () => {
  return (
    <section>
        <div className='w-full max-w-[1190px] mx-auto flex grow-0 shrink flex-wrap'>
            <ImagesCarousel />
            <div className='basis-0 grow shrink max-w-[380px] min-w-[380px] w-[380px] ml-[40px]'>
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