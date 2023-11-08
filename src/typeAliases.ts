export type SiZePriceType = {
  index: number;
  size: string;
  price: number;
};

export type ProductDataType = {
  title: string;
  text: JSX.Element[];
  imageSrc: string;
  price?: number;
  prices?: SiZePriceType[];
};
