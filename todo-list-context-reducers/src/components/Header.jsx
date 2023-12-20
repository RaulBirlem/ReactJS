import './Header.scss';
import { useTodos } from '../TodosContext.jsx';






function Header({ appName }) {
    const storeContext = useTodos();

    return (
      <>
        <div className="header">
            <div className="container">
                <div className="header-side">
                    <h1>
                        {appName}
                    </h1>
                </div>
                <div className="header-side">
                    <button onClick={()=>{storeContext.setModelIsActive(true)}}
                    /* quando tiver argumento(true) precisa da arrow function */
                    className="btn secondary">+ Add Task</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Header