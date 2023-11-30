
const verifica = require('../middlewares/verificação');
const models = require('../models/tasksModels');

const adicionaUsuario = async (req, res) => {

    const {nome} = req.body ;
    const {login} = req.body;
    const {senha} = req.body
    
    const userExist = await verifica.verificaLoginUsuario(login);
    if(userExist === false){ 
        try{

            const adicionado = await models.addUser(nome, login, senha);
            adicionado? console.log(` --- Usuário ${nome} adicionado com sucesso ---`):console.log(`Usuário ${nome} não adicionado`);
            res.status(200).send('Usuário Adicionado');

        } 
        catch(err){
            console.log(err);
            res.status(400).send("Usuário não adicionado")
        }
    }
    else{
        return res.status(200).send("Usuário já existe. Tente novamente")
    }

};

const verificaUsuario = async (req, res) => {
    const users = await models.getAll();
    res.status(200).json(users);
};

const alteraUsuario = async (req, res) => {

    const { id } = req.params;
    const {coluna, novoDado } = req.body;

    
    const usuarioAlterado = await models.updadteUser(id, coluna, novoDado);
    console.log(`Usuário ${novoDado} alterado`);
    return res.status(200).send('Usuario alterado com sucesso');

};

const apagaUsuario = async (req, res) => {
   //preparando ambiente da função
    require('dotenv').config();
    let {senha} = req.body;
    const {id} = req.params;
   
   
    const idExist = await verifica.verificaID(id) //Verifica se o usuário existe realmente antes de apagar
     if(  idExist == true ){
        
        if(senha===process.env.LOGDESERVER){
            const usuarioDeletado = await models.deleteUser(id, process.env.LOGDESEG);
            console.log(`Usuário de id: ${id} deletado com sucesso`)
            return res.status(200).send("Usuario deletado com sucesso!");
        }
        else{
            return res.status(403).send("Permissão negada pelo servidor");
        }
    }
    else{
        return res.status(404).send("Usuario não encontrado")
    }

};


module.exports = {
    adicionaUsuario,
    verificaUsuario,
    alteraUsuario,
    apagaUsuario
}