import AddTodoModel from '../Model/AddTodoModel.jsx';
import ModelWindow from '../Model/ModelWindow.jsx';
import Filter from '../components/Filter.jsx';
import TodosList from '../components/TodosList.jsx';
import { useTodos } from '../TodosContext.jsx';



function Home() {

    const storeContext = useTodos();

    return (
    <>
        {storeContext.modelIsActive &&
        <ModelWindow>
            <AddTodoModel/>
        </ModelWindow>
        }
        <div className="container">
            <Filter />
        
            <TodosList />
        </div>

    </>
    )
  }
  
  export default Home
