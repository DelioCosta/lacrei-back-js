const preCadastro = require("../models/preCadastro");

const preCadastroController = {
   async preCadastro(req, res) {
        const { dadosQueSeraoCadastrados } = req.body;

        const cadastro1 = await preCadastro.create({
            //colunas do banco de dados

        });

        res.json(cadastro1);
    },
};


module.exports = preCadastroController;