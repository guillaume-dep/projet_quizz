import QuestionDisplay from "../QuestionDisplay.jsx";
import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import styles from "../../../style/host_view.module.css";
import { useEffect, useRef } from "react";

const ResultHostView = ({
    question,
    gameCode,
    isLastQuestion,
    questionNumber,
    totalQuestion,
    answerProgress,
    answerDetails
}) => {

    const handleNewQuestion = () => {
        socket.emit(SK.REQUEST_NEW_QUESTION, gameCode);
    };

    const label = isLastQuestion ? "Final result" : "Next question";

    console.log("Answer details from result: ", answerDetails)

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
                        {questionNumber + 1} <span> / {totalQuestion} questions</span>

                    </div>

                    <button
                        className={styles.resultButton}
                        onClick={handleNewQuestion}
                    >
                        {label}

                        <svg
                            className={styles.icon}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M17.25 15.25v-8.5h-8.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M17 7L6.75 17.25"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>

                    </button>

                </div>

            </div>

            <QuestionDisplay
                question={question}
                showResults={true}
                selectedAnswer={question.correctIndex}
            />

        </div>
    );
};

export default ResultHostView;