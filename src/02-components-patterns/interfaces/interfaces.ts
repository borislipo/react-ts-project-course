import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  name: string;
  src?: string;
}

export interface ProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: Product;
}
