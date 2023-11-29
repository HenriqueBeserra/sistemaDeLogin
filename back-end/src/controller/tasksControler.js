
const models = require('../models/tasksModels');

const adicionaUsuario = async (req, res) => {

    const {nome} = req.body ;
    const {login} = req.body;
    const {senha} = req.body
    
    console.log(nome, senha, login)
    try{

        const adicionado = await models.addUser(nome, login, senha);
        adicionado? console.log(`usuário ${nome} adicionado com sucesso`):console.log(`Usuário ${nome} não adicionado`);
        res.status(200).send('adicionado');

    } 
    catch(err){
        console.log(err)
    }


};

const verificaUsuario = async (req, res) => {
    const users = await models.getAll();
    res.status(200).json(users)
}


module.exports = {
    adicionaUsuario,
    verificaUsuario
}