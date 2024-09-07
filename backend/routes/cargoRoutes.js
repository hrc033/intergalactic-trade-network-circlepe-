const express = require('express');
const { createCargo, getCargo, getInventory } = require('../controllers/cargoController');

const router = express.Router();

// POST /api/cargo
router.post('/', createCargo);

// GET /api/cargo/:shipmentId
router.get('/:shipmentId', getCargo);

// GET /api/inventory/:stationId
router.get('/inventory/:stationId', getInventory);

module.exports = router;
