import http from 'http';
import IOController from './controllers/ioController.js';
import { Server as IOServer } from 'socket.io';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

const server = http.createServer(app);

const io = new IOServer(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"]
    }
});

const ioController = new IOController(io);
io.on('connection', (socket) => {
    ioController.registerSocket(socket);
    console.log("CONNECT:", socket.id);
});

server.listen(8080, () => {
    console.log("Server running on 8080");
});