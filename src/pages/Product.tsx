import FilterCard from "../components/FilterCard";
import SearchBar from "../components/SearchBar";

export default function Product() {
    return (
        <div className="product-container">
            <SearchBar />
            <p>Search Results</p>
            <FilterCard />
        </div>
    )
}
