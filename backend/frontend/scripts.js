document.addEventListener('DOMContentLoaded', function () {
    // Simulated API responses for charts (replace with actual API data)
    const tradeVolumeData = [10, 20, 30, 40, 50];
    const cargoShipmentsData = [15, 25, 10, 5, 35];
    const inventoryLevelsData = [80, 70, 90, 60, 50];

    // Trade Volume Chart
    const tradeVolumeCtx = document.getElementById('tradeVolumeChart').getContext('2d');
    new Chart(tradeVolumeCtx, {
        type: 'line',
        data: {
            labels: ['Alpha Station', 'Beta Station', 'Gamma Station', 'Delta Station', 'Epsilon Station'],
            datasets: [{
                label: 'Trade Volume',
                data: tradeVolumeData,
                borderColor: '#e94560',
                backgroundColor: 'rgba(233, 69, 96, 0.2)',
                fill: true
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Cargo Shipments Chart
    const cargoShipmentsCtx = document.getElementById('cargoShipmentsChart').getContext('2d');
    new Chart(cargoShipmentsCtx, {
        type: 'bar',
        data: {
            labels: ['Shipment 1', 'Shipment 2', 'Shipment 3', 'Shipment 4', 'Shipment 5'],
            datasets: [{
                label: 'Cargo Shipments',
                data: cargoShipmentsData,
                backgroundColor: '#e94560',
                borderColor: '#0f3460',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Inventory Levels Chart
    const inventoryLevelsCtx = document.getElementById('inventoryLevelsChart').getContext('2d');
    new Chart(inventoryLevelsCtx, {
        type: 'pie',
        data: {
            labels: ['Station A', 'Station B', 'Station C', 'Station D', 'Station E'],
            datasets: [{
                data: inventoryLevelsData,
                backgroundColor: [
                    '#e94560',
                    '#16213e',
                    '#0f3460',
                    '#1a1a2e',
                    '#53354a'
                ]
            }]
        }
    });

    // WebSocket for real-time updates (replace with actual WebSocket URL)
    const socket = new WebSocket('ws://localhost:3000');
    const realTimeUpdatesList = document.getElementById('realTimeUpdates');

    socket.onmessage = function (event) {
        const update = document.createElement('li');
        update.textContent = event.data;
        realTimeUpdatesList.appendChild(update);
    };

    socket.onclose = function () {
        const update = document.createElement('li');
        update.textContent = 'Connection closed';
        realTimeUpdatesList.appendChild(update);
    };
});
