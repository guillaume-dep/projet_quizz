import GameManager from "../gameManager.js"
import { generateCode } from "../utils/utils.js"

/**
 * IOController class to manage the game connections 
 */
export default class IOController {
    #io
    #rooms

    constructor(io, rooms) {
        this.#io = io
        this.#rooms = rooms /* Map<code, GameManager> */
    }

    registerSocket(socket) {
        this.setupListeners(socket)
    }

    setupListeners(socket) {
        socket.on("create_game", (player_data) => this.handleCreateGame(socket, player_data))
        socket.on("join_game", (player_data, code) => this.handleJoinGame(socket, player_data, code))
        socket.on("start_game", (code) => this.handleStartGame(socket, code))
        socket.on("submit_answer", (answerIndex, code) => this.handleSubmitAnswer(socket, answerIndex, code))
        socket.on("request_next_question", (code) => this.handleNextQuestion(socket, code))
    }

    /* ----- Creation of the game ----- */

    handleCreateGame(socket, player_data) {

        const code = generateCode();
        const gameManager = new GameManager()

        gameManager.setHost(socket.id);
        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        this.#rooms.set(code, gameManager)
        socket.join(code)

        socket.emit("game_created", { code }) /* To print out the code */
    }

    /* ----- Player joining the game ----- */

    handleJoinGame(socket, player_data, code) {
        const gameManager = getGameOrEmitError(socket, code);

        if (!gameManager) return;

        if (!gameManager.canJoin()) {
            socket.emit("error", { message: "Game already started ! Be aware next time." });
            return;
        }

        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        socket.join(code);

        /* Inform that a player joined */
        this.#io.to(code).emit("player_joined", { players: gameManager.getPlayers() });
    }

    /* ----- Start the game ----- */

    handleStartGame(socket, code) {
        const gameManager = getGameOrEmitError(socket, code);

        if (!gameManager) return;

        if (!gameManager.isHost(socket.id)) {
            socket.emit("error", { message: "You are not the host !" });
            return;
        }

        gameManager.startGame(socket.id);
        this.#io.to(code).emit("game_started");
        this.#io.to(code).emit("new_question", gameManager.getCurrentQuestion());
    }

    /* ----- Submit an answer of a player ----- */

    handleSubmitAnswer(socket, answerIndex, code) {
        const gameManager = getGameOrEmitError(socket, code);

        if (!gameManager) return;

        const result = gameManager.submitAnswer(socket.id, answerIndex);

        if (!result.valid) {
            socket.emit("error", { message: "Invalid answer." });
            return;
        }

        this.#io.to(code).emit("submit_answers", result)

        if (gameManager.hasEveryPlayerAnswered()) {
            setResultState()
            this.#io.to(code).emit("show_results", {
                playerScore: gameManager.getScores(), /* [{name, score, domain} */
                question: gameManager.getCurrentQuestion()
            })
        }
    }

    /* ----- Emit the next question ----- */

    handleNextQuestion(socket, code) {
        const gameManager = getGameOrEmitError(socket, code);

        if (!gameManager) return;

        if (!gameManager.isHost(socket.id)) {
            socket.emit("error", { message: "You are not the host !" });
            return;
        }

        const question = gameManager.getNextQuestion();
        if (!question) {
            this.#io.to(code).emit("game_over", gameManager.getScores());
            this.#rooms.delete(code);
            return;
        }

        this.#io.to(code).emit("new_question", question);
    }


    /* ----- Error handler ----- */

    getGameOrEmitError(socket, code) {
        const gameManager = this.#rooms.get(code);

        if (!gameManager) {
            socket.emit("error", { message: "Game not found ! Try another code." });
            return null;
        }
        return gameManager;
    }
}
    
}