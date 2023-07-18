
import './App.css'


// react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

//components
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Info from './pages/Info'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      {/* links */}

      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          {/* dinamic routes */}
          <Route path="/products/:id" element={<Product/>}/>
          {/* nested routes */}
          <Route path="/products/:id/info" element={<Info/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
