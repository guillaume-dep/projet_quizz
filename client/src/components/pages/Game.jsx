import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents.js";
import { ROLE } from "../../../../shared/utils/role.js";

import Host_view from "./gameViews/Host_view.jsx"
import Player_view from "./gameViews/Player_view.jsx"
import WaitingScreen from "./WaitingScreen.jsx";

import { motion } from "framer-motion"

const Game = ({ role, gameCode, answerProgress, hasAnswered, setHasAnswered, question }) => {

    const isPlayer = role === ROLE.PLAYER;

    /* When a player answer, we submit it */
    const onAnswer = (answerIndex) => {
        if (hasAnswered) return;

        setHasAnswered(true)

        console.log(`Envoie de la réponse depuis Game : ${answerIndex}`)
        socket.emit(SK.SUBMIT_ANSWER, answerIndex, gameCode)
    }

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
                answerProgress={answerProgress}
            />
        }

        return <Player_view
            question={question}
            hasAnswered={hasAnswered}
            onAnswer={onAnswer}
        />
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
        >
            {renderWaitingOrQuestionView()}
        </motion.div>
    )

};

export default Game;