"use client";
import React, { useState } from "react";
import Image from "next/image";
import downChevron from "@/assets/images/down-chevron.svg";

const FooterLink = ({ link, sublink }: { link: string; sublink: string[] }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <li
      className="flex flex-col items-start"
      onClick={() => setIsShowing(!isShowing)}
    >
      <button
        className={`text-md  hover:text-darkTextColor ${isShowing ? "text-darkTextColor" : "text-textColor"} flex justify-center gap-2`}
      >
        {link}
        {sublink.length > 0 && (
          <Image src={downChevron} width={12} height={12} alt="down arrow" />
        )}
      </button>
      <ul
        className={`${
          isShowing ? " h-full visible" : "  max-h-0 invisible"
        } transition-all ml-2 flex flex-col overflow-hidden`}
      >
        {sublink.length > 0 &&
          sublink.map((link) => <li key={link} className="text-textColor py-2">{link}</li>)}
      </ul>
    </li>
  );
};

export default FooterLink;
