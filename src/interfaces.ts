export interface SiZeAndPrice {
  index: number;
  size: string;
  price: number;
}

export interface Product {
  title: string;
  text: JSX.Element[];
  imageSrc: string;
  price?: number;
  prices?: SiZeAndPrice[];
}
