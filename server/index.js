const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors()); // Allow CORS for all routes

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from your frontend
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('join', ({ name, room }, callback) => {
    console.log(`${name} joined ${room}`);
    socket.join(room);
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    io.to(socket.room).emit('message', { user: socket.id, text: message });
    callback();
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
