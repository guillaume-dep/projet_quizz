import { useState, useEffect, use } from "react";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents.js";
import { ROLE } from "../../../../shared/utils/role.js";
import Host_view from "./gameViews/Host_view.jsx"
import Player_view from "./gameViews/Player_view.jsx"

const Game = ({ role, gameCode, scores, errorMessage, setErrorMessage, question }) => {

    const [answer, setAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    useEffect(() => {
        const handleSubmittedAnswer = (answerFromServer) => {
            console.log("Reponse reçu du serveur à la question :", answerFromServer);
            setAnswer(answerFromServer)
        }

        socket.on(SK.SUBMITTED_ANSWER, handleSubmittedAnswer)

        return () => {
            socket.off(SK.SUBMITTED_ANSWER, handleSubmittedAnswer)
        }
    })

    return (
        <div>
            {(role === ROLE.HOST) ? (
                <Host_view
                    question={question}
                    gameCode={gameCode}
                    hasAnswered={hasAnswered}
                    setHasAnswered={setHasAnswered}
                />
            ) :
                <Player_view
                    question={question}
                    gameCode={gameCode}
                    hasAnswered={hasAnswered}
                    setHasAnswered={setHasAnswered}
                />
            }
        </div>
    )

};

export default Game;