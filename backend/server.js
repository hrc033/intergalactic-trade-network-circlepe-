const express = require('express');
const http = require('http');
const path = require('path');

const WebSocket = require('ws');
const bodyParser = require('body-parser');

const port = 3000;

// Serve a message when hitting the root URL


const tradeRoutes = require('./routes/tradeRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
const setupWebSocket = require('./websocket');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(bodyParser.json());

// API routes
app.use('/api/trades', tradeRoutes);
app.use('/api/cargo', cargoRoutes);

// Start WebSocket server for real-time updates
setupWebSocket(server);

// Start the HTTP server
app.use(express.static(path.join(__dirname, 'frontend')));

// Route for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Intergalactic Trade Network Backend is running!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});