Make Sure All files and Folders are Organized in this way...
if any mistake you will get error/file not found

intergalactic-trade-network/
│
├── backend/
│   ├── server.js              
│   ├── routes/                
│   │   ├── tradeRoutes.js      
│   │   └── cargoRoutes.js    
│   ├── controllers/           
│   │   ├── tradeController.js 
│   │   └── cargoController.js  
│   ├── models/               
│   │   ├── tradeModel.js     
│   │   └── cargoModel.js     
│   ├── utils/                
│   └── websocket.js         
│
└── frontend/
    ├── index.html           
    ├── styles.css    
    └── scripts.js  

* After this you have to clone this repository into your system 
-> In your System Make a folder 
-> open this folder in GitBash/Windows Terminal
-> and run  git clone "repository url" 

* After Cloning open your folder in Terminal
  run...
  npm init -y
  npm install express mongoose
  npm install pg kafka-node socket.io

* Set Up MongoDB: If you are running MongoDB locally, make sure it is running:
 run...
 mongod --dbpath /path/to/your/data

* Run the Backend: Start your server.js:
 node server.js

The backend should now be running on http://localhost:3000.



  
