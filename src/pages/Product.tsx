import FilterCard from "../components/FilterCard";
import ProductsDisplay from "../components/ProductsDisplay";
import SearchBar from "../components/SearchBar";

export default function Product() {
    return (
        <div className="product-container">
            <SearchBar />
            <p>Search Results</p>
            <div className="products-section">
                <FilterCard />
                <ProductsDisplay />
            </div>
        </div>
    )
}
