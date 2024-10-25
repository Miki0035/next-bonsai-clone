import { TemplateDescriptionType } from "@/types";
import Link from "next/link";
import React from "react";

const TemplateDescription: React.FC<TemplateDescriptionType> = ({
  title,
  descriptions,
  link,
}) => {
  return (
    <div className="w-full flex flex-col">
      <h3 className="mb-4 self-start text-lg font-regular">Featured {title}</h3>
      <div className="w-[350px] flex flex-col items-center gap-5">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`w-full border border-2 rounded-sm container-${index} border-textColor flex justify-center py-6 px-7`}
          >
            <p className="text-textColor text-[14px] text-center">{desc}</p>
          </div>
        ))}
        <Link href={"#"} className=" text-greenBackground">{link}</Link>
      </div>
    </div>
  );
};

export default TemplateDescription;
