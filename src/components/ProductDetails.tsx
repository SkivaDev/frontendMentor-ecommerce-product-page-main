import React, { useState } from "react";
import ImagesCarousel from "./ImagesCarousel";
import AccountingButton from "./AccountingButton";
import { useStore } from "@nanostores/react";
import { amountProducts, increaseAmountProducts } from "../productStore";

const ProductDetails = () => {

  const [amount, setAmount] = useState(0);

  return (
    <section>
      <div className="w-full max-w-[1190px] mx-auto md:pt-[90px] pb-[90px] md:pb-[127px] flex flex-col md:flex-row grow-0 shrink flex-wrap">
        <ImagesCarousel />
        <div className="basis-0 grow shrink w-full md:max-w-[533px] md:min-w-[533px] md:w-[533px] md:ml-[40px] mt-[22px] md:mt-[60px] px-[23px] md:p-0 md:pr-[86px]">
          <h2 className="uppercase text-[13px] md:text-[14px] font-bold tracking-[1.5px] text-dark-grayish-blue">Sneaker Company</h2>
          <h1 className="mt-[11px] md:mt-[16px] text-[28px] md:text-[45px] font-semibold leading-[32px] md:leading-[48px] tracking-[-0.35px]">Fall Limited Edition Sneakers</h1>
          <p className="mt-[15px] md:mt-[38px] leading-[26px] text-dark-grayish-blue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between md:justify-normal items-center md:items-start md:flex-col gap-[5px] mt-[17px]">
            <div className="text-[30px] font-bold inline relative">
              $125.00
              <span className="absolute top-[10px] left-[123px] py-[2px] px-[10px] text-[16px] bg-red-600 text-white rounded-md">50%</span>
            </div>
            <div className="font-bold text-[18px] md:text-[16px] line-through text-dark-grayish-blue">$250.00</div>
          </div>
          <div className="flex flex-col md:flex-row mt-[19px] md:mt-[32px] gap-[15px]">
            <AccountingButton amount={amount} setAmount={setAmount} />
            <AddToCartButton amount={amount}/>
          </div>
        </div>
      </div>
    </section>
  );
};

const AddToCartButton = ({amount}:{amount: number}) => {

  const handleAddToCart = () => {
    console.log("Add to cart button clicked: ", amount);

    increaseAmountProducts(amount);
  }

  const $amountProducts = useStore(amountProducts);


  return (
    <button onClick={() => handleAddToCart()} className="flex flex-grow justify-center items-center py-[16px] px-[17px] bg-orange rounded-[10px] gap-[11px] font-bold">
      <img src="/images/icon-cart.svg" alt="icon-cart" className="w-auto h-max brightness-0"/>
      Add to cart
    </button>
  );
}

export default ProductDetails;
