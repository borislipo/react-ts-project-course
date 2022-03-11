import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"
import { products } from "../data/products"
import '../styles/custom-styles.css'

const product = products[0]

export const ShopingPage = () => {


    return (
        <div >
            <h1>Shopping Page</h1>

            <ProductCard key={product.id}
                className="bg-dark"
                product={product}
                style={{ backgroundColor: '#70D1F8' }}
                initialValues={{ count: 4, maxCount: 10 }}
            >
                {
                    ({ reset }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className="text-white" />
                            <ProductButtons className='custom-buttons' />
                            <button onClick={() => reset()}>reset</button>
                        </>

                    )
                }

            </ProductCard>

        </div>
    )
} 