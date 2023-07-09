//css
import { useState } from 'react'
import './App.css'
//images
import City from './assets/city.jpg'
//components
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'


function App() {
  //const name = "1337";
  const [userName] = useState("ATz");
  return (
    <>
    {/* imagem em public */}
    <div>
      <img src="/img1.jpg" alt="Paisagem" />
    </div>
    {/* imagem em src */}
    <div>
      <img src={City} alt="Cidade" />
    </div>
     <ManageData/>
     <ListRender/>
     <ConditionalRender/>
     {/* props */}
     <ShowUserName name={userName}/>
     {/* desctructing */}
     <CarDetails brand="VW" km={1000} color="Azul" newCar={false}/>
     {/* reaproveitamento */}
     <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true}/>
     <CarDetails brand="Fiat" color="Preto" km={4500} newCar={false}/>


    </>
  )
}

export default App
