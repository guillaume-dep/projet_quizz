/* --- CSS --- */
import styles from "../../../style/resultPlayerView.module.css"

const ResultPlayerView = ({ question, answer }) => {

    console.log("Reponse du joueur : ", answer)

    /* Answer of the player
            valid
            answerIndex
            correctIndex
            isCorrect
            status
            pointsGained
            totalScore
            previousScore          
  */

    const isNoAnswer = (answer === null);

    const renderAnswer = () => {
        if (isNoAnswer) return "No answer given..."
        return answer.isCorrect ? "Correct !" : "Wrong !";
    }

    const renderScore = () => {
        if (isNoAnswer) return "+ 0 pts";
        return answer.isCorrect ? `+ ${answer.pointsGained} pts` : "+ 0 pts";
    }

    return (
        <div className={styles.resultPlayerView}>
            <div className={styles.card}>

                <div
                    className={[
                        styles.banner,
                        answer.isCorrect
                            ? styles.correctBanner
                            : answer.answerIndex === null
                                ? styles.noAnswerBanner
                                : styles.wrongBanner
                    ].join(" ")}
                >
                    <span>
                        {renderAnswer()}
                    </span>

                    <span className={styles.bannerScore}>
                        + {answer.pointsGained} pts
                    </span>
                </div>

                <div className={styles.body}>

                    <div className={styles.scoreBox}>
                        <span>Score total</span>
                        <span className={styles.totalScore}>
                            {answer.totalScore}
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
            </div>
        </div>
    );
}

export default ResultPlayerView;