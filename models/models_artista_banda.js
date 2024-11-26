const { DataTypes } = require('sequelize');
const db = require('../data/db.js');  // Conexión a la base de datos


const ArtistaBanda = db.define('ArtistaBanda', {
    id_artista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,  // Esto permite que el valor de `id` sea generado automáticamente
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    añoCreacion: {             
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nacionalidad: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'artista',  // Nombre de la tabla 
    timestamps: true,  // Sequelize manejará los campos createdAt y updatedAt
});

module.exports = {ArtistaBanda};