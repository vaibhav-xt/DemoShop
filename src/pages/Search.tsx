import SearchBar from "../components/SearchBar";
import LatestTrends from "../components/LatestTrends";
import { useSearch } from "../context/SeachContext";

export default function Search() {
    const { search } = useSearch()
    return (
        <div className="search-main-container">
            <SearchBar />
            {search && <LatestTrends />}
        </div>
    )
}
