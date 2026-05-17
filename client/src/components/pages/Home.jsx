import { useState } from "react";
import { socket } from "../../socket/socket.js";
import { ROLE } from "../../../../shared/utils/role.js"
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";
import ChoiceView from "./homeViews/ChoiceView.jsx";
import FormView from "./homeViews/FormView.jsx";
import cerveau from '../../images/cerveau.png';
import { motion } from "framer-motion"

/* CSS */
import styles from "../../style/home.module.css";

/**
 * Display the home of the game
 * You can choose between joining or creating a game
 * Then you have to enter your information 
 */
const Home = ({ setRole,
    canInstall,
    handleInstall,
    errorMessage,
    setErrorMessage,
    difficulty,
    setDifficulty
}) => {

    /* --- Data of the home page --- */

    const [name, setName] = useState("");
    const [domain, setDomain] = useState("");
    const [inputGameCode, setInputGameCode] = useState("")
    const [mode, setMode] = useState(null)
    const [nbQuestions, setNbQuestions] = useState(10);

    /* --- Functions --- */
    const handleCreateGame = () => {
        setRole(ROLE.HOST)
        console.log("Pseudo host:", name);
        console.log("Domain host:", domain);
        console.log("Difficulty:", difficulty)
        console.log("Number of questions:", nbQuestions)

        socket.emit(SK.CREATE_GAME, { name, domain, difficulty, nbQuestions })
    }

    const handleJoinGame = () => {
        setRole(ROLE.PLAYER);
        console.log("JOIN CODE SENT:", inputGameCode);
        console.log("Pseudo:", name);
        console.log("Domain:", domain);
        console.log(`Le type de code dans emit : ${typeof (inputGameCode)}`)

        socket.emit(SK.JOIN_GAME, { name, domain }, inputGameCode)
    }

    return (
        <motion.div
            className={styles.home}
            initial={{ opacity: 0, y: -30 }} /* start at -30 invisible*/
            animate={{ opacity: 1, y: 0 }} /* end at 0 visible*/
            exit={{ opacity: 0, y: 30 }} /* end at 30 invisble */
            transition={{ duration: 0.4 }}
        >
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Quiz Game</h1>
                <div className={styles.underTitle}>
                    Create or join a game to see who will be the smartest
                    <img
                        src={cerveau}
                        alt="Icône du quiz (cerveau)"
                        title="Quiz icônes"
                        className={styles.cerveau}
                    />
                </div>
            </div>


            <div className={styles.container}>
                {!mode ? (
                    <ChoiceView
                        setMode={setMode}
                        canInstall={canInstall}
                        handleInstall={handleInstall}
                    />
                ) :

                    <FormView
                        mode={mode}
                        name={name}
                        domain={domain}
                        inputGameCode={inputGameCode}
                        setName={setName}
                        setDomain={setDomain}
                        setInputGameCode={setInputGameCode}
                        handleCreateGame={handleCreateGame}
                        handleJoinGame={handleJoinGame}
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                        setMode={setMode}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        nbQuestions={nbQuestions}
                        setNbQuestions={setNbQuestions}
                    />
                }
            </div>


        </motion.div>
    )
}

export default Home;