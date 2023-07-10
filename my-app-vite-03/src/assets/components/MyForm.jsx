import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        
        {/* - criar form */}

        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name"placeholder='Digite o seu nome'/>
            </div>
            {/* label input */}
            <label> 
                <span>E-mail</span>
                <input type="email" name="email" placeholder='digite o seu e-mail' />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm