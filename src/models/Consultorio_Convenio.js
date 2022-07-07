const { DataTypes } = require("sequelize");

const db = require("../database/data");
const Consultorio = require("./Consultorio");
const Convenio = require("./Convenio");

const Consultorio_Convenio = db.define(
  "Consultorio_Convenio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    consultorio_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Consultorio,
          key: "id",
        },
    },
    convenio_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Convenio,
          key: "id",
        },
    },
  },
  { tableName: "consultorio_convenio", timestamps: false, underscored: true }
);

module.exports = Consultorio_Convenio;