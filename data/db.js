const {Sequelize} =  require('sequelize')

const db = new Sequelize("vinilos","root", "",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
} )//represento una nueva conexion a la base de datos

module.exports = db