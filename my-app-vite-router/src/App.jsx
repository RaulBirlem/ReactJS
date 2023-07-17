
import './App.css'


// react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './assets/pages/Home'
import About from './assets/pages/About'

//components
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
