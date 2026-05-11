import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import { ROLE } from "../../../../../shared/utils/role.js";
import { useState, useEffect } from "react";

const Player_view = ({ question, hasAnswered, onAnswer }) => {
    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = ["red", "blue", "green", "yellow"];


    const handleClick = (event) => {
        if (hasAnswered) return;

        const index = Number(event.target.value);
        onAnswer(index)
    }
    const renderButtons = () => {
        return answers.map((answer, index) => (
            <button
                value={index}
                key={index}
                disabled={hasAnswered}
                className={`answer-btn ${colors[index]}`}
                onClick={handleClick}
            >
                {answer}
            </button>
        ));
    }

    return (
        <div>
            {text}
            <br />
            {renderButtons()}
        </div>

    )
}

export default Player_view;