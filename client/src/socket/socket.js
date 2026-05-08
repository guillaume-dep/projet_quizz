import { io } from "socket.io-client";

/* Ip and localhost connection */
let URL = import.meta.env.VITE_SERVER_URL;
if (!URL) URL = `http://${window.location.hostname}:8080`;

export const socket = io(URL);




