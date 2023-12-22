import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { addBook } from '../store/booksSlice.js';


function AddBookPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pageTitle = "Adicionar Livro";
    function handleAddBook(e){
        e.preventDefault();

        const newBook = {
            title:document.querySelector('input[name=title]').value,
            cover:document.querySelector('input[name=cover]').value,
            isRead:false,
            author:document.querySelector('input[name=author]').value,
            synopsis:document.querySelector('textarea[name=synopsis]').value, 
        }

        if (newBook.title && newBook.cover && newBook.author){
            dispatch(addBook(newBook))
            alert("Adicionado!")
            navigate("/"); /* retorna ao inicio */
        }else {
            alert('Preencha os campos obrigatórios!');
        }
       
      
    }
    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />

            <form className="add-form">
                <div className="form-control">
                    <label>Título</label>
                    <input type="text" name="title" placeholder="Adicionar título" />
                </div>
                <div className="form-control">
                    <label>Capa do Livro</label>
                    <input type="text" name="cover" placeholder="Adicionar url da imagem" />
                </div>

                <div className="form-control">
                <label>Autor</label>
                <input
                    type="text" name="author" placeholder="Nome do autor" />
                </div>

                <div className="form-control">
                <label>Descrição</label>
                <textarea
                    type="text" name="synopsis" placeholder="O livro é sobre..." />
                </div>
                
                <button onClick={(e)=> handleAddBook(e)} className="btn btn-block">Adicionar</button>
            </form>

        </div>

        
      </>
    )
  }
  
  export default AddBookPage
  