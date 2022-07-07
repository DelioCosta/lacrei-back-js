const { DataTypes } = require("sequelize");

const db = require("../database/data");
const Consultorio = require("./Consultorio");

const Endereco = db.define(
  "Endereco",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complemento: {
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    consultorio_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Consultorio,
          key: "id",
        },
    },
  },
  { tableName: "endereco", timestamps: false, underscored: true }
);

module.exports = Endereco;