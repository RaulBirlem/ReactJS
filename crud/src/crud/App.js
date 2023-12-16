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
}