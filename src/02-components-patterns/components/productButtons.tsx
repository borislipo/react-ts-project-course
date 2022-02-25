import { useContext } from "react"
import { ProductContext } from "./productCard"
import styles from '../styles/styles.module.css'

interface ProductButtonsProp {
    className?: string;
}

export const ProductButtons = ({ className }: ProductButtonsProp) => {

    const { increaseBy, count } = useContext(ProductContext)

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}> - </button>
            <div className={styles.countLabel}>{count}</div>
            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}