import http from 'http'
import IOController from './controllers/ioController.js'
import { Server as IOServer } from 'socket.io'

const server = http.createServer()

/* Canal de communication WebSocket */
const io = new IOServer(server, {
    cors: {
        /* origin: ["http://localhost:5173", "http://192.168.1.180:5173"] */
        origin: true,
        methods: ["GET", "POST"]
    }
});

const ioController = new IOController(io)
io.on('connection', (socket) => {
    ioController.registerSocket(socket)
    console.log("CONNECT:", socket.id);

    socket.on("disconnect", () => {
        console.log("DISCONNECT:", socket.id);
    })
});

server.listen(8080, () => {
    console.log("Server running on 8080");
});

