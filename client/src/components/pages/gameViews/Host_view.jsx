import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import { ROLE } from "../../../../../shared/utils/role.js";
import { useState, useEffect } from "react";

const Host_view = ({ question, hasAnswered, onAnswer }) => {

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = ["red", "blue", "green", "yellow"];

    const renderAnswers = () => {
        return answers.map((answer, index) => (
            <div className={`answer ${colors[index]}`}>
                {answer}
            </div>
        ));
    }

    return (
        <div>
            {theme}
            <br />
            {text}
            <br />
            {renderAnswers()}
        </div>

    )
}

export default Host_view;