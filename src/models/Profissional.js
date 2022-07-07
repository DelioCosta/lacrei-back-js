const { DataTypes } = require("sequelize");

const db = require("../database");
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
    alvoL: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoG: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoB: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoT: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoQ: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoI: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoA: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoP: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alvoN: {
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