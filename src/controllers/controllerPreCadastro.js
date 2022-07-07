const { Profissional } = require("../models");
const bcrypt = require('bcrypt');

const preCadastroController = {
    preCadastro: async (req, res) => {
        const { nome, email, numero_conselho, senha, regiao_atuacao, profissao_id } = req.body;

        const novaSenha = bcrypt.hashSync(senha, 10);
        
        let lista_espera = 1;
        if(regiao_atuacao == 'SP'){
            lista_espera = 0;
        }
        let conselho_ativo = 0;

        const novoCadastro = await Profissional.create({
            id,
            regiao_atuacao,
            nome, 
            email, 
            profissao_id, 
            numero_conselho, 
            senha: novaSenha, 
            lista_espera,
            conselho_ativo,
        });

        res.status(201).json(novoCadastro);
    },

};


module.exports = preCadastroController;