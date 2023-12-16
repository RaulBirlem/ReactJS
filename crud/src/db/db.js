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

app.post('/', (req,res) => {
    //Novo registro no db
    const {nome, email} = req.body;
    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    connection.query(sql, [nome, email], (err, result)=> {
        if(err){
            res.sendStatus(500);
        } else {
            res.json({
                success:true,
                message:'Dados inseridos com sucesso',
            });
        }
    });
});;

app.put('/', (req, res) => {
    // Atualizando um registro no banco de dados
    const { id, nome, email } = req.body;
    const sql = `UPDATE usuarios SET nome = ?, email = ? WHERE id = ?`;
    connection.query(sql, [nome, email, id], (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json({
          success: true,
          message: 'Registro atualizado com sucesso',
        });
      }
    });
  });


app.delete('/:id', (req, res) => {
    // Deletando um registro no banco de dados
    const id = req.params.id;
    const sql = `DELETE FROM usuarios WHERE id = ?`;
    connection.query(sql, [id], (err, result) => {
    if (err) {
        res.sendStatus(500);
    } else {
        res.json({
        success: true,
        message: 'Registro excluído com sucesso',
        });
    }
    });
});