import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Pedro","Matheus","Andre","Maria"]);

    const [users, setUsers] = useState([
        {id:1, name:"Matheus", age:22},
        {id:2, name:"Pedro", age:33},
        {id:3, name:"Andre", age:53}
    ])

    // previous state - usa o valor anterior para transformar 
    // em um valor novo ex : [users, setUsers]
    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender