const express = require('express');
const mysql2 = require('mysql2');

const app = express();

// Conexão com o db
const connection = mysql2.createConnection({
    host:'localhost',
    port:3306,
    database:'crud',
    user:'root',
    password:'root'
});

//Iniciando servidor
app.listen(3000, () => {
    console.log(`Servidor iniciado na porta 3000`);
});


//Rotas CRUD
app.get('/', (req,res) => {
    //Recuperando os registros do db
    connection.query('SELECT * FROM usuarios', (err, results) =>{
        if(err) {
            res.sendStatus(500);
        } else {
            res.json(results);
        }
    });
});

