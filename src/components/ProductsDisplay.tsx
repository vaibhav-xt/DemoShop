import React, { useState } from 'react';
import { data } from '../data';
import { useSearch } from '../context/SeachContext';

interface Card {
    product: {
        thumbnail: string;
        title: string;
        price: number;
    };
}

interface Filter {
    category: string;
    price: string;
}

const ProductCard: React.FC<Card> = ({ product }) => {
    const [wish, setWish] = useState<boolean>(false);

    return (
        <div>
            {
                wish ?
                    <i className="fa-solid fa-heart" style={{ color: "red" }} onClick={() => setWish(false)}></i>
                    : <i className="fa-regular fa-heart" onClick={() => setWish(true)}></i>
            }
            <div>
                <img src={product.thumbnail} alt={product.title} />
                <p>View Product</p>
            </div>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};

const ProductsDisplay: React.FC<{ filter: Filter }> = ({ filter }) => {
    const { category, price } = filter;
    const { search } = useSearch()

    const filterData = data.filter((product) => {
        const categoryMatch = !category || product.category === category;

        const priceMatch = !price || (price === '>50' && product.price > 50) || (price === '<50' && product.price < 50);

        const searchMatch = !search || product.title.toLowerCase().includes(search.toLowerCase());
        return categoryMatch && priceMatch && searchMatch;
    });

    return (
        <div className="productDisplay-container">
            {filterData.length !== 0 ? filterData.map((product, index) => (
                <ProductCard key={index} product={product} />
            )) : <p>Product Not Found!</p>}
        </div>
    );
};

export default ProductsDisplay;
