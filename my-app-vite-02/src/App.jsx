
import './App.css'

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'


function App() {
  

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
    </>
  )
}

export default App
