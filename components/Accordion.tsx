"use client";
import Image from "next/image";
import React, { useState } from "react";
import downChevron from "@/assets/images/down-chevron.svg";
const Accordion = ({
  heading,
  answer,
}: {
  heading: string;
  answer: string;
}) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <div
        className="flex justify-between w-full  cursor-pointer"
        onClick={() => setIsShowing(!isShowing)}
      >
        <h5 className="text-lg font-oswald text-textColor hover:text-greenBackground md:text-2xl">
          {heading} ?
        </h5>
        <Image src={downChevron} width={12} height={12} alt="down arrow" />
      </div>
      <p
        className={`
          ${
            isShowing ? "w-full max-h-full overflow-visible" : "overflow-hidden max-h-0 "
          } text-sm text-textColor leading-relaxed transition-all md:text-md  `}
      >
        {answer}
      </p>
    </>
  );
};

export default Accordion;
