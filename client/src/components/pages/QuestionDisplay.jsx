import "../../style/ResultCss.css"

const QuestionDisplay = ({ question, showResults, selectedAnswer }) => {

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    const colors = ["red", "blue", "green", "yellow"];


    const setClassName = (index) => {
        if (!showResults) return `answer ${colors[index]}`
        if (index === correctIndex) return `answer correct`;
        if (selectedAnswer === index && index !== correctIndex) return `answer wrong`;

        return `answer faded`;
    }

    const renderAnswers = () => {
        return answers.map((answer, index) => (
            <div key={index} className={setClassName(index)}>
                {answer}
            </div>
        ));
    }

    return (
        <div className="QuestionDisplay">
            <h3>{theme}</h3>
            <div>{text}</div>

            {renderAnswers()}
        </div>)

}
export default QuestionDisplay;
