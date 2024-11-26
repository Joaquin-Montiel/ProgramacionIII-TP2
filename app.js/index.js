const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const vinilosRoutes = require('../routers/routerVinilos'); // Importar las rutas
const artistaRoutes = require("../routers/routerArtistaBanda");
const db = require('../data/db');
require('../models/asociaciones');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/vinilos', vinilosRoutes);
app.use('/api/artistas', artistaRoutes);


// Sincronización con la base de datos
db.sync({ force: false })  // Cambiar a true solo si queremos recrear las tablas
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});