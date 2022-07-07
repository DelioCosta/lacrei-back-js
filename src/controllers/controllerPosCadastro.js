const { Profissional, Formacao, Doenca, Identidade } = require("../models");

const posCadastroController = {
    async posCadastro(req, res) {
        const { rqe,  alvoL, alvoG, alvoB, alvoT, alvoQ, alvoI, alvoA, alvoP, alvoN, doenca_id, curso, pronome_artigo, etnia, ident_genero, sexualidade, pcd  } = req.body;

        const cadastro3 = await posCadastro.create({
            rqe,  alvoL, alvoG, alvoB, alvoT, alvoQ, alvoI, alvoA, alvoP, alvoN, 
            doenca_id, //id especialidade?
            curso, pronome_artigo, etnia, ident_genero, sexualidade, pcd
        });
        res.json(cadastro3);
    },
};


module.exports = posCadastroController;