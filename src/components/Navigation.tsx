import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { amountProducts } from "../productStore";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const $amountProducts = useStore(amountProducts);

  useEffect(() => {

  }, [$amountProducts])
  

  return (
    <nav className="relative flex items-center gap-[57px] py-[17px] md:pt-[28px] md:pb-[34px] px-[22.6px] md:px-[39.6px] w-full max-w-[1190px] mx-auto md:border-b md:*:border-grayish-blue">
      <button
        className={`flex md:hidden hamburger ${isOpen ? "open" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className={`hamburger__box hamburger__box1`}></span>
        <span className={`hamburger__box hamburger__box2`}></span>
        <span className={`hamburger__box hamburger__box3`}></span>
      </button>
      <a href="/" className="ml-[32px] md:m-0">
        <img className="max-w-max" src="./images/logo.svg" alt="shortly logo" />
      </a>
      <div className="flex md:flex flex-col md:flex-row justify-between items-center w-full h-full">
        <div
          className={`${
            isOpen ? "translate-y-0" : "translate-y-[-120%]"
          }  absolute md:relative gap-8 md:gap-0 p-8 py-[70px] md:p-0 top-[-17px] md:top-0 right-[-47px] md:right-0 translate-x-[-50%] text-black md:text-grayish-blue md:transform-none w-full max-w-[75vw] md:max-w-none transition-all duration-500 bg-white h-screen md:h-full`}
        >
          <ul className="header__nav flex flex-col md:flex-row gap-[33px] text-[20px] md:text-[15px] h-full font-medium">
            <li>
              <a href="/" className="hover:text-black transition-all">
                Collections
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-black transition-all">
                Men
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-black transition-all">
                Women
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-black transition-all">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-black transition-all">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-[22px] md:gap-[46px] w-full">
          <button className="relative">
            <img src="/images/icon-cart.svg" alt="icon cart" />
            <span className="absolute top-[-8px] left-[10px] text-[11px] font-bold py-[0.1px] px-[8px] text-white bg-orange rounded-full">{$amountProducts}</span>
          </button>
          <button className="w-[25px] md:w-[50px]">
            <img src="/images/image-avatar.png" alt="image avatar" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
