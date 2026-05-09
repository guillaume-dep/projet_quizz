import { useState } from "react";
import { ROLE } from "../../../../shared/utils/role.js";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";

const Lobby = ({ players, gameCode, role }) => {

    const handleStartGame = () => {
        socket.emit(SK.START_GAME, gameCode);
    };

    return (
        <div>
            <h1>Lobby</h1>

            <div>
                Code de la partie :
                <strong>{gameCode}</strong>
            </div>

            <div>
                Joueurs :
                {players.map((p, i) => (
                    <div key={i}>{p.name}</div>
                ))}
            </div>

            {role === ROLE.HOST && (
                <button onClick={(handleStartGame)}>Start game</button>
            )}
        </div>
    );
};

export default Lobby;