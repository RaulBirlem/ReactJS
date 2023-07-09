import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Pedro","Matheus","Andre","Maria"]);

    const [users] = useState([
        {id:1, name:"Matheus", age:22},
        {id:2, name:"Pedro", age:33},
        {id:3, name:"Andre", age:53}
    ])
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
    </div>
  )
}

export default ListRender