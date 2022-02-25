import { useContext } from "react"
import { ProductContext } from "./productCard"
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {

    const { increaseBy, count } = useContext(ProductContext)

    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}> - </button>
            <div className={styles.countLabel}>{count}</div>
            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}