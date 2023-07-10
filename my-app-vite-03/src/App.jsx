
import './App.css'
import MyForm from './assets/components/MyForm'

function App() {

  return (
    <>
    <h2>Forms</h2>
    <MyForm user={{name:"Anon", email:"anon@247gmail.com",bio:"Sou um advogado", role:'admin'}}/>
    </>
  )
}

export default App
