import { useState } from "react";
import { socket } from "../../socket/socket.js";
import { ROLE } from "../../../../shared/utils/role.js"
import { SOCKET_EVENTS as SK } from "../../../../shared/socketEvents";
import ChoiceView from "./homeViews/ChoiceView.jsx";
import FormView from "./homeViews/FormView.jsx";

/**
 * Display the home of the game
 * You can choose between joining or creating a game
 * Then you have to enter your information 
 */
const Home = ({ setRole, errorMessage, setErrorMessage }) => {

    /* --- Data of the home page --- */

    const [name, setName] = useState("");
    const [domain, setDomain] = useState("");
    const [inputGameCode, setInputGameCode] = useState("")
    const [mode, setMode] = useState(null)

    /* --- Functions --- */
    const handleCreateGame = () => {
        setRole(ROLE.HOST)
        console.log("Pseudo host:", name);
        console.log("Domain host:", domain);
        socket.emit(SK.CREATE_GAME, { name, domain })
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
        <div className="home">
            <h1 className="title">Home</h1>
            {!mode ? (
                <ChoiceView setMode={setMode} />
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
                />
            }
        </div>
    )
}

export default Home;