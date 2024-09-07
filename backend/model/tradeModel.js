const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
    originPlanet: String,
    destinationPlanet: String,
    cargo: [{ type: String }],
    tradeValue: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trade', tradeSchema);
