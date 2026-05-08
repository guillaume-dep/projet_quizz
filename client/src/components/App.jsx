import {socket} from "../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../shared/socketEvents.js";
import { VIEWS } from "./utils/views.js";
import { ROLE } from "../../../shared/utils/role.js";
import { useEffect, useState } from "react";

/**
 * Every player have their own app which decides the view to display
 */
const App = () => { 

  /* The role of the player, either host or player*/
  const [role, setRole] = useState(null);

  /* Players in game */
  const [players, setPlayers] = useState([])

  /* The code of the game which the player is in */
  const [gameCode, setGameCode] = useState(null);

  /* View to display */
  const [view, setView] = useState(VIEWS.HOME);

  /* Global scores of the game */
  const [score, setScores] = useState([])

  /* ---------- Routing ---------- */

  /* ----- Game ----- */

  /* 
  We need to create the link between the server and the app only one time
  That's why there's no dependencies ([])
  */
  useEffect(() => {
    const handleGameCreated = ({code}) => {
      setView(VIEWS.LOBBY);
      setGameCode(code);
    }

    const handleGameStarted = () => {
      setView(VIEWS.GAME);
    }

    const handleGameOver = () => {
      setView(VIEWS.RESULT);
    }

    socket.on(SK.GAME_CREATED, handleGameCreated)
    socket.on(SK.GAME_STARTED, handleGameStarted)
    socket.on(SK.GAME_OVER, handleGameOver)

    
    return () => {
      /* Turning off the listening after the game is create (only for this socket) */
      socket.off(SK.GAME_CREATED, handleGameCreated);

      socket.off(SK.GAME_STARTED, handleGameStarted);
      socket.off(SK.GAME_OVER, handleGameOver);
    }
  }, [])

  /* ----- Player ----- */

  useEffect(() => {
    const handlePlayerJoined = ({players}) => {
      setPlayers(players);
    }

    const handlePlayerLeft = ({message, players}) => {
      setPlayers(players);
      console.log(message);
    }

    socket.on(SK.PLAYER_JOINED, handlePlayerJoined)
    socket.on(SK.PLAYER_REMOVED, handlePlayerLeft)


    return () => {
      socket.off(SK.PLAYER_JOINED, handlePlayerJoined)
      socket.off(SK.PLAYER_REMOVED, handlePlayerLeft)

    }
  }, [])
  
  /* ----- Results ----- */

  useEffect(() => {
    const handleShowResults = ({playerInfo}) => {
      setScores(playerInfo)
    }

    socket.on(SK.SHOW_RESULTS, handleShowResults)

    return () => {
      socket.off(SK.SHOW_RESULTS, handleShowResults);
    }
  }, [])

  /* ----- Errors ----- */

  useEffect(() => {
    const handleError = ({ message }) => {
            console.error(message);
    };

    socket.on(SK.ERROR, handleError)

    return () => {
      socket.off(SK.ERROR, handleError);
    }
  }, [])
  
  /* ----- View ----- */

  const renderView = () => {
    switch(view){
      case VIEWS.HOME:
        return <Home />

      case VIEWS.LOBBY:
        return <Lobby />

      case VIEWS.GAME:
        return <Game />
      
      case VIEWS.RESULT:
        return <Result />
    }
  }
  return (
    <div className="app">
      {renderView()}
    </div>
  ); 
}; 

export default App;