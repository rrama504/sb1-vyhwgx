import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { generateRandomData } from './utils.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Simulate live data updates
setInterval(() => {
  const data = generateRandomData();
  io.emit('sensorData', data);
}, 1000);

// Simulate random alerts
setInterval(() => {
  if (Math.random() > 0.7) {
    const alert = {
      id: Date.now(),
      type: Math.random() > 0.5 ? 'warning' : 'error',
      message: `Alert: ${Math.random() > 0.5 ? 'High temperature detected' : 'Low SSIM score'}`,
      timestamp: new Date().toISOString()
    };
    io.emit('newAlert', alert);
  }
}, 5000);

const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});