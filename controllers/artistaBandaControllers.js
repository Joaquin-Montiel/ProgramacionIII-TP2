const {ArtistaBanda} = require('../models/models_artista_banda'); // Modelo de Artista
const Vinilo = require('../models/models_vinilo.js'); 

const getAllArtistas = async (req, res) => {
    try {
        const artistas = await ArtistaBanda.findAll();
        res.status(200).json(artistas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los artistas', error });
    }
};

// Agregar un nuevo artista
const addArtista = async (req, res) => {
    const { nombre, añoCreacion, nacionalidad } = req.body;
    try {
        if (!nombre || !añoCreacion) {
            return res.status(400).json({ 
                message: 'Los campos nombre y año_creacion son obligatorios' 
            });
        }
        const nuevoArtista = await ArtistaBanda.create({
            nombre,
            añoCreacion,
            nacionalidad,
        });
        res.status(201).json(nuevoArtista);
    } catch (error) {
        console.error('Error al agregar el artista:', error);
        res.status(500).json({ 
            message: 'Error al agregar el artista',
            error: error.message || 'Error desconocido'
        });
    }
};

// Obtener un artista por ID
const getArtistaById = async (req, res) => {
    const { id } = req.params;
    try {
        const artista = await ArtistaBanda.findByPk(id);
        if (!artista) {
            return res.status(404).json({ message: 'Artista no encontrado' });
        }
        res.status(200).json(artista);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el artista', error });
    }
};

// Actualizar un artista por ID
const updateArtista = async (req, res) => {
    const { id } = req.params;
    const { nombre, añoCreacion, nacionalidad } = req.body;
    try {
        const artista = await ArtistaBanda.findByPk(id);
        if (!artista) {
            return res.status(404).json({ message: 'Artista no encontrado' });
        }
        await artista.update({ nombre, añoCreacion, nacionalidad });
        res.status(200).json(artista);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el artista', error });
    }
};


// Eliminar un artista por ID
const deleteArtista = async (req, res) => {
    const { id } = req.params;
    try {
        const artista = await ArtistaBanda.findByPk(id);
        if (!artista) {
            return res.status(404).json({ message: 'Artista no encontrado' });
        }
        await artista.destroy();
        res.status(200).json({ message: 'Artista eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el artista', error });
    }
};

const getArtistaConVinilos = async (req, res) => {
    try {
        const artista = await ArtistaBanda.findOne({
            where: { id_artista: req.params.id },
            include: {
                model: Vinilo,
                as: 'vinilos',  // Alias definido en la asociación
                attributes:['titulo']
            }
        });

        if (!artista) {
            return res.status(404).json({ message: 'Artista no encontrado' });
        }

        res.status(200).json(artista);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el artista con vinilos', error });
    }
};


module.exports = { getAllArtistas, addArtista, getArtistaById, updateArtista, deleteArtista, getArtistaConVinilos };