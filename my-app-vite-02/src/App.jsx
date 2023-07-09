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
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'


function App() {
  //const name = "1337";
  const [userName] = useState("ATz");

  const cars = [
    {id:1, brand:"Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id:2, brand:"Fiat", color:"Branco", newCar: false, km: 8000},
    {id:3, brand:"Ford", color:"Preto", newCar: false, km: 11000}
  ]

  function showMessage(){
    console.log("Evento do componente pai!");
  }


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
     {/* loop array de objetos  */}
     {cars.map((car) =>(
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      km={car.km}
      newCar={car.newCar}
      />
     ))}
     {/* fragment */}
     <Fragment propFragment="Teste"/>
     {/* children */}
     <Container myValue="testing">
      <p>Este é um conteúdo.</p>
     </Container>
     <Container myValue="testing 2">
      <p>Este é um conteúdo novo.</p>
     </Container>
     {/* executar função passar por props */}
     <ExecuteFunction myFunction={showMessage}/>
    </>
  )
}

export default App
