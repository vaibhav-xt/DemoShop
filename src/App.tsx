import Search from './pages/Search'
import Product from './pages/Product'
import './scss/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Search} />
        <Route path='/product' Component={Product} />
      </Routes>
    </Router>
  )
}
