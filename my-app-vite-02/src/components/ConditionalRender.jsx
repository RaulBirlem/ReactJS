import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);
    const [name, setName] = useState("Pedro");
  return (
    <div>
        <h1>Isso será exibido</h1>

        {x && <p>Se x for true, sim! </p>}
        {!x && <p>Agora x é falso! </p>}
{/* if ternario */}
        {name=== "João" ? (
            <div>
                <p>O nome é João </p>{/* {name} */}
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={()=>setName("João")}>Mudar nome</button>
    </div>
  )
}

export default ConditionalRender



// ternario :
// condição ? true : false
