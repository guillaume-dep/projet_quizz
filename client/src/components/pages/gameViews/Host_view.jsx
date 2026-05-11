import QuestionDisplay from "../QuestionDisplay";
import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";


const Host_view = ({ question, gameCode }) => {

    const handleNextQuestion = () => {
        console.log("Demande de la nouvelle question !")
        socket.emit(SK.REQUEST_NEW_QUESTION, gameCode);
    }

    return (
        <div>
            <div className="buttonBloc">
                <button className="nextQuestion" onClick={handleNextQuestion}>next</button>
            </div>
            <QuestionDisplay gameCode={gameCode} question={question} />
        </div>

    )
}

export default Host_view;