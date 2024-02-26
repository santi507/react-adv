import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css";

const product = {
    id: "1",
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Coffee Mug" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: 'red' }}>
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'right' }} />
                </ProductCard>

            </div>
        </div>
    )
}