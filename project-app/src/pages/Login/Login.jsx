import styles from './Login.module.css'


import { useAuthentication } from '../../hooks/useAuthentication'
import { useEffect,useState } from 'react'

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError,loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const user = {
      email,
      password
    }
    
    const res = await createUser(user)
    console.log(res)
  }


  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  },[authError])

  return (
    <div className={styles.login}>
      <h1>Entrar  </h1>
      <p>Faça o login para acessar sua página</p>
      <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="E-mail de usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" name="password" required placeholder="Senha de usuário" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          {!loading && <button className='btn'>Entrar</button>}
          {loading && (<button className='btn' disabled>Carregando</button>)}
          {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login