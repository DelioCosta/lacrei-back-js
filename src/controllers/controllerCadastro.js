const Cadastro = require("../models/Cadastro");



const CadastroController = {
    async cadastro(req, res) {
        const { dadosQueSeraoCadastrados3 } = req.body;

        const cadastro = await cadastro.create({
            //colunas do banco de dados

        });

        res.json(cadastro);
    },

        listarCadastro: async (req, res) => {
            const listaDeCadastro = await Cadastro.findAll()
            res.json();
        },

    async deletarCadastro(req,res) {
        const { id } = req.params;

        await  Cadastro.destroy({
            where:{
                id,
            }
        });

        res.json("Cadastro deletado")
    },

    async atualizarCadastro(req, res){
        const { id } = req.params;
        const { dadosQueSeraoAtualizados } = req.body;

        const cadastroAtualizado = await  Cadastro.update({
            dadosQueSeraoAtualizados
        },
        {
         where: {
             id,
        }
        }
    );

    res.json("Cadastro Atualizado")

},


};


module.exports = CadastroController;