import QuestionDisplay from "../QuestionDisplay";
import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";


const Host_view = ({ question, gameCode, answerProgress, setView }) => {

    const handleShowResults = () => {
        console.log("Demande des résultats de la question !")
        socket.emit(SK.REQUEST_SHOW_RESULTS, gameCode);
    }

    return (
        <div className="Host_view">
            <div>Nombre de joueurs qui doivent encore répondre : {answerProgress.remaining - 1} / {answerProgress.total - 1}</div>
            <div className="buttonBloc">
                <button className="getResult" onClick={handleShowResults}>result</button>
            </div>
            <QuestionDisplay question={question} showResults={false} selectedAnswer={question.correctIndex} />
        </div>

    )
}

export default Host_view;