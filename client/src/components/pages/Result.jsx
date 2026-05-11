import QuestionDisplay from "./QuestionDisplay";
import ResultHostView from "./resultViews/ResultHostView";
import ResultPlayerView from "./resultViews/ResultPlayerView";
import { useState, useEffect } from "react";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents.js";
import { ROLE } from "../../../../shared/utils/role.js";

const Result = ({ role, question, gameCode, answer }) => {

    const renderView = () => {
        if (role === ROLE.HOST) {
            console.log("Affichage résultat du host")
            return <ResultHostView question={question} gameCode={gameCode} />
        }

        console.log("Affichage résultat du player")
        return <ResultPlayerView question={question} gameCode={gameCode} answer={answer} />
    }

    return (
        <div className="Result">
            {renderView()}
        </div>
    )
}

export default Result;