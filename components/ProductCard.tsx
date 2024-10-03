import { ProductCardProps } from "@/types";
import React from "react";

const ProductCard: React.FC<ProductCardProps> = ({ title, description, noHover }) => {
  return (
    <div className="w-full h-full flex flex-col items-start gap-2 pb-5 border-b-2 border-textColor" 
    onMouseEnter={noHover}>
      <h1 className="text-2xl text-darkTextColor font-amerigo">{title}</h1>
      <p className="w-[280px] text-textColor text-md">{description}</p>
    </div>
  );
};

export default ProductCard;
