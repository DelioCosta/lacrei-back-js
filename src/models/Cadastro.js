const db = require("../database");
const {DataTypes} = require('sequelize')

const Cadastro = db.define("Cadastro", {
    //descrição das colunas do banco de dados
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
}, {
    tableName: "-",
   }

);

module.exports = Cadastro;