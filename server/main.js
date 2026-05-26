import http from "http";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Server as IOServer } from "socket.io";

import IOController from "./controllers/ioController.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

/* HTTP */
const server = http.createServer(app);

/* SOCKET.IO */
const io = new IOServer(server, {
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    },
    transports: ["websocket", "polling"]
});

const ioController = new IOController(io);

io.on("connection", (socket) => {
    console.log("CONNECT:", socket.id);
    ioController.registerSocket(socket);
});

/* Debug utile */
io.engine.on("connection_error", (err) => {
    console.log("SOCKET ERROR:", err.code, err.message);
});

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});