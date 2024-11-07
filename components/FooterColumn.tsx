import React from "react";
import { FooterLinkType } from "@/types";
import FooterLink from "./FooterLink";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: FooterLinkType[];
}) => {
  return (
    <div className="w-full flex flex-col items-start px-2 py-4">
      <h5
        className={`text-2xl mb-5 font-oswald ${
          title.toLowerCase() === "pricing" ? "text-greenBackground" : ""
        }`}
      >
        {title}
      </h5>
      <ul className="w-full h-full flex flex-col items-start gap-2">
        {links.map(({ id, link, sublink }) => (
          <FooterLink key={id} link={link} sublink={sublink} />
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
