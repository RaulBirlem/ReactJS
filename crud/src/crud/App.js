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

    
}