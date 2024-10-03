import React from "react";
import Image from "next/image";
import { GridCardProps } from "@/types";

const GridCard: React.FC<GridCardProps> = ({ image, description, title }) => {
  return (
    <div className="w-[280px] h-[80px] py-3 flex gap-2 hover:bg-slate cursor-pointer">
      <div className="mx-2 flex flex-col justify-start">
        <Image src={image} width={40} height={40} alt="invoice" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <h5 className="text-md">{title}</h5>
        <p className="text-xs text-textColor">{description}</p>
      </div>
    </div>
  );
};

export default GridCard;
