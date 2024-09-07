const WebSocket = require('ws');

const setupWebSocket = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('WebSocket connection established');
        
        // Example of sending a message to all clients
        ws.on('message', (message) => {
            console.log(`Received message: ${message}`);
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });

        ws.on('close', () => {
            console.log('WebSocket connection closed');
        });
    });
};

module.exports = setupWebSocket;
