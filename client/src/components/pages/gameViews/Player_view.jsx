import styles from "../../../style/player_view.module.css"

const Player_view = ({ question, hasAnswered, onAnswer }) => {
    if (!question) return null;

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = [
        styles.red,
        styles.blue,
        styles.green,
        styles.yellow
    ];

    const handleClick = (event) => {
        if (hasAnswered) return;

        const index = Number(event.target.value);
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
                onClick={handleClick}
            >
                <span>{answer}</span>
            </button>
        ));
    }


    return (
        <div className={styles.player_view}>
            <div className={styles.btnBloc} >
                {renderButtons()}
            </div>
        </div>

    )
}

export default Player_view;