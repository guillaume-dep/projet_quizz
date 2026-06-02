import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";

import QuestionDisplay from "../QuestionDisplay";

/* --- CSS --- */
import styles from "../../../style/host_view.module.css"

const Host_view = ({ question, gameCode, answerProgress }) => {

    const handleShowResults = () => {
        console.log("Demande des résultats de la question !")
        socket.emit(SK.REQUEST_SHOW_RESULTS, gameCode);
    }
    return (
        <div className={styles.hostView}>

            <div className={styles.topContainer}>

                <div className={styles.questionContainer}>

                    <div className={styles.themeBloc}>
                        {question.theme}
                    </div>

                    <div className={styles.questionBloc}>
                        {question.text}
                    </div>

                </div>

                <div className={styles.sidePanel}>

                    <div className={styles.progressBloc}>
                        {answerProgress.remaining - 1} <span> / {answerProgress.total - 1} joueurs</span>
                    </div>

                    <button
                        className={styles.resultButton}
                        onClick={handleShowResults}
                    >
                        Result
                        <svg className={styles.icon} width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.25 15.25v-8.5h-8.5"></path>
                            <path d="M17 7 6.75 17.25"></path>
                        </svg>
                    </button>

                </div>

            </div>

            <QuestionDisplay
                question={question}
                showResults={false}
                selectedAnswer={question.correctIndex}
            />

        </div>
    );
}

export default Host_view;