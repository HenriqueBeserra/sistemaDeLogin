
const connection = require('./conectionBD');
require('dotenv').config();


const getAll = async () => {

    const [usuarios] = await connection.execute('SELECT * FROM usuarios');
    return usuarios; 

};

const addUser = async (nome, login, senha) => {
    
    const dateUTC = await new Date(Date.now()).toString();
    const query = `INSERT INTO usuarios(Nome, login, senha, created_at) VALUES (?,?,?,?)`

    const [createdUser] = await connection.execute(query, [nome, login, senha, dateUTC])
    return createdUser;

};

const updadteUser = async (id, set, condition) => {
   
    const query = `UPDATE usuarios SET Nome = ? WHERE id = ?`;
    const [updateUser] = await connection.execute(query, [condition, id]);
    return updateUser.info;

};

const deleteUser = async (id, permission) => {
    //Restringindo o uso desta função
    if(permission===process.env.LOGDESEG){

        const query = `DELETE FROM usuarios WHERE id = ?`
        const [deltedUser] = await connection.execute(query, [id])
        return deleteUser.info;

    }
    else{
        return console.log("---403 - Permissão para realizar a ção negada pelo servidor---")
    }
    
};


module.exports = {
    getAll,
    addUser,
    updadteUser,
    deleteUser
}