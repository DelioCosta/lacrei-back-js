const CadastroController = {
    async cadastro(req, res) {
        const { foto, descricao_foto, sobre_mim, foto_carteira, carta_entrada } = req.body;

        const cadastro = await Profissional.create({
            foto, 
            descricao_foto, 
            sobre_mim,
            foto_carteira, 
            carta_entrada
        });
    },

    async cadastro(req, res) {
        const { atende_clinica, atende_online, atende_domicilio, tel_fixo, celular, whatsapp, endereco_id } = req.body;

        const cadastro = await Consultorio.create({
             atende_clinica, 
             atende_online, 
             atende_domicilio,
             tel_fixo, 
             celular, 
             whatsapp, 
             endereco_id
        });
    
        
    },

    async cadastro(req, res) {
        const { dia_semana, hora_inicio, hora_fim } = req.body;

        const cadastro = await Horario.create({
            dia_semana, 
            hora_inicio,
            hora_fim
        });
        
    },

    async cadastro(req, res) {
        const {id, convenio_id, consultorio_id } = req.body;

        const cadastro = await Consultorio_Convenio.create({
            id,
            convenio_id,
            consultorio_id
        });
        
    },

    async cadastro(req, res) {
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
}