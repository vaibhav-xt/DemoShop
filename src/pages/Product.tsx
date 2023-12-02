// Product.tsx
import React from "react";
import FilterCard from "../components/FilterCard";
import ProductsDisplay from "../components/ProductsDisplay";
import SearchBar from "../components/SearchBar";

interface Filter {
    category: string;
    price: string;
}

export default function Product() {
    const [filter, setFilter] = React.useState<Filter>({
        category: "",
        price: "",
    });

    return (
        <div className="product-container">
            <SearchBar />
            <p>Search Results</p>
            <div className="products-section">
                <FilterCard filter={filter} setFilter={setFilter} />
                <ProductsDisplay filter={filter} />
            </div>
        </div>
    );
}
