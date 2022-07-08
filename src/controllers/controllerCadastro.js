const { Profissional, Horario, Consultorio, Endereco, Convenio, Servico, Especialidade } = require("../models");
const Consultorio_Convenio = require("../models/Consultorio_Convenio");

const CadastroController = {
    update: async (req, res) => {
        const { id } = req.params;
        const { foto, descricao_foto, sobre_mim, foto_carteira, carta_entrada } = req.body;
        const profissional = await Profissional.findByPk(id);
    
        //aplica bcrypt na senha
        const novaSenha = bcrypt.hashSync(senha, 10);
    
        if(!Profissional){
          res.status(404).json({
            message: "Id não encontrado",
          });
        };
    
        const profissionalAtualizado = await Profissional.update(
          {
            foto, 
            descricao_foto,
            sobre_mim, 
            foto_carteira, 
            carta_entrada
          },
          {
            where: {
              id,
            },
          }
        );
        //pesquisa o profissional atualizado para retornar as novas informações
        const jsonProfissionalAtualizado = await Profissional.findByPk(id, {attributes: {exclude: ['senha']}});
    
        res.json(jsonProfissionalAtualizado);
      },

     cadastroConsultorio: async(req, res) => {
        try {
        const { atende_clinica, atende_online, atende_domicilio, tel_fixo, celular, whatsapp, Endereco = {} } = req.body;

        const { rua, numero, bairro, cidade, complemento, cep } = Endereco;

        const cadastro = await Consultorio.create({
             atende_clinica, 
             atende_online, 
             atende_domicilio,
             tel_fixo, 
             celular, 
             whatsapp, 
             Endereco: {
                rua,
                numero,
                bairro,
                cidade,
                complemento,
                cep,
             },
        },
        {include: [Endereco]}
        );


        res.json(cadastro);
    } catch (error) {
        console.log(error.message);
        res
            .satatus(500)
            .json({error: "Tivemos um erro, tente novamente."});
    }
    },
    show: async (req,res) => {
        const {id} = req.params;
        try {
            const cadastro = await Consultorio.findByPk(id, { include: Endereco });
            
        } catch (error) {
            res
              .status(500)
              .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
},

     cadastroHora: async (req, res) => {
        const { dia_semana, hora_inicio, hora_fim } = req.body;

        const cadastro = await Horario.create({
            dia_semana, 
            hora_inicio,
            hora_fim
        });
        
    },

     cadastroConsultorioConvenio: async(req, res) => {
        const {id, convenio_id, consultorio_id } = req.body;

        const cadastro = await Consultorio_Convenio.create({
            id,
            convenio_id,
            consultorio_id
        });
        
    },

    cadastroServico: async(req, res) => {
        const { } = req.body;

        const cadastro = await Servico.create({
            nome,
            duracao,
            valor,
            atende_clinica, 
            atende_online, 
            atende_domicilio
        });

        res.status(201).json(Cadastro)
        
    },

   
    listarCadastro: async (req, res) => {
            const listaDeCadastro = await cadastro.findAll()
            res.json();
        },

     deletarCadastro: async(req,res) => {
        const { id } = req.params;

        await  cadastro.destroy({
            where:{
                id,
            }
        });

        res.json("Cadastro deletado")
    },

     atualizarCadastro: async(req, res) => {
        const { id } = req.params;
        const {  } = req.body;

        const cadastroAtualizado = await  Cadastro.update({
            
        },
        {
         where: {
             id,
        }
        }
    );

    res.json("Cadastro Atualizado")

    }
};

module.exports = CadastroController