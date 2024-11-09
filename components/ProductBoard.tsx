"use client";
import Image from "next/image";
import React, { useState } from "react";
import rightChevron from "../assets/images/path-chevron.svg";
import { gridCardContent, productCardContent } from "@/constants";
import GridCard from "./GridCard";
import ProductCard from "./ProductCard";

const ProductBoard = () => {
  const [isShowContainer, setIsShowContainer] = useState(false);
  const [isShowGrid, setIsShowGrid] = useState(false);
  return (
    <div
      className={`${
        isShowContainer ? "w-[980px]" : "w-[350px]"
      } h-[500px]  hidden group-hover:flex absolute top-6 -left-20 bg-white`}
      onMouseLeave={() => setIsShowContainer(false)}
    >
      {/** Hover Card first Col Container */}
      <div
        className={`w-[350px] h-full hover:cursor-pointer shadow-lg  flex flex-col justify-start gap-0 `}
      >
        {/** First Product */}
        <div
          onMouseEnter={() => {
            setIsShowContainer(true);
            setIsShowGrid(true);
          }}
          onMouseLeave={() => {
            setIsShowGrid(false);
          }}
          className="w-full h-1/3 flex flex-col items-start p-9 hover:bg-gray-50"
        >
          <h1 className="text-2xl text-darkTextColor font-oswald mb-2">
            Bonsai Workflow
          </h1>
          <div className="w-[300px] flex gap-1">
            <p className="w-full text-textColor text-md">
              Look professional, win more clients and manage your business from
              one place
            </p>
            <Image
              src={rightChevron}
              width={18}
              height={18}
              alt="right arrow"
              className={`${
                isShowContainer
                  ? "visible transition-opacity opacity-100 delay-150 "
                  : "invisible opacity-0 "
              } -rotate-90`}
            />
          </div>
          <hr className="w-full mt-4 " />
        </div>
        {/** Second Product */}
        {productCardContent.map(({ id, title, description }) => (
          <ProductCard
            key={id}
            title={title}
            description={description}
            showGrid={() => {
              setIsShowGrid(false);
              setIsShowContainer(false);
            }}
          />
        ))}
      </div>
      {/** Hover Card Grid Container */}
      <div
        className={`${
          isShowGrid
            ? "w-2/3 h-full visible transition-opacity opacity-100 delay-450 ease-in-out"
            : "invisible opacity-0"
        }  shadow-md hover:visible  p-3`}
        onMouseEnter={() => setIsShowGrid(true)}
        onMouseLeave={() => setIsShowGrid(false)}
      >
        <div className={`grid grid-cols-2 h-full `}>
          {gridCardContent.map(({ id, title, description, image }) => (
            <GridCard
              key={id}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBoard;
