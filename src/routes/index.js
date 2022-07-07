const express = require('express')
const preCadastroController = require('../controllers/controllerPreCadastro')
const cadastroController = require('../controllers/controllerCadastro')
const posCadastroController = require('../controllers/controllerPosCadastro')
const routes = express.Router();


routes.post("/preCadastro", preCadastroController.preCadastro);
routes.post("/cadastro", cadastroController.cadastro);
routes.post("/posCadastro", posCadastroController.posCadastro);
routes.delete("/cadastro/:id/deletar", cadastroController.deletarCadastro);
routes.put("/cadastro/:id/atualizar", cadastroController.atualizarCadastro);
routes.get("/cadastro/lista", cadastroController.listarCadastro);

module.exports = routes;