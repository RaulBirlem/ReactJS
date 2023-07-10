import './MyForm.css'
import { useState } from 'react'

const MyForm = () => {

  // - gerenciar dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) =>{
    setName(e.target.value);
  }
  console.log(name)
  console.log(email)
  return (
    <div>
        
        {/* - criar form */}

        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name"placeholder='Digite o seu nome'
                 onChange={handleName}/>
            </div>
            {/* label input */}
            <label> 
                <span>E-mail</span>
                <input type="email" name="email" placeholder='digite o seu e-mail'
                 onChange={(e)=> setEmail(e.target.value) } />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm