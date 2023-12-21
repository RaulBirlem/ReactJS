import { useTodos } from "../TodosContext"
import './EditTodoModel.scss';


function EditTodoModel({todo}) {
 
    const storeContext = useTodos();
    
    /* validate */
    function editTodoModel(){
        const newTitle = document.querySelector('input[name=title]').value;
        const newDescription = document.querySelector('textarea[name=description]').value;

        if (newTitle && newDescription) {
            // Dispara a ação 'edited' com o todo atualizado
            storeContext.dispatch({ 
                type: 'edited', 
                id: todo.id, 
                newTitle: newTitle,
                newDescription: newDescription 
            });
            storeContext.setModelEditIsActive(false);
        } else {
            alert('Preencha todos os campos');
        }
    
    }
    return (
    <>
        <div className="formEdit">      
            <h3>Editar tarefa</h3>
            <label htmlFor="title">Título </label>
            <input type="text" name="title" placeholder="Adicione um título" /><br />
            <label htmlFor="description">Descrição </label>
            <textarea name="description" rows="4" placeholder="Coloque sua descrição" /><br />
            <button onClick={editTodoModel}
            className="btn gray">Editar</button>
        </div>
    </>
    )
  }
  
  export default EditTodoModel