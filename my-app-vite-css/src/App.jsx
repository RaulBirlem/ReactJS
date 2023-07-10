
import './App.css'
import MyComponent from './assets/components/MyComponent'
import { useState } from 'react';

function App() {
  const n =15;
  const[name]= useState("Anon");
  return (
   
    <>
    {/* css global */}
    <h1>React com CSS</h1>
    {/* css component */}
    <MyComponent/>
    <p>App.js paragrafo</p>

    {/* inline css */}
    <p style={{color:"blue", padding:"10px",borderTop:"2px solid red"}}>Elemento estilizado de forma inline </p>
    {/* CSS Inline dinâmico */}
    <h2 style={n < 10 ? ({color:"purple"}):({color:"yellow"})}>CSS dinâmico</h2>
    <h2 style={name=== "Anon" ? ({color:"green",backgroundColor:"#000"}):null}>{name}</h2>
    </>
  )
}

export default App
