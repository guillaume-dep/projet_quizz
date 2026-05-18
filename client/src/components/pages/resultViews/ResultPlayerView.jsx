/* --- CSS --- */
import styles from "../../../style/resultPlayerView.module.css"

const ResultPlayerView = ({ question, answer }) => {

    console.log("Reponse du joueur : ", answer)

    const isNoAnswer = (answer === null);
    const isCorrect = (!isNoAnswer && question.correctIndex === answer)
    let maxPoints = question.value * question.coef

    const renderAnswer = () => {
        if (isNoAnswer) return "No answer given..."
        return isCorrect ? "Correct !" : "wrong !";
    }

    const renderScore = () => {
        if (isNoAnswer) return "+ 0 pts";
        return isCorrect ? `+ ${maxPoints} pts` : "+ 0 pts";
    }

    return (
        <div className={styles.card}>

            <div className={styles.header}>
                <span className={styles.status}>
                    {renderAnswer()}
                </span>

                <span className={isCorrect ? styles.correct : styles.wrong}>
                    {renderScore()}
                </span>
            </div>

            <div className={styles.informationGroup}>

                <div className={styles.section}>
                    <div className={styles.label}>Fun fact</div>
                    <div className={styles.info}>
                        {question.information}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ResultPlayerView;