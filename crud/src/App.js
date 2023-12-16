import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
    //Estado
    const [usuarios, setUsuarios] = useState([]);

    //Rotas
    const apiUrl = 'http://localhost:3000/api';

    //Recuperando todos os registros do banco de dados
    const fetchUsuarios = async () => {
        const response = await axios.get(`${apiUrl}/usuarios`);
        setUsuarios(response.data);
    };
    //Adicionando um novo registro
    const addUsuario = async (nome, email) => {
        const response = await axios.post(`${apiUrl}/usuarios`, {nome, email});
        if(response.data.success) {
            fetchUsuarios();
        }
    }

   //Atualizando um registro
   const updateUsuario = async ( id, nome, email) => {
    const response = await axios.put(`${apiUrl}/usuarios/${id}`, {nome, email});
    if(response.data.success) {
        fetchUsuarios();
    }
   }
    
   //Deletando um registro
   const deleteUsuario = async (id) => {
    const response = await axios.delete(`${apiUrl}/usuarios/${id}`);
    if(response.data.success) {
        fetchUsuarios();
    }
   }

   //Renderização

   return (
    <div>
        <h1>CRUD com React JS, MySQL e Axios</h1>

        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <button onClick={() => updateUsuario(usuario.id, 'Novo nome', 'novo@email.com')}>
                      Atualizar
                    </button>
                    <button onClick={() => deleteUsuario(usuario.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>

        <form onSubmit ={(event) => addUsuario(event.target.nome.value, event.target.email.value)}>
          <input type='text' name='nome' placeholder='Nome'/>
          <input type='email' name='email' placeholder='Email'/>
          <button type='submit'>Adicionar</button>
        </form>
    </div>
   )
}

export default App;