import React from "react";
import rightTick from "@/assets/images/green-tick.svg";
import Image from "next/image";

const PriceCard = ({
  title,
  id,
  subtitle,
  monthlyPrice,
  yearlyPrice,
  isChecked,
  descriptions,
}: {
  title: string;
  subtitle: string;
  id: number;
  isChecked: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  descriptions: string[];
}) => {
  return (
    <div className="w-full h-full bg-white flex flex-col shadow-xl py-10 px-4 sm:w-[500px] lg:w-[380px] relative ">
      {id === 1 && (
        <div className="absolute top-16 right-5">
          <div className="relative inline-block transform rotate-45 translate-x-6 -translate-y-6 bg-greenBackground px-3 py-1">
            <span className="text-white text-xs font-bold">MOST POPULAR</span>
          </div>
        </div>
      )}
      <div
        className={`w-full flex flex-col items-start ${
          id === 0
            ? "lg:mb-9 lg:px-4"
            : id === 2
            ? "lg:mb-7 lg:px-4"
            : "lg:mb-4 lg:px-4"
        }`}
      >
        <h1 className="font-oswald text-2xl sm:text-4xl mb-3">{title} </h1>
        <p className="text-textColor text-sm sm:text-md">{subtitle}</p>
      </div>
      <div className="w-full flex flex-col">
        <p className="font-regular text-textColor flex items-end  justify-start lg:justify-center">
          <span className="text-3xl self-start lg:text-5xl">$</span>{" "}
          <span className="text-6xl font-semibold sm:text-5xl lg:text-7xl">
            {!isChecked ? monthlyPrice : yearlyPrice}
          </span>{" "}
          <sub className="ml-4 text-xl">/{!isChecked ? "MONTH" : "YEARLY"}</sub>
        </p>
        <div className="w-full flex justify-end">
          <p className="w-28 flex justify-start text-textColor text-sm">
            {isChecked ? "Billed yearly" : ""}
          </p>
        </div>
        <hr className="border border-greenBackground mt-2 w-full" />
      </div>
      <div className="w-full flex flex-col items-start justify-center pt-8 gap-4 lg:px-8">
        {descriptions.map((description) => (
          <div
            key={description}
            className="w-full flex justify-start items-center"
          >
            <Image src={rightTick} width={15} height={15} alt="green tick" />
            <p className="ml-2 text-sm">{description}</p>
          </div>
        ))}
      </div>
      <button
        className={`uppercase self-center w-52 rounded-md py-4 px-4 bg-greenBackground text-white hover:bg-darkGreenBackground mt-4 ${
          id !== 2 ? "lg:mt-10" : ""
        }`}
      >
        start free
      </button>
    </div>
  );
};

export default PriceCard;
