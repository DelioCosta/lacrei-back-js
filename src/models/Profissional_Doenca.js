const { DataTypes } = require("sequelize");

const db = require("../database");
const Doenca = require("./Doenca");
const Profissional = require("./Profissional");

const Profissional_Doenca = db.define(
  "Profissional_Doenca",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profissional_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Profissional,
          key: "id",
        },
    },
    doenca_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Doenca,
          key: "id",
        },
    },
  },
  { tableName: "profissional_doenca", timestamps: false, underscored: true }
);

module.exports = Profissional_Doenca;