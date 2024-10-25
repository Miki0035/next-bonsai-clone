import { ProductCardProps } from "@/types";
import React from "react";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  showGrid
}) => {
  return (
    <div onMouseEnter={showGrid} className="w-full h-1/3 flex flex-col items-start gap-0 p-9 hover:bg-gray-100">
      <h1 className="text-2xl text-darkTextColor font-amerigo mb-2">{title}</h1>
      <div className="w-full flex gap-1 border-b-2 border-textColor  pb-9">
        <p className="w-[260px] text-textColor text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
