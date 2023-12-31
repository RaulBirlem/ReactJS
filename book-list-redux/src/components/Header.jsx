import {NavLink} from 'react-router-dom'

/* navlink has active class */

function Header({pageTitle}) {

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">
                    <NavLink to="/">
                     <button className="btn">
                        Livros
                    </button> 
                    </NavLink>
                    

                    
                    <NavLink to="/add-book">
                      <button className="btn">
                        Adicionar +
                    </button>
                    </NavLink>

                    
               
            </div>
    
      </>
    )
  }
  
  export default Header
  