/* --- CSS --- */
import styles from "../../style/questionDisplay.module.css"

const QuestionDisplay = ({ question, showResults, selectedAnswer, answerDetails, answerProgress }) => {

    const { answers, correctIndex } = question;
    const colors = [
        styles.red,
        styles.blue,
        styles.green,
        styles.yellow
    ];

    const total = answerProgress?.total - 1


    const setAnswerClass = (index) => {

        if (!showResults) {
            return `${styles.answerCard} ${colors[index]}`;
        }

        if (index === correctIndex) {
            return `${styles.answerCard} ${styles.correct}`;
        }

        if (
            selectedAnswer === index &&
            index !== correctIndex
        ) {
            return `${styles.answerCard} ${styles.wrong}`;
        }

        return `${styles.answerCard} ${styles.faded}`;
    };

    const renderAnswers = () => {
        return answers.map((answer, index) => {

            if (showResults) {
                return renderResultAnswer(answer, index);
            }

            return (
                <div key={index} className={setAnswerClass(index)}>
                    {answer}
                </div>
            );
        });
    };

    const renderResultAnswer = (answer, index) => {
        const count = answerDetails?.[index] ?? 0;
        const percent = total > 0 ? Math.round((count / total) * 100) : 0;
        const isCorrect = index === correctIndex;

        return (
            <div key={index} className={`${styles.answerCard} ${colors[index]} ${isCorrect ? styles.correct : styles.faded}`}>

                <span className={styles.answerText}>{answer}</span>

                <div className={styles.barContainer}>
                    <div
                        className={styles.barFill}
                        style={{ height: `${percent}%` }}
                    />
                </div>

                <span className={styles.answerCount}>{count} / {total}</span>

            </div>
        );
    };

    return (
        <div className={styles.answersGrid}>
            {renderAnswers()}
        </div>)

}
export default QuestionDisplay;
