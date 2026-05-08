import { io } from "socket.io-client"; 
/* const socket = io("http://192.168.1.180:8080"); */

/* Ip and localhost connection ; name of the host */
const socket = io(`http://${window.location.hostname}:8080`);
window.socket = socket;  

const App = () => { 
  return <div></div>; 
}; 

export default App;