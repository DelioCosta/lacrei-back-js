const { validate, Joi } = require("express-validation");

const authPreCadastroValidator = validate({
  body: Joi.object({
    nome: Joi.string().max(50).required(),
    email: Joi.string().email().required(),
    numero_conselho: Joi.string(),
    senha: Joi.string().required(),
    regiao_atuacao: Joi.string().required(),
    profissao_id: Joi.number().required(),
  }),
});

module.exports = authPreCadastroValidator;
