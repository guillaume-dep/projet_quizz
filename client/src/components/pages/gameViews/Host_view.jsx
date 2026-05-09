import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import { ROLE } from "../../../../../shared/utils/role.js";
import { useState, useEffect } from "react";

const Host_view = ({ question, gameCode, hasAnswered, setHasAnswered }) => {

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = ["red", "blue", "green", "yellow"];


    /* Double verification so the client can't spam (there's also a server verification) */
    const handleAnswer = (event) => {
        if (hasAnswered) return;

        setHasAnswered(true)

        let answerIndex = Number(event.target.value)
        console.log(`Envoie de la réponse depuis Host_view : ${answerIndex}`)
        socket.emit(SK.SUBMIT_ANSWER, answerIndex, gameCode)
    }

    const renderButtons = () => {
        return answers.map((answer, index) => (
            <button
                value={index}
                key={index}
                disabled={hasAnswered}
                className={`answer-btn ${colors[index]}`}
                onClick={handleAnswer}
            >
                {answer}
            </button>
        ));
    }

    return (
        <div>
            {theme}
            <br />
            {text}
            <br />
            {renderButtons()}
        </div>

    )
}

export default Host_view;