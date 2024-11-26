const {ArtistaBanda} = require('./models_artista_banda.js');
const Vinilo = require('./models_vinilo.js');

// Definir las asociaciones
ArtistaBanda.hasMany(Vinilo, {
    foreignKey: 'id_artista',
    as: 'vinilos',
});

Vinilo.belongsTo(ArtistaBanda, {
    foreignKey: 'id_artista',
    as: 'artista',
});