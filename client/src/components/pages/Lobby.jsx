import { useState } from "react";

const Lobby = ({ players, gameCode, role }) => {
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

            {role === "HOST" && (
                <button>Start game</button>
            )}
        </div>
    );
};

export default Lobby;