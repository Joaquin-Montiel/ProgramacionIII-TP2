const { Sequelize, DataTypes } = require('sequelize');
const db = require('../data/db');  // Importar la conexión a la base de datos
const ArtistaBanda = require("./models_artista_banda")


// Definir el modelo de Vinilo
const Vinilo = db.define('Vinilos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,  // Esto permite que el valor de `id` sea generado automáticamente
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    añoLanzamiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    id_artista: {  // Clave foránea para relacionar con ArtistaBanda
        type: DataTypes.INTEGER,
        /* allowNull: false, */
    },
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE, 
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'albunes',  // Nombre de la tabla
    timestamps: true,  // Para que Sequelize maneje las fechas createdAt y updatedAt
});

/* Vinilo.belongsTo(ArtistaBanda, {foreignKey: 'id_artista', as: 'artista'}); */

module.exports = Vinilo;