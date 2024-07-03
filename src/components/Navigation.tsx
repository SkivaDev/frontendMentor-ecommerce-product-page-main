import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center gap-[57px] mt-[33px] md:mt-[33px] px-[22.6px] md:px-[39.6px] w-full max-w-[1190px] mx-auto">
      <a href="/">
        <img className="max-w-max" src="./images/logo.svg" alt="shortly logo" />
      </a>
      <div
        className={`${
          isOpen ? "translate-y-[20%]" : "translate-y-[-120%]"
        } flex md:flex flex-col md:flex-row justify-between items-center absolute md:relative gap-8 md:gap-0 p-8 md:p-0 top-1/2 md:top-0 left-1/2 md:left-0 translate-x-[-50%]  text-white md:text-black md:transform-none bg-dark-violet md:bg-transparent w-full max-w-[90%] md:max-w-none rounded-lg md:rounded-none transition-all duration-500`}
      >
        <ul className="flex flex-col md:flex-row gap-[31.12px] md:mr-[46.4px] text-[20px] md:text-[15px] font-bold text-center md:text-left text-grayish-violet">
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-[34px] text-[20px] md:text-[16px] w-full md:w-auto pt-[30px] md:pt-0 border-t border-grayish-violet md:border-none">
          {/* <a href="" className="font-bold text-grayish-violet hover:text-black">
            Login
          </a> */}
          <button>
            <img src="/images/icon-cart.svg" alt="icon cart" />
          </button>
          {/* <a
            href="/"
            className="block py-[8px] px-[24px] rounded-full text-[20px] md:text-[16.2px] font-fraunces font-bold tracking-[-0.6992px] transition-all bg-cyan text-black hover:bg-light-cyan"
          >
            Sign Up
          </a> */}
          <button className="w-[50px]">
            <img src="/images/image-avatar.png" alt="image avatar" />
          </button>
        </div>
      </div>
      <button
        className={`flex md:hidden hamburger ${isOpen ? "open" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {/* <img src="" alt="hamburger button" /> */}
        <span className={`hamburger__box hamburger__box1`}></span>
        <span className={`hamburger__box hamburger__box2`}></span>
        <span className={`hamburger__box hamburger__box3`}></span>
      </button>
    </nav>
  );
};

export default Navigation;
