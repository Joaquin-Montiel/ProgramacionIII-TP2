const express = require("express")

const router = express.Router();

//Traigo los controladores
const {getAllVinilos, getViniloById, addVinilo, updateVinilo, deleteVinilo, getAllVinilosView} = require('../controllers/viniloControlers');

// Endpoints
router.get('/', getAllVinilos); // Obtener todos los vinilos
router.post('/', addVinilo);   // Agregar un nuevo vinilo
router.get('/:id', getViniloById); // Obtener un vinilo por ID
router.put('/:id', updateVinilo); // Actualizar un vinilo por ID
router.delete('/:id', deleteVinilo); // Eliminar un vinilo por ID
router.get('/html', getAllVinilosView) // Renderizar todos los vinilos en una vista HTML

module.exports = router;