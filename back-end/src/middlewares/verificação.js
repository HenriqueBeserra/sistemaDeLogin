
const models = require('../models/tasksModels');


async function verificaID(ID) {

    const users = await models.getAll();
    let i;
    let bd = [];
   
    const identificação = await parseInt(ID);
    
    for(i in users){
      
        bd.push(await parseInt(users[i].id));

    }
    
    const idExist = await bd.includes(identificação);
    return idExist;

};

async function verificaLoginUsuario(login) {

    let bd = [];
    let i;
    const logUsers = await models.getAll();
    for(i in logUsers){

        bd.push(logUsers[i].login);
        
    };

    const userExist = await bd.includes(login);
    return userExist;
};

module.exports = {
    verificaID,
    verificaLoginUsuario
}

  