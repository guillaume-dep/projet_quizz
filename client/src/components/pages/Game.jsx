import { useState, useEffect } from "react";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents.js";
import { ROLE } from "../../../../shared/utils/role.js";
import Host_view from "./gameViews/Host_view.jsx"
import Player_view from "./gameViews/Player_view.jsx"
import WaitingScreen from "./WaitingScreen.jsx";
import { use } from "react";

const Game = ({ role, gameCode, scores, errorMessage, setErrorMessage, question, setQuestion }) => {

    const isPlayer = role === ROLE.PLAYER;

    /* An index between 0-numberOfAnswers */
    const [answer, setAnswer] = useState(null);

    /* Useful to know if a player hasAnswered */
    const [hasAnswered, setHasAnswered] = useState(false);

    /* When a player answer, we submit it */
    const onAnswer = (answerIndex) => {
        if (hasAnswered) return;

        setHasAnswered(true)

        console.log(`Envoie de la réponse depuis Game : ${answerIndex}`)
        socket.emit(SK.SUBMIT_ANSWER, answerIndex, gameCode)
    }

    /* Useful to retrieve the result from an answer */
    useEffect(() => {
        const handleSubmittedAnswer = (answerFromServer) => {
            console.log("Reponse reçu du serveur à la question :", answerFromServer);
            setAnswer(answerFromServer)
        }

        socket.on(SK.SUBMITTED_ANSWER, handleSubmittedAnswer)

        return () => {
            socket.off(SK.SUBMITTED_ANSWER, handleSubmittedAnswer)
        }
    }, [])

    /* If there's a new question we have to state back to false the hasAnswered field */
    useEffect(() => {
        const handleQuestionSent = (question) => {
            console.log("Nouvelle question le joueur peut répondre !")
            setQuestion(question)
            setAnswer(null)
            setHasAnswered(false);
        }

        socket.on(SK.QUESTION_SENT, handleQuestionSent);

        return () => {
            socket.off(SK.QUESTION_SENT, handleQuestionSent)
        }

    }, [])

    /* ----- Render ----- */

    const renderWaitingOrQuestionView = () => {
        if (isPlayer && hasAnswered) {
            return <WaitingScreen />
        }

        return renderHostOrPlayerView()
    }

    const renderHostOrPlayerView = () => {
        if (role === ROLE.HOST) {
            return <Host_view
                question={question}
                gameCode={gameCode}
            />
        }

        return <Player_view
            question={question}
            hasAnswered={hasAnswered}
            onAnswer={onAnswer}
        />
    }

    return (
        <div>
            {renderWaitingOrQuestionView()}
        </div>
    )

};

export default Game;