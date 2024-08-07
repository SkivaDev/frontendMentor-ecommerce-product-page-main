import React from "react";

const CartNotification = () => {
  return (
    <div className="absolute bottom-[-285px] left-[-165px] w-[360px] text-left bg-white shadow-xl">
      <h3 className="py-[24px] px-[22px] font-bold">Cart</h3>
      <hr />
      <div className="pt-[24px] pb-[34px] px-[22px]">
        <div className="flex justify-between w-full">
          <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
            <img src="/images/image-product-1-thumbnail.jpg" alt="product thumbnail" className="w-full h-full" />
          </div>
          <div>
            <h4>Fall Limited Edition Sneakers</h4>
            <div className="flex gap-[10px]">
              <p>$125.00 x 3</p>
              <p className="font-bold">$375.00</p>
            </div>
          </div>
          <button>
            <img src="/images/icon-delete.svg" alt="icon-delete" />
          </button>
        </div>
        <button className="w-full p-[15px] bg-orange mt-[25px] font-bold rounded-[10px]">Checkout</button>
      </div>
    </div>
  );
};

export default CartNotification;
