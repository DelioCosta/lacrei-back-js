const { DataTypes } = require("sequelize");

const db = require("../database");
const Profissao = require("./Profissao");

const Especialidade = db.define(
  "Especialidade",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    translate_key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
         allowNull: false,
    },
    profissional_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Profissao,
          key: "id",
        },
    },
  },
  { tableName: "especialidade", timestamps: false, underscored: true }
);

module.exports = Especialidade;