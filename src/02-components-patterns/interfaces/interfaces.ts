import { ReactElement } from "react";

export interface Product {
  id: string;
  name: string;
  src?: string;
}

export interface ProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ChildrenProps {
  reset: () => void;
  count: number;
  maxCount?: number;
  increaseBy: (value: number) => void;
}
