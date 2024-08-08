import React from "react";
import { amountProducts, emptyAmountProducts } from "../productStore";
import { useStore } from "@nanostores/react";

const CartNotification = ({ isOpen }: { isOpen: boolean }) => {
  const $amountProducts = useStore(amountProducts);

  const handleEmptyCart = () => {
    emptyAmountProducts();
  };

  return (
    <div
      className={`${
        isOpen ? "" : "bottom-[100px]"
      } absolute bottom-[-285px] left-[-165px] w-[360px] text-left bg-white shadow-xl cursor-default transition-all duration-300`}
    >
      <h3 className="py-[24px] px-[22px] font-bold">Cart</h3>
      <hr />

      {$amountProducts > 0 ? (
        <div className="pt-[24px] pb-[34px] px-[22px]">
          <div className="flex justify-between w-full">
            <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt="product thumbnail"
                className="w-full h-full"
              />
            </div>
            <div>
              <h4>Fall Limited Edition Sneakers</h4>
              <div className="flex gap-[10px]">
                <p>$125.00 x {$amountProducts}</p>
                <p className="font-bold">${125.0 * $amountProducts}.00</p>
              </div>
            </div>
            <button onClick={() => handleEmptyCart()}>
              <img src="/images/icon-delete.svg" alt="icon-delete" />
            </button>
          </div>
          <button className="w-full p-[15px] bg-orange mt-[25px] font-bold rounded-[10px]">
            Checkout
          </button>
        </div>
      ) : (
        <div className="w-full h-[187px] pt-[24px] pb-[34px] px-[22px] flex justify-center items-center">
          <p className="font-bold">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default CartNotification;
