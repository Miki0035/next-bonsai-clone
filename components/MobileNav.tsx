"use client";
import React, { useState } from "react";
import mobileLogo from "@/assets/images/mobile_logo.svg";
import { IoClose, IoMenu } from "react-icons/io5";
import chevron from "@/assets/images/down-chevron.svg";
import Image from "next/image";

const MobileNav = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      {/****** Mobile Nav Menu ******/}
      <div className="flex justify-start w-24 mx-2 lg:hidden">
        {!isShowing && (
          <button onClick={() => setIsShowing(!isShowing)}>
            <IoMenu size={45} />
          </button>
        )}
      </div>
      {/****** Mobile absolute overlay navigation ******/}
      <div
        className={` ${
          isShowing
            ? "visible transition-opacity ease-in-out delay-100 opacity-100"
            : "invisible opacity-0"
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
    </>
  );
};

export default MobileNav;
