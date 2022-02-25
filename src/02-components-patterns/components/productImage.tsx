import { useContext } from "react";
import { ProductContext } from "./productCard";
import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string

    if (img) {
        imgToShow = img;
    } else if (product.src) {
        imgToShow = product.src
    } else {
        imgToShow = noImg
    }

    return (
        <img className={styles.productImg} src={img ? img : noImg} alt="coffee mug" />
    )
}