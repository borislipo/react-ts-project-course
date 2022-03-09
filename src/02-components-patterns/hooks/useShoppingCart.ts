import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((prevShoppingCart) => {
      if (count === 0) {
        //Puedo separar del resto de elementos en prevShoppingCart asignando el key value [product.id] asignandole un nuevo nombre "toDelete"
        //Y asignar el resto de los key/value a un argumento llamado ...rest / rest

        const { [product.id]: toDelete, ...rest } = prevShoppingCart;
        console.log(toDelete);
        return rest;
      }

      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductChange,
  };
};
