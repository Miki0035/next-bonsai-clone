"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/bonsai-logo.svg";
import mobileLogo from "@/assets/images/mobile_logo.svg";

import chevron from "@/assets/images/down-chevron.svg";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-5 py-5">
      {/****** Logo ******/}
      <div className="flex w-1/2  items-center justify-center">
        <Image src={logo} width={130} height={130} alt="bonsai logo" />
      </div>
      {/****** Mobile Nav Menu ******/}
      <div className="flex justify-start w-24 mx-2 md:hidden">
        {!isShowing && (
          <button onClick={() => setIsShowing(!isShowing)}>
            <IoMenu size={45} />
          </button>
        )}
      </div>
      {/****** Mobile absolute overlay navigation ******/}
      <div
        className={` ${
          isShowing ? "block" : "hidden"
        }  absolute top-0 left-0 w-screen h-screen bg-whiteBackground`}
      >
        <div className="w-full h-full flex flex-col gap-32 px-12 py-8 ">
          {/****** Mobile overlay navigation nav bar******/}
          <div className="w-full flex justify-between">
            <div className="flex w-1/2 justify-start items-center">
              <Image src={mobileLogo} width={50} height={50} alt="logo" />
            </div>
            <div className="flex items-center">
              <button
                className="flex justify-center items-center"
                onClick={() => setIsShowing(!isShowing)}
              >
                <IoClose size={40} />
              </button>
            </div>
          </div>
          {/****** Mobile overlay navigation lower body container ******/}
          <div className="w-full h-full flex flex-col items-start">
            {/****** Mobile overlay navigation lower body navs******/}

            <div className="w-full flex flex-col items-start gap-5 mb-12">
              <div className="w-full flex justify-between border-b-2 pb-5 text-textColor">
                <p className="md:text-lg">Product</p>
                <Image src={chevron} width={10} height={10} alt="down arrow" />
              </div>
              <div className="w-full flex justify-between border-b-2 pb-5 text-textColor">
                <p className="md:text-lg">Templates</p>
                <Image src={chevron} width={10} height={10} alt="down arrow" />
              </div>
              <div className="w-full flex justify-between border-b-2 pb-5 text-textColor">
                <p className="md:text-lg">Pricing</p>
              </div>
              <div className="w-full flex justify-between border-b-2 pb-5 text-textColor">
                <p className="md:text-lg">Reviews</p>
              </div>
            </div>
            {/****** Mobile overlay navigation button container******/}
            <div className="w-full flex flex-col items-center gap-4 font-regular text-sm">
              <button className="w-full py-2 px-5 border border-1 rounded-sm border-greenBackground text-greenBackground bg-whiteBackground hover:bg-greenBackground hover:text-whiteBackground">
                LOG IN
              </button>
              <button className="w-full py-2 px-5  rounded-sm bg-greenBackground text-whiteBackground hover:bg-darkGreenBackground">
                START FREE{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/****** Large Screen Nav Menu ******/}
      <div className="hidden md:flex ">
        <ul className="flex justify-evenly items-center">
          <li className="w-24 text-sm">
            <Link href={"#"} className="flex gap-2">
              Product
              <Image src={chevron} width={12} height={12} alt="down arrow" />
            </Link>
          </li>
          <li className="w-24 text-sm">
            <Link href={"#"} className="flex gap-2">
              Tempaltes
              <Image src={chevron} width={12} height={12} alt="down arrow" />
            </Link>
          </li>
          <li className="w-24 text-sm">
            <Link href={"#"} className="flex gap-5">
              Pricing
            </Link>
          </li>
          <li className="w-24 text-sm">
            <Link href={"#"} className="flex gap-5">
              Reviews
            </Link>
          </li>
        </ul>
        {/****** Mobile overlay navigation button container******/}
        <div className="w-full flex items-center gap-4 font-regular text-sm">
          <button className="w-full py-2 px-5 border border-1 rounded-sm border-greenBackground text-greenBackground bg-whiteBackground hover:bg-greenBackground hover:text-whiteBackground">
            LOG IN
          </button>
          <button className="w-full py-2 px-5  rounded-sm bg-greenBackground text-whiteBackground hover:bg-darkGreenBackground">
            START FREE{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
