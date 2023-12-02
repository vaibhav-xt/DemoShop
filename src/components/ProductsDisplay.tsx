import React, { useState } from 'react';
import { data } from '../data';

interface Card {
    product: {
        thumbnail: string;
        title: string;
        price: number;
    };
}

const ProductCard: React.FC<Card> = ({ product }) => {
    const [whish, setWish] = useState<boolean>(false)

    return (
        <div>

            {
                whish ?
                    <i className="fa-solid fa-heart" style={{ "color": "red" }} onClick={() => setWish(false)}></i>
                    : <i className="fa-regular fa-heart" onClick={() => setWish(true)}></i>
            }
            <div>
                <img src={product.thumbnail} alt="" />
                <p>View Product</p>
            </div>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};

const ProductsDisplay = () => {
    return (
        <div className="productDisplay-container">
            {data.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductsDisplay;
