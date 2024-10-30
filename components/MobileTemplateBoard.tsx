import React from "react";
import Image from "next/image";
import rightChevron from "../assets/images/path-chevron.svg";

const MobileTemplateBoard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-5 px-3 group/item hover:bg-gray-50 cursor-pointer">
        <div className="flex items-start justify-center gap-5">
          <Image src={image} width={15} height={15} alt="template image" />
          <p className="text-sm">{title}</p>
        </div>
        <div className="flex items-center">
          <Image
            src={rightChevron}
            width={20}
            height={20}
            alt="right arrow"
            className={`-rotate-90 invisible transition-opacity group-hover/item:visible group-hover/item:opacity-100 delay-150
                 opacity-0`}
          />
        </div>
      </div>
    </>
  );
};

export default MobileTemplateBoard;
