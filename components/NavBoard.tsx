import Image from "next/image";
import React, { useState } from "react";
import rightChevron from "@/assets/images/path-chevron.svg";
import { gridCardContent, productCardContent } from "@/constants";
import GridCard from "./GridCard";
import ProductCard from "./ProductCard";

const NavBoard = () => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <div
      className={`${
        isHovered ? "w-[980px]" : "w-[350px]"
      } h-[500px]  hidden group-hover:flex absolute top-6 z-50 -left-20 bg-white`}
    >
      {/** Hover Card first Col Container */}
      <div
        className={` w-[350px] h-full p-9 hover:cursor-pointer shadow-lg  flex flex-col justify-start gap-5 `}
      >
        {/** First Product */}
        <div
          onMouseEnter={() => setisHovered(true)}
          className="w-full h-full flex flex-col items-start gap-2 pb-5 border-b-2 border-textColor"
        >
          <h1 className="text-2xl text-darkTextColor font-amerigo">
            Bonsai Workflow
          </h1>
          <div className="w-full flex gap-1">
            <p className="w-[260px] text-textColor text-md">
              Look professional, win more clients and manage your business from
              one place
            </p>
            <Image
              src={rightChevron}
              width={18}
              height={18}
              alt="right arrow"
              className={`${
                isHovered
                  ? "visible transition-opacity opacity-100 delay-150 "
                  : "invisible opacity-0 "
              } -rotate-90`}
            />
          </div>
        </div>
        {/** Second Product */}
        {productCardContent.map(({ id, title, description }) => (
          <ProductCard
            key={id}
            title={title}
            description={description}
            noHover={() => setisHovered(false)}
          />
        ))}
      </div>
      {/** Hover Card Grid Container */}
      <div
        className={`${
          isHovered
            ? "w-2/3 h-full visible transition-opacity opacity-100 delay-450 ease-in-out"
            : "invisible opacity-0"
        }  shadow-md hover:visible  p-3`}
        onMouseEnter={() => setisHovered(true)}
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

export default NavBoard;
