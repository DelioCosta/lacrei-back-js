const posCadastro = require("../models/posCadastro")

const posCadastroController = {
    async posCadastro(req, res) {
        const { dadosQueSeraoCadastrados3 } = req.body;

        const cadastro3 = await posCadastro.create({
            //colunas do banco de dados

        });
        res.json(cadastro3);
    },
};


module.exports = posCadastroController;