
const connection = require('./conectionBD');


const getAll = async () => {

    const [usuarios] = await connection.execute('SELECT * FROM usuarios');
    return usuarios; 

};

const addUser = async (nome, login, senha) => {
    
    const dateUTC = await new Date(Date.now()).toString();
    const query = `INSERT INTO usuarios(Nome, login, senha, created_at) VALUES (?,?,?,?)`

    const [createdUser] = await connection.execute(query, [nome, login, senha, dateUTC])
    return createdUser;

}

const updadteUser = async (id, set, condition) => {
   
    const query = `UPDATE usuarios SET Nome = ? WHERE id = ?`;
    const [updateUser] = await connection.execute(query, [condition, id]);
    return updateUser.info;

}

module.exports = {
    getAll,
    addUser,
    updadteUser
}