import './Todo.scss';
import { useTodos } from '../TodosContext.jsx';







function Todo({ todo }) {


    const storeContext = useTodos();





  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
            <button 
                onClick={()=> storeContext.dispatch({
                    type:'deleted',
                    id: todo.id
                  })}
                className="erase"
            >
                x erase
            </button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                <input 
                    onClick={()=> storeContext.dispatch({
                        type:'toggledIsDone',
                        id: todo.id
                      })}
                    type="checkbox" 
                    defaultChecked={todo.isDone}
                 />
                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo