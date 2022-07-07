const express = require('express')

const routes = express.Router();

const PreCadastroController = require('../controllers/controllerPreCadastro');
//const CadastroController = require('../controllers/controllerCadastro')
//const PosCadastroController = require('../controllers/controllerPosCadastro')

// faz a requisição dos validators
const authPreCadastroValidator = require("../validators/auth/preCadastro");

routes.post("/precadastro", authPreCadastroValidator, PreCadastroController.preCadastro);


/* routes.post("/cadastro", cadastroController.cadastro);
routes.post("/posCadastro", posCadastroController.posCadastro);
routes.delete("/cadastro/:id", cadastroController.deletarCadastro);
routes.put("/cadastro/:id", cadastroController.atualizarCadastro);
routes.get("/cadastro/lista", cadastroController.listarCadastro); */

module.exports = routes;