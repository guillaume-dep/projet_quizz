import { ROLE } from "../../../../shared/utils/role.js";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";

const Lobby = ({ players, gameCode, role }) => {

    const playersMap = players.map((p, i) => (
        <div key={i}>{p.name.trim()} {"- " + p.domain.trim().toLowerCase()}</div>)
    )

    const handleStartGame = () => {
        console.log("Demande début de la partie dans lobby", gameCode)
        socket.emit(SK.START_GAME, gameCode);
    };

    return (
        <div className="lobby">
            <h1 className="title">Lobby</h1>

            <div className="gameCode">
                Code de la partie :
                <strong>{gameCode}</strong>
            </div>

            <div className="players">
                Joueurs :
                {playersMap}

            </div>

            {role === ROLE.HOST && (
                <button className="start_game_button" onClick={(handleStartGame)}>Start game</button>
            )}
        </div>
    );
};

export default Lobby;