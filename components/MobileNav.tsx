"use client";
import React, { useState } from "react";
import mobileLogo from "@/assets/images/mobile_logo.svg";
import { IoClose, IoMenu } from "react-icons/io5";
import chevron from "@/assets/images/down-chevron.svg";
import Image from "next/image";
import Link from "next/link";
import { gridTemplateCards, MobileNavProductBoardItems } from "@/constants";
import MobileProductBoard from "./MobileProductBoard";
import MobileTemplateBoard from "./MobileTemplateBoard";

const MobileNav = () => {
  const [isShowing, setIsShowing] = useState(false);

  const [isShowProduct, setIsShowProduct] = useState(false);
  const [isShowTemplate, setIsShowTemplate] = useState(false);

  return (
    <>
      {/****** Mobile Nav Menu ******/}
      <div className="flex justify-end md:justify-start w-24 mx-2 lg:hidden">
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
        }  absolute top-0 left-0 w-screen h-screen bg-whiteBackground lg:hidden z-50`}
      >
        <div className="w-full h-full flex flex-col gap-32 px-3 md:px-12 py-8 ">
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
          <div className="relative w-full h-full flex flex-col items-start">
            {/****** Mobile overlay navigation lower body navs******/}

            <div className="w-full flex flex-col items-start gap-5 mb-12">
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex justify-between pb-5 text-textColor cursor-pointer"
                  onClick={() => setIsShowProduct(!isShowProduct)}
                >
                  <Link href={"#"} className="md:text-lg">
                    Product
                  </Link>
                  <Image
                    src={chevron}
                    width={10}
                    height={10}
                    alt="down arrow"
                  />

                  {/* Mobile Product Board */}
                  <div
                    className={`${
                      isShowProduct
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    } bg-white z-50  transition-opacity  absolute -top-12 left-0 w-full h-full`}
                  >
                    <div className="w-full h-full flex flex-col gap-5 px-5 py-8">
                      {MobileNavProductBoardItems.map(
                        ({ title, subtitle, id }) => (
                          <MobileProductBoard
                            key={id}
                            title={title}
                            subtitle={subtitle}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <hr className="w-full " />
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="w-full flex justify-between  pb-5 text-textColor"
                  onClick={() => setIsShowTemplate(!isShowTemplate)}
                >
                  <p className="md:text-lg">Templates</p>
                  <Image
                    src={chevron}
                    width={10}
                    height={10}
                    alt="down arrow"
                  />

                  {/* Mobile Template Board */}
                  <div
                    className={`${
                      isShowTemplate
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    } bg-white z-50  transition-opacity  absolute -top-12 left-0 w-full h-full`}
                  >
                    <div className="w-full h-full flex flex-col gap-1 px-5 py-8 ">
                      {gridTemplateCards.map(({ title, img, id }) => (
                        <MobileTemplateBoard
                          key={id}
                          title={title}
                          image={img}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full " />
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
