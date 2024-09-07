const express = require('express');
const { createTrade, getTrade } = require('../controllers/tradeController');

const router = express.Router();

// POST /api/trades
router.post('/', createTrade);

// GET /api/trades/:transactionId
router.get('/:transactionId', getTrade);

module.exports = router;
