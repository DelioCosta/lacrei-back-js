const { DataTypes } = require("sequelize");

const db = require("../database");
const Profissional = require("./Profissional");
const Endereco = require("./Endereco");

const Consultorio = db.define(
  "Consultorio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tel_fixo: {
        type: DataTypes.STRING,
    },
    celular: {
        type: DataTypes.STRING,
    },
    whatsapp: {
        type: DataTypes.STRING,
    },
    acessibilidade1: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade2: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade3: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade4: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade5: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade6: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade7: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade8: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade9: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade10: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade11: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    acessibilidade12: {
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
    endereco_id: {
        type: DataTypes.INTEGER,
        References: {
          model: Endereco,
          key: "id",
        },
    }, 
    
  },
  { tableName: "consultorio", timestamps: false, underscored: true }
);

module.exports = Consultorio;