"use client";
import { addonsText } from "@/constants";
import { useStateContext } from "@/provider/StateContext";
import React from "react";
import Addons from "./Addons";

const AddonSection = () => {
  const { isChecked } = useStateContext();

  return (
    <section className="w-full h-full flex flex-col items-center gap-10 ">
      <h1 className="w-full text-center text-md font-regular sm:text-2xl">
        Super Charge your work with add-ons
      </h1>
      {isChecked
        ? addonsText.yearly.map((context) => (
            <Addons
              key={context.id}
              plan="YEAR"
              price={context.yearly}
              title={context.title}
              subtitle={context.subtitle}
              link={context.link}
            />
          ))
        : addonsText.monthly.map((context) => (
            <Addons
              key={context.id}
              plan="MONTH"
              price={context.monthly}
              title={context.title}
              subtitle={context.subtitle}
              link={context.link}
            />
          ))}
    </section>
  );
};

export default AddonSection;
