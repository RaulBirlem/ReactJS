
import { useState } from "react";

const ManageData = () => {


    let someData =10;

    const [number, setNumber] = useState(15);
    console.log(number);
  return (
    <div>
        <p>Valor: {someData}</p>
        <p onClick={()=>(someData=15)}>Mudar valor.</p>

        <div>
            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(34)}>Mudar valor</button>
            <p>Valor: {number}</p>
        </div>
    </div>
  )
}

export default ManageData