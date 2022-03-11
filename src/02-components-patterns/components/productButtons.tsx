import { useContext } from "react"
import { ProductContext } from "./productCard"
import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css'

interface ProductButtonsProp {
    className?: string;
    maxCount?: number
}

export const ProductButtons = ({ className }: ProductButtonsProp) => {

    const { increaseBy, count, maxCount } = useContext(ProductContext)

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}> - </button>
            <div className={styles.countLabel}>{count}</div>
            <button onClick={() => increaseBy(1)}
                className={`${styles.buttonAdd} ${maxCount && maxCount === count && 'disabled'}`}
                disabled={maxCount && maxCount === count ? true : false}
            >+</button>
        </div>
    )
}