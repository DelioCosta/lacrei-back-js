const { DataTypes } = require("sequelize");

const db = require("../database/data");
const Profissao = require("./Profissao");
const Identidade = require("./Identidade");

const Profissional = db.define(
  "Profissional",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
    },
    numero_conselho: {
      type: DataTypes.STRING,
    },
    conselho_ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lista_espera: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    regiao_atuacao: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    foto: {
        type: DataTypes.STRING,
    },
    descricao_foto: {
        type: DataTypes.STRING,
    },
    sobre_mim: {
        type: DataTypes.STRING,
    },
    foto_carteira: {
        type: DataTypes.STRING,
    },
    carta_entrada: {
        type: DataTypes.STRING,
    },
    rqe: {
        type: DataTypes.STRING,
    },
    alvol: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvog: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvob: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvot: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoq: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvop: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvon: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    identidade_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Identidade,
          key: "id",
        },
    },
    profissao_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Profissao,
          key: "id",
        },
    },
  },
  { tableName: "profissional", timestamps: false, underscored: true }
);

module.exports = Profissional;