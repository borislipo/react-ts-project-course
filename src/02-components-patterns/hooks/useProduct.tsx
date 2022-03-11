import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductProps {
    onChange?: (args: onChangeArgs) => void
    product: Product;
    value?: number;
    initialValues: InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductProps) => {

    const [count, setCount] = useState<number>(initialValues?.count || value)

    const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        let newValue = Math.max(count + value, 0)

        if (initialValues && initialValues.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCount(newValue)
        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCount(initialValues?.count || value)

    }


    useEffect(() => {

        if (!isMounted.current) {
            isMounted.current = true
            return
        }
        setCount(value)

    }, [value])



    return {
        count,
        increaseBy,
        maxCount: initialValues?.maxCount,
        reset
    }
}