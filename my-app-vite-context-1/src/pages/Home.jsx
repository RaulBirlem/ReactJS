import "./Home.css";
//import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
// hooks
import {useCounterContext} from "../hooks/useCounterContext"

const Home = () => {
 // const {counter} = createContext(CounterContext);

 //refactor context
  const {counter} = useCounterContext()
  return (
    <div>
     <h1>Home</h1>
     <p>Valor do context:{counter}</p>
     {/* alterar valor */}
     <ChangeCounter/>
    </div>
  );
};

export default Home;
