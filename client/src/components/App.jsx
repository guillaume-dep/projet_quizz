import { socket } from "../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../shared/socketEvents.js";
import { VIEWS } from "./utils/views.js";
import { ROLE } from "../../../shared/utils/role.js";
import { useEffect, useState } from "react";

import Result from "./pages/Result.jsx"
import Game from "./pages/Game.jsx"
import Lobby from "./pages/Lobby.jsx"
import Home from "./pages/Home.jsx"


/**
 * Every player have their own app which decides the view to display
 */
const App = () => {

  /* The role of the player, either host or player*/
  const [role, setRole] = useState(null);

  /* Players in game */
  const [players, setPlayers] = useState([])

  /* The code of the game which the player is in */
  const [gameCode, setGameCode] = useState("");

  /* View to display */
  const [view, setView] = useState(VIEWS.HOME);

  /* Global scores of the game */
  const [scores, setScores] = useState([])

  /* Error message to show from the server */
  const [errorMessage, setErrorMessage] = useState("");

  /* Current question */
  const [question, setQuestion] = useState(null);


  /* ---------- Routing ---------- */

  /* ----- Game ----- */

  /* 
  We need to create the link between the server and the app only one time
  That's why there's no dependencies ([])
  */
  useEffect(() => {
    const handleGameCreated = ({ code }) => {
      setView(VIEWS.LOBBY);
      console.log(`Code depuis app : ${code}`)
      console.log("Host is joining the game !")
      setGameCode(code);
    }

    const handleGameStarted = (questionFromServer) => {
      console.log("Nous sommes sur l'écran de partie")
      setQuestion(questionFromServer);
      const { id, text, theme, answers, correctIndex, value, coef } = questionFromServer;
      console.log(`Question reçu dans game start: ${text}`)
      setView(VIEWS.GAME);
    }

    const handleGameOver = (scores) => {
      setScores(scores);
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

  /* ----- Player - Host ----- */

  useEffect(() => {
    const handlePlayerJoined = ({ players, code }) => {
      setView(VIEWS.LOBBY);
      setGameCode(code)
      setPlayers(players);
    }

    const handlePlayerLeft = ({ message, players }) => {
      setPlayers(players);
      console.log(message);
    }

    const handleHostLeft = ({ message }) => {
      console.log(message);

      setPlayers([]);
      setScores([]);
      setGameCode("");
      setRole(null);

      setView(VIEWS.HOME);
    }

    socket.on(SK.PLAYER_JOINED, handlePlayerJoined)
    socket.on(SK.PLAYER_REMOVED, handlePlayerLeft)
    socket.on(SK.HOST_LEFT, handleHostLeft)



    return () => {
      socket.off(SK.PLAYER_JOINED, handlePlayerJoined)
      socket.off(SK.PLAYER_REMOVED, handlePlayerLeft)
      socket.off(SK.HOST_LEFT, handleHostLeft)


    }
  }, [])

  /* ----- Question ----- */

  useEffect(() => {
    const handleQuestionSent = (questionFromServer) => {
      setQuestion(questionFromServer);
      const { id, text, theme, answers, correctIndex, value, coef } = questionFromServer;
      console.log(`Question reçu dans question: ${text}`)
    }

    socket.on(SK.QUESTION_SENT, handleQuestionSent);

    return () => {
      socket.off(SK.QUESTION_SENT, handleQuestionSent)
    }
  }, []);

  /* ----- Results ----- */

  useEffect(() => {
    const handleShowResults = ({ playerScore }) => {
      setScores(playerScore)
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
      setErrorMessage(message)
    };

    socket.on(SK.ERROR, handleError)

    return () => {
      socket.off(SK.ERROR, handleError);
    }
  }, [])

  /* ----- View ----- */

  const renderView = () => {
    switch (view) {
      case VIEWS.HOME:
        return <Home setRole={setRole} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />

      case VIEWS.LOBBY:
        return <Lobby players={players} gameCode={gameCode} role={role} />

      case VIEWS.GAME:
        return <Game
          role={role}
          gameCode={gameCode}
          scores={scores}
          players={players}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          question={question}
        />

      case VIEWS.RESULT:
        return <Result scores={scores} players={players} />
    }
  }

  return (
    <div className="app">
      {renderView()}
    </div>
  );
};


export default App;