"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/bonsai-logo.svg";

import chevron from "@/assets/images/down-chevron.svg";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavBoard from "./NavBoard";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-5 py-5">
      {/****** Logo ******/}
      <div className="flex w-1/2 lg:w-96  items-center justify-center">
        <Image  src={logo} width={150} height={150} alt="bonsai logo" />
      </div>
      <MobileNav />
      {/****** Large Screen Nav Menu ******/}
      <div className="hidden lg:flex w-full justify-evenly ">
        <ul className="w-full flex justify-center gap-x-9 items-center">
          <li className="group w-24 text-md relative">
            <Link href={"#"} className="flex gap-4">
              Product
              <Image src={chevron} width={12} height={12} alt="down arrow" />
            </Link>
            <NavBoard />
          </li>
          <li className="w-24 text-md">
            <Link href={"#"} className="flex gap-4">
              Tempaltes
              <Image src={chevron} width={12} height={12} alt="down arrow" />
            </Link>
          </li>
          <li className="w-16 text-md">
            <Link href={"#"} className="flex">
              Pricing
            </Link>
          </li>
          <li className="w-16 text-md">
            <Link href={"#"} className="flex">
              Reviews
            </Link>
          </li>
        </ul>
        {/****** large screen navigation button container******/}
        <div className="w-3/4 flex justify-start gap-4 font-regular text-sm">
          <button className="w-24 py-2 px-5 border border-1 rounded-md border-greenBackground text-greenBackground bg-whiteBackground hover:bg-greenBackground hover:text-whiteBackground">
            LOG IN
          </button>
          <button className="w-32 py-2 px-5  rounded-md bg-greenBackground text-whiteBackground hover:bg-darkGreenBackground">
            START FREE{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
