
const models = require('../models/tasksModels');

const adicionaUsuario = async (req, res) => {

    const {nome} = req.body ;
    const {login} = req.body;
    const {senha} = req.body
    
   
    try{

        const adicionado = await models.addUser(nome, login, senha);
        adicionado? console.log(` --- Usuário ${nome} adicionado com sucesso ---`):console.log(`Usuário ${nome} não adicionado`);
        res.status(200).send('Usuário Adicionado');

    } 
    catch(err){
        console.log(err);
        res.status(400).send("Usuário não adicionado")
    }


};

const verificaUsuario = async (req, res) => {
    const users = await models.getAll();
    res.status(200).json(users)
}

const alteraUsuario = async (req, res) => {

    const { id } = req.params;
    const {coluna, novoDado } = req.body

    
    const usuarioAlterado = await models.updadteUser(id, coluna, novoDado);
    console.log(`Usuário ${novoDado} alterado`);
    return res.status(200).send('Usuario alterado com sucesso');

}


module.exports = {
    adicionaUsuario,
    verificaUsuario,
    alteraUsuario
}