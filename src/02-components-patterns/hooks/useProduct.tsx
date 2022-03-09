import { useEffect, useState } from "react"
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductProps {
    onChange?: (args: onChangeArgs) => void
    product: Product;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {

    const [count, setCount] = useState(value)

    const increaseBy = (value: number) => {
        const newValue = Math.max(count + value, 0)
        setCount(newValue)
        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {

        setCount(value)

    }, [value])

    return {
        count,
        increaseBy
    }
}