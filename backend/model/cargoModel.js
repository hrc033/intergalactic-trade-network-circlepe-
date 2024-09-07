const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
    stationId: String,
    cargoType: String,
    quantity: Number,
    status: { type: String, default: 'In Transit' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cargo', cargoSchema);
