import React from "react";
import rightChevron from "../assets/images/path-chevron.svg";
import Image from "next/image";

const MobileProductBoard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-5 px-3 group/item hover:bg-gray-50">
        <div className="flex flex-col items-start justify-center">
          <h4 className="font-amerigo text-2xl mb-2">{title}</h4>
          <p className="text-sm">{subtitle}</p>
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
      <hr />
    </>
  );
};

export default MobileProductBoard;
