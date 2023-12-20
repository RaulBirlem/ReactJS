import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';




function TodosList() {

  const storeContext = useTodos();










  return (
    <>
        <div className="todos">

            {storeContext.filteredTodos().length ? storeContext.filteredTodos().map(todo => 
              <Todo
              todo={todo}/* prop */
              key={todo.id}
            />
            ) : 'Nenhuma tarefa feita!'}
            

        </div>
    </>
  )
}

export default TodosList