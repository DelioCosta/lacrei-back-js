const { DataTypes } = require("sequelize");

const db = require("../database");

const Profissao = db.define(
  "Profissao",
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
    prefixo_conselho: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "profissao", timestamps: false, underscored: true }
);

module.exports = Profissao;