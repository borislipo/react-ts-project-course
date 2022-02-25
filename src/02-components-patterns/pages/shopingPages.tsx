import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"

const product = {
    id: '1',
    name: 'coffe mug',
    src: './coffe-mug.png'
}


export const ShopingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <div className="">
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
} 