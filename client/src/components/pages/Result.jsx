import QuestionDisplay from "./QuestionDisplay";
import ResultHostView from "./resultViews/ResultHostView";
import ResultPlayerView from "./resultViews/ResultPlayerView";
import { useState, useEffect } from "react";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents.js";
import { ROLE } from "../../../../shared/utils/role.js";
import { AnimatePresence, motion } from "framer-motion"
import { VIEWS } from "../utils/views.js";


const Result = ({ role,
    question,
    gameCode,
    answer,
    isLastQuestion,
    questionNumber,
    totalQuestion,
    answerProgress,
    answerDetails
}) => {

    const renderView = () => {
        if (role === ROLE.HOST) {
            console.log("Affichage résultat du host")
            return <ResultHostView
                question={question}
                gameCode={gameCode}
                isLastQuestion={isLastQuestion}
                questionNumber={questionNumber}
                totalQuestion={totalQuestion}
                answerProgress={answerProgress}
                answerDetails={answerDetails}
            />
        }

        console.log("Affichage résultat du player")
        return <ResultPlayerView
            question={question}
            answer={answer}
        />
    }

    return (
        <motion.div
            key={VIEWS.RESULT}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
                type: "spring",
                stiffness: 160,
                damping: 10
            }}
            className="Result"
        >
            {renderView()}
        </motion.div>
    )
}

export default Result;