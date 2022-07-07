const { DataTypes } = require("sequelize");

const db = require("../database/data");
const Profissional = require("./Profissional");

const Identidade = db.define(
  "Identidade",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pronome_artigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etnia: {
        type: DataTypes.STRING,
         allowNull: false,
    },
    ident_genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexualidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pcd: {
        type: DataTypes.STRING,
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
  { tableName: "identidade", timestamps: false, underscored: true }
);

module.exports = Identidade;