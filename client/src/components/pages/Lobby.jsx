import { socket } from "../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";

import { ROLE } from "../../../../shared/utils/role.js";
import { motion } from "framer-motion";

/* --- CSS --- */
import styles from "../../style/lobby.module.css";

const Lobby = ({ players, gameCode, role }) => {

    const host = players[0];

    const handleStartGame = () => {
        socket.emit(SK.START_GAME, gameCode);
    };

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

    const renderStartButton = () => {
        if (role !== ROLE.HOST) return null;

        return (
            <div className={styles.startButtonContainer}>
                <button
                    className={styles.startButton}
                    onClick={handleStartGame}
                    disabled={players.length < 2}
                >
                    <svg
                        className={styles.icon}
                        id="Play"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                        ></path>
                    </svg>
                    Start game
                </button>
            </div >
        );
    };



    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={styles.lobby} >

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

        </motion.div >
    );
};

export default Lobby;