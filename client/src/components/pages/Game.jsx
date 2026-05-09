import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents.js";
import { ROLE } from "../../../../shared/utils/role.js";
import Host_view from "./gameViews/Host_view.jsx"
import Player_view from "./gameViews/Player_view.jsx"

const Game = ({ role, gameCode, scores, errorMessage, setErrorMessage, question }) => {

    return (
        <div>
            {(role === ROLE.HOST) ? (
                <Host_view question={question} />
            ) :
                <Player_view question={question} />
            }
        </div>
    )

};

export default Game;