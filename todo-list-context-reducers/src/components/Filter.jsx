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
                    <div onClick={()=>storeContext.setFilterBy('todo')}
                    className={`badge ${storeContext.filterBy === 'todo' ? 'selected' : ''}`}>
                        To-Do
                    </div>
                    <div onClick={()=>storeContext.setFilterBy('done')}
                    className={`badge ${storeContext.filterBy === 'done' ? 'selected' : ''}`}>
                        Done
                    </div>
                    {
                        storeContext.filterBy && 
                        <span onClick={()=>storeContext.setFilterBy('')} className="clear">
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