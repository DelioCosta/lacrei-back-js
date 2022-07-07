const Consultorio = require("./Consultorio");
const Convenio = require("./Convenio");
const Doenca = require("./Doenca");
const Endereco = require("./Endereco");
const Especialidade = require("./Especialidade");
const Formacao = require("./Formacao");
const Horario = require("./Horario");
const Identidade = require("./Identidade");
const Profissao = require("./Profissao");
const Profissional = require("./Profissional");
const Servico = require("./Servico");
const Profissional_Doenca = require("./Profissional_Doenca");
const Consultorio_Convenio = require("./Consultorio_Convenio");

//One-To-Many relationships

Formacao.belongsTo(Profissional);
Profissional.hasMany(Formacao);

Especialidade.belongsTo(Profissao);
Profissao.hasMany(Especialidade);

Servico.belongsTo(Profissional);
Profissional.hasMany(Servico);

Profissional.belongsTo(Profissao);
Profissao.hasMany(Profissional);

Consultorio.belongsTo(Profissional);
Profissional.hasMany(Consultorio);

Horario.belongsTo(Consultorio);
Consultorio.hasMany(Horario);

////One-To-One relationships

Profissional.hasOne(Identidade);
Identidade.belongsTo(Profissional);

Consultorio.hasOne(Endereco);
Endereco.belongsTo(Consultorio);


//Many-To-Many relationships

Profissional.belongsToMany(Doenca, { through: 'Profissional_Doenca' });
Doenca.belongsToMany(Profissional, { through: 'Profissional_Doenca' });

Consultorio.belongsToMany(Convenio, { through: 'Consultorio_Convenio' });
Convenio.belongsToMany(Consultorio, { through: 'Consultorio_Convenio' });

module.exports = {
  Consultorio,
  Convenio,
  Doenca,
  Endereco,
  Especialidade,
  Formacao,
  Horario,
  Identidade,
  Profissao,
  Profissional,
  Servico,
};
