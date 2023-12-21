import { useTodos } from "../TodosContext"



function AddTodoModel() {
 
    const storeContext = useTodos();

    /* validate */
    function addTaskHandler(){
        let newTodo = {isDone: false};
        newTodo.title = document.querySelector('input[name=title]').value;
        newTodo.description = document.querySelector('textarea[name=description]').value;
        if (newTodo.title && newTodo.description) {
            storeContext.dispatch({type:'added', newTodo});
            storeContext.setModelIsActive(false);
        } else {
            alert('Preencha todos os campos')
        }
    }
    return (
    <>
        <div className="form">      
            <h3>Adicionar uma nova tarefa</h3>
            <label htmlFor="title">Título </label>
            <input type="text" name="title" placeholder="Adicione um título" /><br />
            <label htmlFor="description">Descrição </label>
            <textarea name="description" rows="4" placeholder="Coloque sua descrição" /><br />
            <button onClick={addTaskHandler}
            className="btn gray">Adicionar</button>
        </div>
    </>
    )
  }
  
  export default AddTodoModel