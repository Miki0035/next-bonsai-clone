"use client"
import { gridTemplateCards } from "@/constants";
import React, { useState } from "react";
import TemplateDescription from "./TemplateDescription";
import TemplateTypes from "./TemplateTypes";
import { TemplateDescriptionType } from "@/types";
import { findTemplateDescriptionById } from "@/utils";

const TemplateBoard = () => {
  const [templateDescription, setTemplateDescription] =
    useState<TemplateDescriptionType>({
      id: 1,
      title: "Contract Templates",
      descriptions: [
        "Free Contract Maker",
        "Social Media Management Contract Template",
        "Graphic Design Contract Template",
        "Digital Marketing Contract Template",
      ],
      link: "See All Templates",
    });

  const findTemplateDescription = (id: number) => {
    const template = findTemplateDescriptionById(id);
    setTemplateDescription(template!);
  };
  return (
    <div
      className={` w-[750px] h-[550px]  hidden group-hover/template:flex absolute top-6 z-50 -left-10 bg-white shadow-lg`}
    >
      <div className="w-full grid grid-cols-3 h-full gap-5">
        <div className="w-full h-full col-span-1 pt-5  flex flex-col items-center">
          {gridTemplateCards.map(({ id, title, img }) => (
            <TemplateTypes
              key={id}
              title={title}
              img={img}
              id={id}
              findTemplateDescription={(id) => findTemplateDescription(id)}
            />
          ))}
        </div>
        <div className="w-full h-full col-span-2 px-12 py-8">
          <TemplateDescription {...templateDescription} />
        </div>
      </div>
    </div>
  );
};

export default TemplateBoard;
