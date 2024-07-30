import React, { useState } from "react";

const AccountingButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center w-[150px] py-[8px] px-[14px] bg-slate-300">
      <button
        onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}
        className="text-[18px] font-bold text-orange"
      >
        <img src="/images/icon-minus.svg" alt="icon-minus" />
      </button>
      {count}
      <button
        onClick={() => setCount((count) => count + 1)}
        className="text-[18px] font-bold text-orange"
      >
        <img src="/images/icon-plus.svg" alt="icon-plus" />
      </button>
    </div>
  );
};

export default AccountingButton;
