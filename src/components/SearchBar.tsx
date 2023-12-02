import logo from '../assets/logo.webp'
import { useSearch } from "../context/SeachContext"
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const { search, setSearch } = useSearch()
    const navigate = useNavigate()

    const formSubmit = () => {
        navigate('/product')
    }

    return (
        <>
            <img src={logo} alt="logo" className="logo" />
            <form className="search-container" onSubmit={formSubmit}>
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
        </>
    )
}
