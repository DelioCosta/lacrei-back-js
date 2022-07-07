const { DataTypes } = require("sequelize");

const db = require("../database/data");

const Convenio = db.define(
  "Convenio",
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
  },
  { tableName: "convenio", timestamps: false, underscored: true }
);

module.exports = Convenio;