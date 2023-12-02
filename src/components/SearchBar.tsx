import logo from '../assets/logo.webp'
import { useSearch } from "../context/SeachContext"
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const { search, setSearch } = useSearch()
    const navigate = useNavigate()

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (search) navigate('/product')
    }

    return (
        <>
            <img src={logo} alt="logo" className="logo" />
            <form className="search-container" onSubmit={(e) => formSubmit(e)}>
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    )
}
