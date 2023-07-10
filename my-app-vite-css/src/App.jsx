
import './App.css'
import MyComponent from './assets/components/MyComponent'
import { useState } from 'react';
import Title from './assets/components/Title';

function App() {
  const n =15;
  const[name]= useState("Anon");
  const redTitle = true;
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
    {/* Classe Dinâmica */}
    <h2 className={redTitle ? "red-title" : "title"}>
      Esta título terá classe dinâmica</h2>
    {/* CSS Modules Component*/}
    <Title/>
    <h2 className="my_title">Testando</h2>

    </>
  )
}

export default App
