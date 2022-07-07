const { DataTypes } = require("sequelize");

const db = require("../database/data");
const Profissional = require("./Profissional");

const Formacao = db.define(
  "Formacao",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    curso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    escola: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano_formatura: {
      type: DataTypes.INTEGER,
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
  { tableName: "formacao", timestamps: false, underscored: true }
);

module.exports = Formacao;