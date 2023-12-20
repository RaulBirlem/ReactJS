import './Filter.scss';
import { useTodos } from '../TodosContext.jsx';










function Filter() {
   
    const storeContext = useTodos();

    return (
    <>
        <div className="filters">
            <div>
                <p>Filter by state</p>
                <div className="badges">
                    <div className={`badge ${storeContext.filterBy === 'todo' ? 'selected' : ''}`}>
                        To-Do
                    </div>
                    <div className={`badge ${storeContext.filterBy === 'done' ? 'selected' : ''}`}>
                        Done
                    </div>
                    {
                        storeContext.filterBy && 
                        <span className="clear">
                        x clear
                    </span>
                    }
                    
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter