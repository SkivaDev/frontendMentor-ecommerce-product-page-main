import React from "react";
import ImagesCarousel from "./ImagesCarousel";
import AccountingButton from "./AccountingButton";

const ProductDetails = () => {
  return (
    <section>
      <div className="w-full max-w-[1190px] mx-auto pt-[90px] flex grow-0 shrink flex-wrap">
        <ImagesCarousel />
        <div className="basis-0 grow shrink max-w-[533px] min-w-[533px] w-[533px] ml-[40px] mt-[60px] pr-[86px]">
          <h2 className="uppercase text-[14px] font-bold tracking-[1.5px]">Sneaker Company</h2>
          <h1 className="mt-[16px] text-[45px] font-semibold leading-[48px] tracking-[-0.35px]">Fall Limited Edition Sneakers</h1>
          <p className="mt-[38px] leading-[26px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-col gap-[5px] mt-[17px]">
            <div className="text-[30px] font-bold inline relative">
              $125.00
              <span className="absolute top-[10px] left-[123px] py-[2px] px-[10px] text-[16px] bg-red-600 text-white rounded-md">50%</span>
            </div>
            <div className="">$250.00</div>
          </div>
          <div>
            <AccountingButton />
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
