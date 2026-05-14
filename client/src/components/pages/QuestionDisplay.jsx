import styles from "../../style/questionDisplay.module.css"

const QuestionDisplay = ({ question, showResults, selectedAnswer }) => {

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = [
        styles.red,
        styles.blue,
        styles.green,
        styles.yellow
    ];


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
        return answers.map((answer, index) => (
            <div key={index} className={setAnswerClass(index)}>
                {answer}
            </div>
        ));
    }

    return (
        <div className={styles.answersGrid}>
            {renderAnswers()}
        </div>)

}
export default QuestionDisplay;
