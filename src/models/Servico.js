const { DataTypes } = require("sequelize");

const db = require("../database/data");
const Profissional = require("./Profissional");

const Servico = db.define(
  "Servico",
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
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: false,
    },
    atende_clinica: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    atende_online: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
    },
    atende_domicilio: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
    },
    profissional_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Profissional,
          key: "id",
        },
    },
  },
  { tableName: "servico", timestamps: false, underscored: true }
);

module.exports = Servico;