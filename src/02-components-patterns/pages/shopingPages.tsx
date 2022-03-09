import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"
import '../styles/custom-styles.css'




export const ShopingPage = () => {

    const { shoppingCart, onProductChange } = useShoppingCart()

    return (
        <div >
            <h1>Shopping Page</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>

                {
                    products.map((product) => (
                        <ProductCard key={product.id}
                            className="bg-dark"
                            product={product}
                            style={{ backgroundColor: '#70D1F8' }}
                            onChange={onProductChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className="text-white" />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    )
                    )
                }
            </div>
            <div>

                {

                    Object.entries(shoppingCart).map(([key, product]) => (

                        <ProductCard key={key}
                            className="bg-dark"
                            product={product}
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onProductChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>

                    )
                    )
                }
            </div>


            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>

        </div>
    )
} 