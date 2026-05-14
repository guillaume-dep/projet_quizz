
import QuestionDisplay from "../QuestionDisplay.jsx";
import ResultPlayerView from "../resultViews/ResultPlayerView";
import { useState, useEffect } from "react";
import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import { ROLE } from "../../../../../shared/utils/role.js";
import styles from "../../../style/resultHostView.module.css"


const ResultHostView = ({ question, gameCode, isLastQuestion }) => {
    const handleNewQuestion = () => {
        socket.emit(SK.REQUEST_NEW_QUESTION, gameCode)
    }

    const resultOrNextQuestion = (!isLastQuestion) ? "next question" : "final result";
    console.log(isLastQuestion)

    return (
        <div className="ResultHostView">
            <div className="buttonBloc">
                <button onClick={handleNewQuestion} className="button">{resultOrNextQuestion}</button>
            </div>
            <div>Voici les réponses des questions : </div>
            <QuestionDisplay question={question} showResults={true} selectedAnswer={question.correctIndex} />
        </div>
    )
}

export default ResultHostView;