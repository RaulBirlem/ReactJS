import { useSelector,useDispatch } from 'react-redux';
import { selectNotes, eraseNote, addNote } from '../store/notesSlice.js';



function Notes({bookId}) {

    const dispatch = useDispatch();
    function handleEraseNote(id){
      dispatch(eraseNote(id))
    }

  
 

    function handleAddNote(e){
        e.preventDefault();

        const newNote = {
            book_id:bookId,
            title:document.querySelector('input[name=title]').value,
            text:document.querySelector('textarea[name=note]').value,
           
          }

        if (newNote.title && newNote.text ){
            dispatch(addNote(newNote))
            document.querySelector('input[name=title]').value ="";
            document.querySelector('textarea[name=note]').value ="";
        
        }else {
            alert('Preencha os campos obrigatórios!');
        }
       
      
    }
    const notes = useSelector(selectNotes).filter(note => note.book_id == bookId);

    return (
      <>

        <div className="notes-wrapper">



            
            <h2>Anotações</h2>
              {notes.length ?
               <div className="notes">
               {notes.map(note => 
                   <div key={note.id} className="note">
                       <div onClick={()=>handleEraseNote(note.id)} className="erase-note">Apagar</div>
                       <h3>{note.title}</h3>
                       <p>{note.text}</p>
                   </div>
                   )}
           </div>   

            : <h4>Nenhuma anotação encontrada</h4>
              }
          
            

            <details>
                <summary>Adicionar anotação</summary>
                <form className="add-note">
                    <div className="form-control">
                        <label>Título </label>
                        <input type="text" name="title" placeholder="Add a note title" />
                    </div>
                    <div className="form-control">
                        <label>Anotação </label>
                        <textarea type="text" name="note" placeholder="Add note" />
                    </div>
                    
                    <button onClick={(e) => {handleAddNote(e)}}
                    className="btn btn-block">Adicionar</button>
                </form>
            </details>

        </div>

      </>
    )
  }
  
  export default Notes
  