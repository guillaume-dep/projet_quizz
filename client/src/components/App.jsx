import { socket } from "../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../shared/socketEvents.js";
import { VIEWS } from "./utils/views.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Result from "./pages/Result.jsx"
import Game from "./pages/Game.jsx"
import Lobby from "./pages/Lobby.jsx"
import Home from "./pages/Home.jsx"
import FinalResult from "./pages/FinalResult.jsx";
import Footer from "../components/pages/Footer.jsx";

/* CSS */
import styles from "../style/app.module.css";

/**
 * Every player have their own app which decides the view to display
 */
const App = () => {

  /* ================================== */
  /* PWA INSTALL STATE (NEW) - AI MADE  */
  /* ================================== */
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    console.log("Install result:", choice);

    setDeferredPrompt(null);
    setCanInstall(false);
  };

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  /* ========================= */

  /* The role of the player, either host or player*/
  const [role, setRole] = useState(null);

  /* Players in game */
  const [players, setPlayers] = useState([])

  /* Number of answers */
  const [answerProgress, setAnswerProgress] = useState({
    remaining: 0,
    total: 0
  });

  /* The code of the game which the player is in */
  const [gameCode, setGameCode] = useState("");

  /* View to display */
  const [view, setView] = useState(VIEWS.HOME);

  /* Answer of the player, an index between 0 - numberOfAnswers */
  const [answer, setAnswer] = useState(null);

  /* Useful to know if a player hasAnswered */
  const [hasAnswered, setHasAnswered] = useState(false);

  /* Global scores of the game */
  const [scores, setScores] = useState([])

  /* Error message to show from the server */
  const [errorMessage, setErrorMessage] = useState("");

  /* Current question */
  const [question, setQuestion] = useState(null);

  /* CurrentIndex question */
  const [questionNumber, setQuestionNumber] = useState(0)

  const [totalQuestion, setTotalQuestion] = useState(null)

  /* Last question or not */
  const [isLastQuestion, setIsLastQuestion] = useState(false);

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

    const handleGameStarted = ({ questionFromServer, totalNumberQuestion }) => {
      console.log("Nous sommes sur l'écran de partie")
      setQuestion(questionFromServer);
      setTotalQuestion(totalNumberQuestion);
      const { id, text, theme, answers, correctIndex, value, coef } = questionFromServer;
      console.log(`Question reçu dans game start: ${text}`)
      setView(VIEWS.GAME);
    }

    const handleGameOver = (scores) => {
      setScores(scores);
      setView(VIEWS.FINAL_RESULT);
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
      console.log("HOST_LEFT reçu :", message);

      setPlayers([]);
      setScores([]);
      setGameCode("");
      setRole(null);
      setQuestionNumber(0);
      setTotalQuestion(null);

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

  const handleLeaveGame = (gameCode) => {
    socket.emit(SK.REQUEST_LEAVE_GAME, gameCode);

    setQuestion(null);
    setPlayers([]);
    setScores([]);
    setAnswer(null);
    setHasAnswered(false);
    setIsLastQuestion(false);

    setView(VIEWS.HOME);
    setGameCode("");
  };

  const renderButton = () => {
    if (view !== VIEWS.HOME) {
      return <button
        className={styles.leaveButton}
        onClick={() => handleLeaveGame(gameCode)}
      >
        <svg
          className={styles.icon}
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" />
          <path fill="currentColor" fillRule="evenodd" d="M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.64c0 .44-.55.7-.95.55a3 3 0 0 0-3.17 4.93l.02.03a.5.5 0 0 1-.35.85h-.05a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z" />
          <path fill="currentColor" d="M15.3 16.7a1 1 0 0 1 1.4-1.4l4.3 4.29V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3Z" />
        </svg>
        Leave
      </button>
    }
  }

  /* ----- Question ----- */

  useEffect(() => {
    const handleQuestionSent = ({ questionFromServer, questionIndex, numberOfPlayerNotAnswered, numberOfPlayer }) => {
      setView(VIEWS.GAME)
      setAnswer(null);
      setQuestion(questionFromServer);
      setQuestionNumber(questionIndex)
      setAnswerProgress({
        remaining: numberOfPlayerNotAnswered,
        total: numberOfPlayer
      })

      const { id, text, theme, answers, correctIndex, value, coef } = questionFromServer;
      console.log(`Question reçu dans question: ${text}`)
    }

    socket.on(SK.QUESTION_SENT, handleQuestionSent);

    return () => {
      socket.off(SK.QUESTION_SENT, handleQuestionSent)
    }
  }, []);

  useEffect(() => {
    const handleProgress = ({ numberOfPlayerNotAnswered, numberOfPlayer }) => {
      console.log("ANSWER_PROGRESS reçu :", numberOfPlayerNotAnswered, numberOfPlayer);
      setAnswerProgress({
        remaining: numberOfPlayerNotAnswered,
        total: numberOfPlayer
      });
    };

    socket.on(SK.ANSWER_PROGRESS, handleProgress);

    return () => {
      socket.off(SK.ANSWER_PROGRESS, handleProgress);
    };
  }, []);

  /* ----- Results ----- */

  useEffect(() => {
    const handleShowResults = ({ playerScore, isLastQuestion }) => {
      setScores(playerScore)
      setIsLastQuestion(isLastQuestion)
      setView(VIEWS.RESULT)
      console.log("Vu des résultats")
    }

    socket.on(SK.SHOWN_RESULTS, handleShowResults)

    return () => {
      socket.off(SK.SHOWN_RESULTS, handleShowResults);
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
        return <Home
          setRole={setRole}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setView={setView}
          canInstall={canInstall}
          handleInstall={handleInstall}
        />

      case VIEWS.LOBBY:
        return <Lobby players={players} gameCode={gameCode} role={role} />

      case VIEWS.GAME:
        return <Game
          role={role}
          hasAnswered={hasAnswered}
          setHasAnswered={setHasAnswered}
          gameCode={gameCode}
          answerProgress={answerProgress}
          setAnswer={setAnswer}
          question={question}
        />

      case VIEWS.RESULT:
        return <Result
          role={role}
          question={question}
          gameCode={gameCode}
          answer={answer}
          isLastQuestion={isLastQuestion}
          questionNumber={questionNumber}
          totalQuestion={totalQuestion}

        />

      case VIEWS.FINAL_RESULT:
        return <FinalResult scores={scores} />
    }
  }

  return (
    <motion.div
      className={styles.app}
    >
      <div className={styles.content}>
        {renderView()}
      </div>
      {renderButton()}
      <Footer />
    </motion.div>
  );
};


export default App;