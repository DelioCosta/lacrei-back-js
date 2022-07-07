const { DataTypes } = require("sequelize");

const db = require("../database");
const Consultorio = require("./Consultorio");

const Horario = db.define(
  "Horario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia_semana: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hora_inicio: {
      type: DataTypes.TIME,
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    consultorio_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Consultorio,
          key: "id",
        },
    },
  },
  { tableName: "horario", timestamps: false, underscored: true }
);

module.exports = Horario;