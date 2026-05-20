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
import Leaderboard from "./pages/Leaderboard.jsx";
import Footer from "../components/pages/Footer.jsx";
import Navbar from "./pages/Navbar.jsx"

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

  /* ================================== */


  /* The role of the player, either host or player*/
  const [role, setRole] = useState(null);

  /* Game difficulty */
  const [difficulty, setDifficulty] = useState(null);

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

  /* Answer of the player
            valid
            answerIndex
            correctIndex
            isCorrect
            status
            pointsGained
            totalScore
            previousScore          
  */
  const [answer, setAnswer] = useState(null);

  /* Useful to know if a player hasAnswered */
  const [hasAnswered, setHasAnswered] = useState(false);

  /* Global scores of the game */
  const [scores, setScores] = useState([])

  /* Global scores to show */
  const [scoresToShow, setScoresToShow] = useState([])

  /* Error message to show from the server */
  const [errorMessage, setErrorMessage] = useState("");

  /* Current question */
  const [question, setQuestion] = useState(null);

  /* CurrentIndex question */
  const [questionNumber, setQuestionNumber] = useState(0)

  const [totalQuestion, setTotalQuestion] = useState(null)

  /* Last question or not */
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  /* ----- Reset ----- */
  const resetGameState = () => {
    setDifficulty(null);
    setRole(null);
    setGameCode("");
    setPlayers([]);
    setScores([]);
    setAnswer(null);
    setHasAnswered(false);
    setQuestion(null);
    setQuestionNumber(0);
    setTotalQuestion(null);
    setIsLastQuestion(false);
  };

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

    const handleGameOver = ({ scores, scoresToShow }) => {
      console.log("Game over")
      setScoresToShow(scoresToShow)
      setScores(scores);
      setView(VIEWS.FINAL_RESULT);
      setDifficulty(null);
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
      resetGameState()
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

  /* ----- Answer ----- */

  /* Useful to retrieve the result from an answer */
  useEffect(() => {
    const handleSubmittedAnswer = (answer) => {
      console.log("Reponse reçu du serveur à la question : ", answer);
      setAnswer(answer)
    }

    socket.on(SK.SUBMITTED_ANSWER, handleSubmittedAnswer)

    return () => {
      socket.off(SK.SUBMITTED_ANSWER, handleSubmittedAnswer)
    }
  }, [])

  /* If there's a new question we have to state back to false the hasAnswered field */
  useEffect(() => {
    setAnswer(null);
    setHasAnswered(false);
  }, [question]);

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

  /* ----- Leaderboard ----- */

  useEffect(() => {
    const handleShowLeaderboard = ({ scores, scoresToShow, currentPlayerScore, currentPlayerRank }) => {
      console.log("Leaderboard reçu :", scores, scoresToShow);
      setScoresToShow(scoresToShow);
    }

    socket.on(SK.SHOWN_LEADERBOARD, handleShowLeaderboard)

    return () => {
      socket.off(SK.SHOWN_LEADERBOARD, handleShowLeaderboard)
    }
  }, [])

  /* ----- Results ----- */

  useEffect(() => {
    const handleShowResults = ({ playersScore, isLastQuestion }) => {
      setScores(playersScore)
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
          difficulty={difficulty}
          setDifficulty={setDifficulty}
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

      /* Ajouter un bouton ou une action pour afficher le leaderboard | setView ? */
      case VIEWS.RESULT:
        return <Result
          role={role}
          question={question}
          gameCode={gameCode}
          answer={answer}
          isLastQuestion={isLastQuestion}
          questionNumber={questionNumber}
          totalQuestion={totalQuestion}
          answerProgress={answerProgress}
        />

      case VIEWS.LEADERBOARD:
        /* [{name, domain, score}...]*/
        return <Leaderboard scoresToShow={scoresToShow} />


      case VIEWS.FINAL_RESULT:
        return <FinalResult scores={scores} scoresToShow={scoresToShow} />
    }
  }

  return (
    <motion.div
      className={styles.app}
    >
      <Navbar
        gameCode={gameCode}
        resetGameState={resetGameState}
        view={view}
        setView={setView}
      />
      <div className={styles.content}>
        {renderView()}
      </div>

      <Footer />
    </motion.div>
  );
};


export default App;