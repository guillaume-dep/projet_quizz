/* --- CSS --- */
import styles from "../../../style/player_view.module.css"

const Player_view = ({ question, hasAnswered, onAnswer }) => {
    if (!question) return null;

    const { text, answers } = question;
    const colors = [
        styles.red,
        styles.blue,
        styles.green,
        styles.yellow
    ];

    const handleClick = (index) => {
        if (hasAnswered) return;

        console.log("Envoie de ma réponse : ", index)
        onAnswer(index)
    }
    const renderButtons = () => {
        return answers.map((answer, index) => (
            <button
                value={index}
                key={index}
                disabled={hasAnswered}
                className={`${styles.answerBtn} ${colors[index]}`}
                onClick={() => handleClick(index)}
            >
                <span>{answer}</span>
            </button>
        ));
    }


    return (
        <div className={styles.player_view}>

            <div className={styles.questionBloc}>
                {text}
            </div>

            <div className={styles.btnBloc}>
                {renderButtons()}
            </div>

        </div>
    );
}

export default Player_view;