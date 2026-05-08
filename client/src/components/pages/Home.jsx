import { useState } from "react";
import {socket} from "../../socket/socket.js";
import {ROLE} from "../../../../shared/utils/role.js"
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";
import ChoiceView from "./homeViews/ChoiceView.jsx";
import FormView from "./homeViews/FormView.jsx";

/**
 * Display the home of the game
 * You can choose between joining or creating a game
 * Then you have to enter your information 
 */
const Home = ({setRole}) => {

    /* --- Data of the home page --- */

    const [name, setName] = useState("");
    const [domain, setDomain] = useState("");
    const [gameCode, setGameCode] = useState("")
    const [mode, setMode] = useState(null)

    /* --- Functions --- */
    const handleCreateGame = ({name, domain}) => {
        setRole(ROLE.HOST)
        socket.emit(SK.CREATE_GAME, {name, domain})

    }

    const handleJoinGame = ({name, domain, code}) => {
        setRole(ROLE.PLAYER);
        socket.emit(SK.JOIN_GAME, {name, domain}, code)
    }

    return (
        <div className="home">
            <span>Home</span>
            {!mode ? (
                <ChoiceView setMode={setMode}/>
            ) : 
            
            <FormView 
                mode={mode}
                name={name}
                domain={domain}
                gameCode={gameCode}
                setName={setName}
                setDomain={setDomain}
                setGameCode={setGameCode}
                handleCreateGame={handleCreateGame}
                handleJoinGame={handleJoinGame}
            />

            }
        </div>
    )
}

export default Home;