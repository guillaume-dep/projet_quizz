import styles from "../../../style/player_view.module.css"

const Player_view = ({ question, hasAnswered, onAnswer }) => {
    if (!question) return null;
    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = ["red", "blue", "green", "yellow"];

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
                className={`answer-btn ${colors[index]}`}
                onClick={handleClick}
            >
                {answer}
            </button>
        ));
    }

    return (
        <div className="Player_view">
            {text}
            <br />
            {renderButtons()}
        </div>

    )
}

export default Player_view;