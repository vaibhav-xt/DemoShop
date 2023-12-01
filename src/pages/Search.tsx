import SearchBar from "../components/SearchBar";
import logo from '../assets/logo.webp'
import LatestTrends from "../components/LatestTrends";

export default function Search() {
    return (
        <div className="search-main-container">
            <img src={logo} alt="logo" className="logo" />
            <SearchBar />
            <LatestTrends />
        </div>
    )
}
