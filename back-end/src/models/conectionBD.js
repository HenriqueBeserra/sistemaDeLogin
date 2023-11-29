//conexão com o db
const mysql = require('mysql2/promise');
require('dotenv').config(); //acesso as variáveis de ambiente


//criando a conexão
const connection = mysql.createPool({

    host:     process.env.MYSQL_HOST,
    user:     process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB

});

module.exports = connection;