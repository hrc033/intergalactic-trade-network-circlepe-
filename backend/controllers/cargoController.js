const Cargo = require('../model/cargoModel');

// Create new cargo shipment
exports.createCargo = async (req, res) => {
    const newCargo = new Cargo(req.body);
    try {
        const cargo = await newCargo.save();
        res.status(201).json(cargo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get cargo details by shipment ID
exports.getCargo = async (req, res) => {
    const { shipmentId } = req.params;
    try {
        const cargo = await Cargo.findById(shipmentId);
        if (!cargo) {
            return res.status(404).json({ message: 'Cargo not found' });
        }
        res.json(cargo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get inventory levels for a specific space station
exports.getInventory = async (req, res) => {
    const { stationId } = req.params;
    try {
        const inventory = await Cargo.find({ stationId });
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
