import { useContext } from "react";
import { ProductContext } from "./productCard";
import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

interface ProductImageProps {
    img?: string;
    className?: string;
}


export const ProductImage = ({ img, className }: ProductImageProps) => {

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
        <img className={`${styles.productImg} ${className}`} src={img ? img : noImg} alt="coffee mug" />
    )
}