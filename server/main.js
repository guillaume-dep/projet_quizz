import http from 'http'
import IOController from './controllers/ioController.js'
import { Server as IOServer } from 'socket.io'

const server = http.createServer()

/* Canal de communication WebSocket */
const io = new IOServer(server)
const ioController = new IOController(io)
io.on('connection', (socket) => ioController.registerSocket(socket))

server.listen(8080)
