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
     <ShowUserName name={userName}/>
    </>
  )
}

export default App
