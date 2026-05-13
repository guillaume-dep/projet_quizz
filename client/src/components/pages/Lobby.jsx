import { ROLE } from "../../../../shared/utils/role.js";
import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";
import styles from "../../style/lobby.module.css";

const Lobby = ({ players, gameCode, role }) => {

    const host = players[0];

    const renderPlayers = () => {
        return players.map((player, index) => (
            <div key={index} className={styles.playerCard}>
                <span className={styles.playerName}>
                    {player.name.trim().toLowerCase()}
                </span>

                <span className={styles.playerDomain}>
                    {player.domain?.trim().toLowerCase()}
                </span>
            </div>
        ));
    };

    const handleStartGame = () => {
        socket.emit(SK.START_GAME, gameCode);
    };

    const renderStartButton = () => {
        if (role !== ROLE.HOST) return null;

        return (
            <div className={styles.startButtonContainer}>
                <button
                    className={styles.startButton}
                    onClick={handleStartGame}
                    disabled={players.length < 2}
                >
                    Start game
                </button>
            </div>
        );
    };

   

    return (
        <div className={styles.lobby}>

            <div className={styles.topBar}>
                <div className={styles.gameTitle}>
                    Game of {host?.name}
                </div>

                <div className={styles.separator}>|</div>

                <div className={styles.gameCode}>
                    <span className={styles.titleGameCode}>Game code </span>
                    {gameCode}
                </div>
            </div>

            <div className={styles.playersContainer}>

                <div className={styles.playersHeader}>
                    {players.length} player{players.length > 1 ? "s" : ""}
                </div>

                <div className={styles.playersGrid}>
                    {renderPlayers()}
                </div>

            </div>

            {renderStartButton()}

        </div>
    );
};

export default Lobby;