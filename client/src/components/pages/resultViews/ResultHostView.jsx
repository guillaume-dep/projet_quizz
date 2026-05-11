
import QuestionDisplay from "../QuestionDisplay.jsx";
import ResultPlayerView from "../resultViews/ResultPlayerView";
import { useState, useEffect } from "react";
import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import { ROLE } from "../../../../../shared/utils/role.js";

const ResultHostView = ({ question, gameCode }) => {
    const handleNewQuestion = () => {
        socket.emit(SK.REQUEST_NEW_QUESTION, gameCode)
    }

    return (
        <div className="ResultHostView">
            <div className="buttonBloc">
                <button onClick={handleNewQuestion} className="button">Next Question</button>
            </div>
            <div>Voici les réponses des questions : </div>
            <QuestionDisplay question={question} />
        </div>
    )
}

export default ResultHostView;