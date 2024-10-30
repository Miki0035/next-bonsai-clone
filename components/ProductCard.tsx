import { ProductCardProps } from "@/types";
import React from "react";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  showGrid,
}) => {
  return (
    <div
      onMouseEnter={showGrid}
      className="w-full h-1/3 flex flex-col items-start gap-0 p-9 hover:bg-gray-50"
    >
      <h1 className="text-2xl text-darkTextColor font-oswald mb-2">{title}</h1>
      <div className="w-full flex gap-1  mb-7">
        <p className="w-[260px] text-textColor text-md">{description}</p>
      </div>
      <hr className="w-full mt-5 " />
    </div>
  );
};

export default ProductCard;
