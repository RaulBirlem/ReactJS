import { useContext } from 'react';
import { TodosContext } from '../TodosContext.js';
import Todo from './Todo.jsx';




function TodosList() {

  const storeContext = useContext(TodosContext);


  function deleteHandler(id){
      storeContext.dispatch({
        type:'deleted',
        id: id
      });
      //storeContext.setTodos(storeContext.todos.filter(todo => todo.id !== id));
    }
  


  function toggleIsDoneHandler(id){
    storeContext.dispatch({
      type:'toggledIsDone',
      id: id
    });
    }
  








  return (
    <>
        <div className="todos">

            {storeContext.todos.map(todo => 
              <Todo
              deleteTodo={(id)=> deleteHandler(id)}
              toggleIsDone={(id)=> toggleIsDoneHandler(id)}
              todo={todo}/* prop */
              key={todo.id}
            />
            )}
            

        </div>
    </>
  )
}

export default TodosList