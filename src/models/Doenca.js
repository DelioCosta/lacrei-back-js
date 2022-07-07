const { DataTypes } = require("sequelize");

const db = require("../database");

const Doenca = db.define(
  "Doenca",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "doenca", timestamps: false, underscored: true }
);

module.exports = Doenca;