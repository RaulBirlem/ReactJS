const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.cfybwde.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log("Conectado ao banco")
        return dbConn
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados:", error);
     
    }
}

conn()

module.exports = conn;