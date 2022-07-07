const mail = require("../mail/nodemail");

const { Profissional, Profissao } = require("../models");
const bcrypt = require('bcrypt');
const nodemail = require("../mail/nodemail");

const preCadastroController = {
    preCadastro: async (req, res) => {
        const { id, nome, email, numero_conselho, senha, regiao_atuacao, profissao_id } = req.body;

        const novaSenha = bcrypt.hashSync(senha, 10);
        
        let lista_espera = 1;
        let conselho_ativo = 0;
        if(regiao_atuacao == 'SP'){
            lista_espera = 0;
            conselho_ativo = 1;
        }
        
        let alvol = 0;
	    let alvog = 0;
	    let alvob = 0;
	    let alvot = 0;
	    let alvoq = 0;
	    let alvoi = 0;
	    let alvoa = 0;
	    let alvop = 0;
	    let alvon = 0;

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
            alvol,
            alvog,
            alvob,
            alvot,
            alvoq,
            alvoi,
            alvoa,
            alvop,
            alvon,
        });

        nodemail.enviar(email, conselho_ativo);

        res.status(201).json(novoCadastro);
    },

};


module.exports = preCadastroController;