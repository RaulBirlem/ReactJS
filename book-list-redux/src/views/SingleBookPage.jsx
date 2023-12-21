import { useParams, Link, useNavigate } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, eraseBook } from '../store/booksSlice.js';





function SingleBookPage() {
    
    const {id} = useParams();
    const books = useSelector(selectBooks);

    
    const dispatch = useDispatch();

    const navigate = useNavigate();
   
    function handleEraseBook(id) {
      if (confirm('Apagar livro?')){
        dispatch(eraseBook(id))/* envia o id para o action.payload */
        navigate("/");
      }
    }
    /* search book for id */
    const book = books.filter(book => book.id == id) [0];
    
    return (
      <>
        <div className="container">
                <Link to="/">
                <button className="btn">
                    ← Back to Books
                </button>
                </Link>
                


            {book ? 
            <div>
                <div className="single-book">
                      <div className="book-cover">
                          <img src={book.cover} />
                      </div>

                      <div className="book-details">
                          <h3 className="book-title">{ book.title }</h3>
                          <h4 className="book-author">{ book.author }</h4>
                          <p>{book.synopsis}</p>
                          <div className="read-checkbox">
                              <input type="checkbox" defaultChecked={book.isRead} />
                              <label>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</label>
                          </div>
                          <div onClick={()=>handleEraseBook(book.id)} className="erase-book">
                              Erase book
                          </div>
                      </div>
              </div>

            <Notes />
            </div> :
            <div>
              <p>Nenhum livro encontrado.</p>
            </div> }
            

        </div>

        
      </>
    )
  }
  
  export default SingleBookPage
  