/* --- CSS --- */
import { AnswerStatus } from "../../../../../server/utils/answerStatus";
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

    const status = answer?.status ?? AnswerStatus.NO_ANSWER;
    const isNoAnswer = !answer || status === AnswerStatus.NO_ANSWER;

    const renderAnswer = () => {
        switch (status) {
            case AnswerStatus.CORRECT:
                return "Correct !";
            case AnswerStatus.WRONG:
                return "Wrong !";
            case AnswerStatus.NO_ANSWER:
            default:
                return "No answer given...";
        }
    };

    const bannerClass =
        status === AnswerStatus.CORRECT
            ? styles.correctBanner
            : status === AnswerStatus.NO_ANSWER
                ? styles.noAnswerBanner
                : styles.wrongBanner;

    return (
        <div className={styles.resultPlayerView}>
            <div className={styles.card}>

                <div className={[styles.banner, bannerClass].join(" ")}>
                    <span>
                        {renderAnswer()}
                    </span>

                    <span className={styles.bannerScore}>
                        + {answer?.pointsGained ?? 0} pts
                    </span>
                </div>

                <div className={styles.body}>

                    <div className={styles.scoreBox}>
                        <span>Total score </span>
                        <span className={styles.totalScore}>
                            {answer?.totalScore ?? 0}  pts
                        </span>
                    </div>

                    <div className={styles.informationGroup}>

                        <div className={styles.section}>
                            <div className={styles.label}>
                                Fun fact -
                                <span className={styles.domain}> {question.theme}</span>
                            </div>
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