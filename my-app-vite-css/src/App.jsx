
import './App.css'
import MyComponent from './assets/components/MyComponent'

function App() {
 

  return (
    <>
    {/* css global */}
    <h1>React com CSS</h1>
    {/* css component */}
    <MyComponent/>
    <p>App.js paragrafo</p>

    {/* inline css */}
    <p style={{color:"blue", padding:"10px",borderTop:"2px solid red"}}>Elemento estilizado de forma inline </p>
    </>
  )
}

export default App
