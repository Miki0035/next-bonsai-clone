import React from "react";
import Image from "next/image";
import { GridCardProps } from "@/types";

const GridCard: React.FC<GridCardProps> = ({ image, description, title }) => {
  return (
    <div className="w-[280px] h-[100px] py-3 flex gap-2 hover:bg-gray-50 cursor-pointer hover:rounded-md">
      <div className="mx-2 flex flex-col justify-start">
        <Image src={image} width={30} height={30} alt="invoice" />
      </div>
      <div className="flex flex-col items-start gap-1 text-textColor">
        <h5 className="text-md font-oswald">{title}</h5>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default GridCard;
