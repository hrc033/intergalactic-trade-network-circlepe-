const Trade = require('../model/tradeModel');

// Create new trade transaction
exports.createTrade = async (req, res) => {
    const newTrade = new Trade(req.body);
    try {
        const trade = await newTrade.save();
        res.status(201).json(trade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get trade details by ID
exports.getTrade = async (req, res) => {
    const { transactionId } = req.params;
    try {
        const trade = await Trade.findById(transactionId);
        if (!trade) {
            return res.status(404).json({ message: 'Trade not found' });
        }
        res.json(trade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
