const Vinilo = require('../models/models_vinilo.js');

// Obtener todos los vinilos
const getAllVinilos = async (req, res) => {
    try {
        const { page = 1, limit = 10, sort = "ASC", genero, status } = req.query;

        // Paginación
        const offset = (page - 1) * limit;
        const paginationOptions = { offset, limit: parseInt(limit) };

        // Ordenamiento
        const orderOptions = [["createdAt", sort.toUpperCase()]];

        // Filtros dinámicos
        const whereOptions = {};
        if (genero) whereOptions.genero = genero; // Filtrar por género
        if (status) whereOptions.status = status; // Filtrar por estado (activo/inactivo)

        // Query a la base de datos
        const vinilos = await Vinilo.findAndCountAll({
            where: whereOptions,
            order: orderOptions,
            ...paginationOptions,
        });

        // Respuesta
        return res.json({
            total: vinilos.count,
            page: parseInt(page),
            totalPages: Math.ceil(vinilos.count / limit),
            data: vinilos.rows,
        });
    } catch (error) {
        console.error("Error al obtener los vinilos:", error);
        return res.status(500).json({ message: "Error al obtener los vinilos", error });
    }
};

const getAllVinilosView = async (req, res) => {
    try {
        const vinilos = await Vinilo.findAll();
        res.render('vinilos', { vinilos }); // Renderizar HTML para vistas
    } catch (error) {
        res.status(500).send('Error al cargar la página');
    }
};

// Agregar un nuevo vinilo
const addVinilo = async (req, res) => {
    const { titulo, artista_banda, genero, añoLanzamiento, descripcion, precio } = req.body;
    try {
        const nuevoVinilo = await Vinilo.create({
        titulo,
        artista_banda,
        genero,
        añoLanzamiento,
        descripcion,
        precio,
    });
    res.status(201).json(nuevoVinilo);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el vinilo', error });
    } 
};

// Obtener un vinilo por ID
const getViniloById = async (req, res) => {
    const { id } = req.params;
    try {
        const vinilo = await Vinilo.findByPk(req.params.id);
        if (!vinilo) {
        return res.status(404).json({ message: 'Vinilo no encontrado' });
        }
        res.status(200).json(vinilo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el vinilo', error });
    }
};

// Actualizar un vinilo por ID
const updateVinilo = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista_banda, genero, añoLanzamiento, descripcion, precio } = req.body;
    try {
        const vinilo = await Vinilo.findByPk(id);
        if (!vinilo) {
        return res.status(404).json({ message: 'Vinilo no encontrado' });
        }
        await vinilo.update({ titulo, artista_banda, genero, añoLanzamiento, descripcion, precio });
        res.status(200).json(vinilo);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el vinilo', error });
    }
};

// Eliminar un vinilo por ID
const deleteVinilo = async (req, res) => {
    const { id } = req.params;
    try {
        const vinilo = await Vinilo.findByPk(id);
        if (!vinilo) {
            return res.status(404).json({ message: 'Vinilo no encontrado' });
    }
        await vinilo.destroy();
        res.status(200).json({ message: 'Vinilo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el vinilo', error });
    }
};


module.exports = {getAllVinilos, getViniloById, addVinilo, updateVinilo, deleteVinilo, getAllVinilosView}