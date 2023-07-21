
import './App.css'
import { BrowserRouter, Routes, Route } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
// components
import Navbar from "./components/Navbar";
function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
