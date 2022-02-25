import { ReactElement, createContext, useContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'

import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export interface Props {
    product: Product;
    children: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties

}



export const ProductCard = ({ product, children, className, style }: Props) => {

    const { count, increaseBy } = useProduct()

    return (

        <div className={`${styles.productCard} ${className} `} style={style}>
            {/*evertyhing i put inside value is going to be part of the Conctext in this case ProductContext*/}
            <Provider value={{ count, increaseBy, product }}>
                {children}
            </Provider >
        </div>


    )
}