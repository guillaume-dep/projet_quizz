const QuestionDisplay = ({ gameCode, question, onNext }) => {

    /* ----- Question ----- */

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = ["red", "blue", "green", "yellow"];

    const renderAnswers = () => {
        return answers.map((answer, index) => (
            <div key={index} className={`answer ${colors[index]}`}>
                {answer}
            </div>
        ));
    }

    return (
        <div>
            {theme}
            <br />
            {text}
            {renderAnswers()}
        </div>)

}
export default QuestionDisplay;
