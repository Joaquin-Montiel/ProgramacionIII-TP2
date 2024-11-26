const express = require("express");
const router = express.Router();

const { getAllArtistas, addArtista, getArtistaById, updateArtista, deleteArtista, getArtistaConVinilos} = require('../controllers/artistaBandaControllers');

// Rutas para artistas
router.get('/', getAllArtistas);
router.post('', addArtista);
router.get('/:id', getArtistaById);
router.get('/:id/con-vinilos', getArtistaConVinilos);
router.put('/:id', updateArtista);
router.delete('/:id', deleteArtista);


module.exports = router;