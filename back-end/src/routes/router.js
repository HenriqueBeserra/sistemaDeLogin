const express = require("express");
const router = express.Router();

const models = require('../models/tasksModels')
const controlers = require('../controller/tasksControler')

router.get('/config', (req, res) => {res.send("API RODANDO NORMAL")});
router.get('/g', controlers.verificaUsuario);
router.post('/us', controlers.adicionaUsuario);
router.put('/p/:id', controlers.alteraUsuario);
router.delete('/d/:id', controlers.apagaUsuario)



module.exports = router; 