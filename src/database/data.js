const { Module } = require("module");
const Sequelize = require("sequelize");

const DB_NAME = "";
const DB_USER = "";
const DB_PASS = "";
const DB_CONFIG = {
    dialect: 'mysql',
    host: "",
    port: 3000
};

const db = {}

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
    console.error("Erro ao realizar conexão com o banco de dados")
}

async function hasConection(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado")
    } catch (error){
    console.error("Erro ao tentar se conectar ao banco de dados")
    }
}

Object.assign(db, {
    hasConection,
});


module.exports = db;