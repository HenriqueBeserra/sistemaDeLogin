
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

module.exports = {
    getAll,
    addUser
}