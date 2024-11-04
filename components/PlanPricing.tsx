"use client";
import React, { useState } from "react";
import Image from "next/image";
import text from "@/assets/images/FREE-text.svg";
import { priceCards } from "@/constants";
import PriceCard from "./PriceCard";

const PlanPricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full h-full py-24 flex flex-col flex-warp justify-center items-end gap-7">
      {/* plans price & toggle container */}
      <div className="w-full  h-full flex justify-center gap-14 md:gap-5">
        <div className="w-24 md:w-72 h-full">
          <h1 className="w-full text-3xl md:text-4xl font-oswald">
            Plans & Pricing
          </h1>
        </div>
        <div className="w-54 md:w-80 relative z-10 flex items-end">
          <Image
            src={text}
            width={150}
            height={150}
            alt="2 months free"
            className="absolute -top-1 right-1 md:-top-8 md:right-8"
          />
          <div
            className="w-full flex justify-center gap-2 md:gap-4 cursor-pointer"
            onClick={handleToggle}
          >
            <span
              className={`uppercase font-regular text-sm ${
                isChecked ? "text-textColor" : "text-darkTextColor"
              } md:text-xl`}
            >
              Monthly
            </span>
            <input type="checkbox" className="peer sr-only" />
            <div
              className={`relative  w-11 h-6 bg-greenBackground peer peer-focus:ring-4 after:content-[''] after:bg-white after:absolute after:top-[2px] after:start-[2px] rounded-full after:h-5 after:w-5 after:border-gray-300 after:border ${
                isChecked ? "after:translate-x-full" : ""
              } after:rounded-full after:transition-all`}
            ></div>

            <span
              className={`uppercase font-regular text-sm ${
                isChecked ? "text-darkTextColor" : "text-textColor"
              } md:text-xl`}
            >
              Yearly
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 place-items-center gap-8 px-2 lg:grid-cols-3 my-5 lg:gap-0">
        {
          priceCards.map((price) => <PriceCard isChecked={isChecked} key={price.id}  {...price}/>)
        }
      </div>
    </div>
  );
};

export default PlanPricing;
