import SearchBar from "../components/SearchBar";
import logo from '../assets/logo.webp'

export default function Search() {
    return (
        <div className="search-main-container">
            <img src={logo} alt="logo" className="logo" />
            <SearchBar />
        </div>
    )
}
