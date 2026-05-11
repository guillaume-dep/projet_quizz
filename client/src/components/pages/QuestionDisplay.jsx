const QuestionDisplay = ({ question }) => {
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
            <div className="buttonBloc">
                <button className="nextQuestion">next</button>
            </div>
        </div>)

}
export default QuestionDisplay;
