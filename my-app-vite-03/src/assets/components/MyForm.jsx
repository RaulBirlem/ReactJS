import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
  //controlled inputs


  // - gerenciar dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) =>{
    setName(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário")
    console.log(name,email)
  }
  return (
    <div>
        
        {/* - criar form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name"placeholder='Digite o seu nome'
                 onChange={handleName} value={name}/>
            </div>
            {/* label input */}
            <label> 
                <span>E-mail</span>
                <input type="email" name="email" placeholder='digite o seu e-mail'
                 onChange={(e)=> setEmail(e.target.value) }
                 value={email} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm