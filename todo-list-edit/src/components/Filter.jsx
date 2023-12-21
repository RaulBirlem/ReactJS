import './Filter.scss';
import { useTodos } from '../TodosContext.jsx';










function Filter() {
   
    const storeContext = useTodos();

    return (
    <>
        <div className="filters">
            <div>
                
                <div className="badges">
                    <div onClick={()=>storeContext.setFilterBy('todo')}
                    className={`badge ${storeContext.filterBy === 'todo' ? 'selected' : ''}`}>
                        Ativas
                    </div>
                    <div onClick={()=>storeContext.setFilterBy('done')}
                    className={`badge ${storeContext.filterBy === 'done' ? 'selected' : ''}`}>
                        Concluídas
                    </div>
                    {
                        storeContext.filterBy && 
                        <span onClick={()=>storeContext.setFilterBy('')} className="clear">
                        Limpar
                    </span>
                    }
                    
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter