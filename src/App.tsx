import Search from './pages/Search'
import Product from './pages/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './context/SeachContext'

export default function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path='/' Component={Search} />
          <Route path='/product' Component={Product} />
        </Routes>
      </Router>
    </SearchProvider>
  )
}
