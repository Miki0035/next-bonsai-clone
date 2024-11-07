import { Dispatch, SetStateAction } from "react";

export type GridCardProps = {
  title: string;
  image: string;
  description: string;
};

export type ProductCardProps = {
  title: string;
  description: string;
  showGrid: () => void;
};

export type TemplateTypeProps = {
  title: string;
  img: string;
  id: number;
  findTemplateDescription: (id: number) => void;
};

export type TemplateDescriptionType = {
  id: number;
  title: string;
  descriptions: string[];
  link: string | "";
};

export type ContextTypeProps = {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

export type FooterLinkType = {
  id: number;
  link: string;
  sublink: string[];
};

export type FooterContentType = {
  product: {
    title: string;
    links: FooterLinkType[];
  },
  pricing: {
    title: string;
    links: FooterLinkType[];
  },
  freeResource: {
    title: string;
    links: FooterLinkType[];
  },
  templates: {
    title: string;
    links: FooterLinkType[];
  },
  bonsai: {
    title: string;
    links: FooterLinkType[];
  },
};
