import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
       <h1>Fim de Jovo!</h1>
       <h2>A sua pontuação foi:<span>{score}</span></h2>
      <button onClick={retry}>Resetar</button>

    </div>
  )
}

export default GameOver