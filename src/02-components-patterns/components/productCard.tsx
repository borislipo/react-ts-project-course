import { ReactElement, createContext, useContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext



export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { count, increaseBy } = useProduct()

    return (

        <div className={styles.productCard}>
            {/*evertyhing i put inside value is going to be part of the Conctext in this case ProductContext*/}
            <Provider value={{ count, increaseBy, product }}>
                {children}
            </Provider >
        </div>


    )
}