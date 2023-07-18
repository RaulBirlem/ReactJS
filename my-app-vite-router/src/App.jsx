
import './App.css'


// react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'

//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      {/* links */}

      <Navbar/>
      {/* search  */}
      <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          {/* dinamic routes */}
          <Route path="/products/:id" element={<Product/>}/>
          {/* nested routes */}
          <Route path="/products/:id/info" element={<Info/>}/>
          {/* search */}
          <Route path="/search" element={<Search/>}/>
          {/* no match route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
