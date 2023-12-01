import { useState } from "react"

export default function SearchBar() {

    const [search, setSearch] = useState("")

    return (
        <div className="search-container">
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}
