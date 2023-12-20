import { useContext } from 'react';
import { TodosContext } from '../TodosContext.js';
import Todo from './Todo.jsx';




function TodosList() {

  const storeContext = useContext(TodosContext);


  function deleteHandler(id){
    if(confirm('Are you sure you want delete the to-do?')){
      storeContext.setTodos(storeContext.todos.filter(todo => todo.id !== id));
    }
  }


  function toggleIsDoneHandler(id){
    storeContext.setTodos(storeContext.todos.map(todo => {
        if (todo.id === id){
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      }));

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