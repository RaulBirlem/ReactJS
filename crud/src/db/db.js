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




//Rotas CRUD
