import React from "react";
import ImagesCarousel from "./ImagesCarousel";

const ProductDetails = () => {
  return (
    <section>
      <div className="w-full max-w-[1190px] mx-auto pt-[90px] flex grow-0 shrink flex-wrap">
        <ImagesCarousel />
        <div className="basis-0 grow shrink max-w-[535px] min-w-[535px] w-[535px] ml-[40px]">
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div>
            <div>$125.00</div>
            <div>$250.00</div>
          </div>
          <div>
            <button>+ 0 -</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
