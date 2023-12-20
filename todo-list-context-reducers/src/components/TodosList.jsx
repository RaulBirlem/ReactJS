import { useContext } from 'react';
import { TodosContext } from '../TodosContext.jsx';
import Todo from './Todo.jsx';




function TodosList() {

  const storeContext = useContext(TodosContext);










  return (
    <>
        <div className="todos">

            {storeContext.todos.map(todo => 
              <Todo
              todo={todo}/* prop */
              key={todo.id}
            />
            )}
            

        </div>
    </>
  )
}

export default TodosList