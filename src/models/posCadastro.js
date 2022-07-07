const db = require("../database");
const {DataTypes} = require('sequelize')

const posCadastro = db.define("posCadastro", {
    //descrição das colunas do banco de dados
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
}, {
    tableName: "--",
   }

);

module.exports = posCadastro;