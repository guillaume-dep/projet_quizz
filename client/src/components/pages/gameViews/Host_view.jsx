import QuestionDisplay from "../QuestionDisplay";

const Host_view = ({ question, gameCode }) => {
    return (
        <div>
            <QuestionDisplay gameCode={gameCode} question={question} />
        </div>

    )
}

export default Host_view;