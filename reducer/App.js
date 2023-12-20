import './App.css'
import { counterReducer } from './countReducer';
import React from 'react';



// Não altere o nome do componente "App"
export default function App() {
    
    // useReducer é criado assim porque este exercício não suporta a importação direta
    const useReducer = React.useReducer;
  const [count, dispatch] = useReducer(counterReducer, 0); // Inicialize o estado do contador como 0

   
     function handleIncrement() {
        dispatch({ type: 'INCREMENT' });
      }
    
      function handleDecrement() {
         if (count > 0) {
      dispatch({ type: 'DECREMENT' });
    }
      }
    
      function resetCount() {
        dispatch({ type: 'RESET' });
      }

 
  return (
    <>
      <div className="container">
        <h2>Counter App</h2>
        <p className="counter">{count}</p>
        <div className="buttons">
          <button className="increment" onClick={handleIncrement}>
            Aumentar
          </button>
          <button className="decrement" onClick={handleDecrement}>
            Diminuir
          </button>
          <button className="reset" onClick={resetCount}>
            Zerar
          </button>
        </div>
      </div>
    </>
  );
}