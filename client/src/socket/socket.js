import { io } from "socket.io-client";

const URL =
    import.meta.env.VITE_SERVER_URL ||
    window.location.origin;

export const socket = io(URL, {
    path: "/socket.io",
    transports: ["websocket", "polling"]
});