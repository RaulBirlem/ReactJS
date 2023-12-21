import './Todo.scss';
import { useTodos } from '../TodosContext.jsx';
import { useState } from 'react';
import EditTodoModel from '../Model/EditTodoModel.jsx';







function Todo({ todo }) {


    const storeContext = useTodos();
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(prevState => !prevState);
         // Alterna o estado de edição
    }




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
                Excluir
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
                    {!todo.isDone ? 'Ativa' : 'Concluída'}
                </label>
                <label>
                <button onClick={handleEditClick} className="edit">
                    {isEditing ? 'Ok' : 'Editar'}
                    
                    </button>
                </label>
                    
            </div>
        </div>
        {isEditing && (
        <div className="edit-model">
         
         <EditTodoModel todo={todo} />
        </div>
      )}
    </>
  )
}

export default Todo