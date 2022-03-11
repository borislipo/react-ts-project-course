import { ReactElement, createContext, useContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'

import { ProductContextProps, Product, onChangeArgs, InitialValues, ChildrenProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export interface Props {
    product: Product;
    //children: ReactElement | ReactElement[];
    children: (args: ChildrenProps) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues: InitialValues;

}



export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { count, increaseBy, maxCount, reset } = useProduct({ onChange, product, value, initialValues })

    return (

        <div className={`${styles.productCard} ${className} `} style={style}>
            {/*evertyhing i put inside value is going to be part of the Conctext in this case ProductContext*/}
            <Provider value={{ count, increaseBy, product, maxCount: initialValues.maxCount }}>
                {children({ count, increaseBy, maxCount, reset })}
            </Provider >
        </div>


    )
}