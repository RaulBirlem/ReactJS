import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';




function TodosList() {

  const storeContext = useTodos();










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