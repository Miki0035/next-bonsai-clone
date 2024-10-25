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
  findTemplateDescription : (id : number) => void 
};

export type TemplateDescriptionType =  {
    id: number,
    title: string,
    descriptions: string [],
    link: string | "",
  }