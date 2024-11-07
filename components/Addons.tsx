import Image from "next/image";
import Link from "next/link";
import React from "react";
import rightChevron from "@/assets/images/learn-arrow.svg";
const Addons = ({
  title,
  subtitle,
  price,
  plan,
  link,
}: {
  title: string;
  subtitle: string;
  price: number;
  plan: string;
  link: string;
}) => {
  return (
    <div className="w-3/4 lg: lg:w-1/2 flex flex-col items-start  gap-4 py-4 px-3 bg-white shadow-2xl sm:flex-row-reverse sm:items-center sm:justify-between sm:py-5 sm:px-5 md:py-8 md:px-7 ">
      <h5 className="text-2xl font-oswald sm:text-3xl md:text-4xl">
        {price === 0 ? "Free" : `\$${price}`}{" "}
        <span className="flex justify-end text-textColor font-regular text-xs font-regular sm:text-xs md:text-sm">
          {" "}
          {price === 0 ? " " : `/${plan}`}
        </span>
      </h5>
      <div className="flex flex-col gap-4">
        <p className="text-textColor text-sm sm:text-md sm:w-80 md:w-96">
          <span className="text-md text-textColor font-semibold block sm:text-xl mb-2 md:text-2xl">
            {title}
          </span>
          {subtitle}
        </p>
        {link && (
          <Link
            href={link}
            className="group uppercase text-greenBackground flex gap-2 text-sm"
          >
            learn more
            <Image
              src={rightChevron}
              width={8}
              height={8}
              alt="right arrow"
              className="group-hover:translate-x-2 translate-x-0 transition-all"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Addons;
