import { useState } from "react"
import logo from '../assets/logo.webp'

export default function SearchBar() {
    const [search, setSearch] = useState<string>("")

    return (
        <>
            <img src={logo} alt="logo" className="logo" />
            <div className="search-container">
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </>
    )
}
