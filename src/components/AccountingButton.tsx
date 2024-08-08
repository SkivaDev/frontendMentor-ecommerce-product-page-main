import React, { useState } from "react";

const AccountingButton = ({amount, setAmount}:{amount: number; setAmount: React.Dispatch<React.SetStateAction<number>>}) => {

  return (
    <div className="flex justify-between items-center w-full md:w-[159px] h-[56px] font-bold bg-light-grayish-blue rounded-[10px]">
      <button
        onClick={() => setAmount((amount) => amount > 0 ? amount - 1 : 0)}
        className="h-full text-[18px] px-[17px] font-bold text-orange"
      >
        <img src="/images/icon-minus.svg" alt="icon-minus" />
      </button>
      {amount}
      <button
        onClick={() => setAmount((amount) => amount + 1)}
        className="h-full text-[18px] px-[17px] font-bold text-orange"
      >
        <img src="/images/icon-plus.svg" alt="icon-plus" />
      </button>
    </div>
  );
};

export default AccountingButton;
