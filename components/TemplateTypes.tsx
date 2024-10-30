import Image from "next/image";
import React, { useState } from "react";
import rightChevron from "../assets/images/down-chevron.svg";
import { TemplateTypeProps } from "@/types";
const TemplateTypes: React.FC<TemplateTypeProps> = ({ title, img , findTemplateDescription ,id }) => {
  const [showChevron, setShowChevron] = useState(false);
  return (
    <div className="w-full h-[60px]">
      <div
        className="flex items-center justify-center w-64 py-5 px-2 cursor-pointer hover:bg-gray-100"
        onMouseEnter={() => {
          setShowChevron(true);
          findTemplateDescription(id)
        }} 
        onMouseLeave={() => setShowChevron(false)}
      >
        <div className="w-full flex gap-3">
          <Image src={img} width={20} height={20} alt="template image" />
          <p className="text-textColor font-oswald text-md">{title}</p>
        </div>
        <div
          className={`${
            showChevron
              ? "visible transition-opacity opacity-100 delay-50"
              : "invisible opacity-0"
          } `}
        >
          <Image
            src={rightChevron}
            width={20}
            height={20}
            alt="right arrow"
            className="-rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateTypes;
