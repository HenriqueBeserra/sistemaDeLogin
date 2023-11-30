
const models = require('../models/tasksModels');


async function verificaID(ID) {

    const users = await models.getAll();
    let i;
    let bd = []
   
    //for(i in arr){ if(arr[i].id === 1){console.log(true)} else{console.log(false)} }
    for(i in users){
      
        bd.push(await parseInt(users[i].id));

    }
    
    const identificação = await parseInt(ID);
    const idExist = await bd.includes(identificação);
    console.log(idExist + ' ' + typeof identificação);
    return idExist;
}

module.exports = verificaID