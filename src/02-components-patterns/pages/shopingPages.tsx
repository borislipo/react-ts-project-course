import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    name: 'coffe mug',
    src: './coffe-mug.png'
}


export const ShopingPage = () => {
    return (
        <div >
            <h1>Shopping Page</h1>
            <div className="">
                <ProductCard className="bg-dark" product={product} style={{ backgroundColor: 'red' }} >
                    <ProductImage className='custom-image' />
                    <ProductTitle className="text-white" />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

            </div>
        </div>
    )
} 