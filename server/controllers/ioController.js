import GameManager from "../gameManager.js"
import { GAME_STATE } from "../utils/gameState.js"
import { generateCode } from "../utils/utils.js"

/**
 * IOController class to manage the game connections 
 */
export default class IOController {
    #io
    #rooms
    #socket_to_room

    constructor(io, rooms) {
        this.#io = io
        this.#rooms = rooms /* Map<code, GameManager> */
        this.#socket_to_room = new Map() /* Map<socket, code>*/
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
        socket.on("disconnect", () => this.handleDisconnect(socket))
    }

    /* ----- Creation of the game ----- */

    handleCreateGame(socket, player_data) {

        const code = generateCode();
        const gameManager = new GameManager()

        gameManager.setHost(socket.id);
        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        this.#rooms.set(code, gameManager)
        socket.join(code)
        this.#socket_to_room.set(socket.id, code);


        socket.emit("game_created", { code }) /* To print out the code */
    }

    /* ----- Start the game ----- */

    handleStartGame(socket, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (!gameManager.isHost(socket.id)) {
            socket.emit("error", { message: "You are not the host !" });
            return;
        }

        gameManager.startGame(socket.id);
        this.#socket_to_room.set(socket.id, code);
        this.#io.to(code).emit("game_started");
        this.#io.to(code).emit("new_question", gameManager.getCurrentQuestion());
    }

    /* ----- Player ----- */
    getPlayerFromSocket(socket) {
        const code = this.#socket_to_room.get(socket.id);
        if (!code) return null;

        const gameManager = this.#rooms.get(code);
        if (!gameManager) return null;

        return gameManager.getPlayer(socket.id);
    }

    /* ----- Player joining the game ----- */

    handleJoinGame(socket, player_data, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (!gameManager.canJoin()) {
            socket.emit("error", { message: "Game already started ! Be aware next time." });
            return;
        }

        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        socket.join(code);
        this.#socket_to_room.set(socket.id, code);

        /* Inform that a player joined */
        this.#io.to(code).emit("player_joined", { players: gameManager.getPlayers() });
    }

    /* ----- Players leaving the game ----- */

    handleDisconnect(socket) {
        const code = this.#socket_to_room.get(socket.id);
        if (!code) return;

        const gameManager = this.#rooms.get(code);
        if (!gameManager) return;

        if (gameManager.isHost(socket.id)) {
            this.handleHostLeavingGame(socket, code, gameManager);
            return;
        }

        switch (gameManager.getGameState()) {
            case GAME_STATE.LOBBY:
                this.handlePlayerLeavingLobby(socket, code, gameManager);
                break;
            case GAME_STATE.QUESTION:
                this.handlePlayerLeavingQuestion(socket, code, gameManager);
                break;
            case GAME_STATE.RESULT:
                this.handlePlayerLeavingResult(socket, code, gameManager);
                break;
        }

        gameManager.removePlayer(socket.id);
        this.#socket_to_room.delete(socket.id);
    }

    handleHostLeavingGame(socket, code) {
        socket.emit("error", { message: "Host disconnected, game over !" });
        this.#rooms.delete(code);
    }

    handlePlayerLeavingLobby(socket, code, gameManager) {
        this.#io.to(code).emit("removed_player", { message: `Player ${gameManager.getPlayer(socket.id).name} has been disconnected from the lobby` });
    }

    handlePlayerLeavingQuestion(socket, code, gameManager) {
        this.#io.to(code).emit("removed_player", { message: `Player ${gameManager.getPlayer(socket.id).name} has been disconnected during the game` });
        this.handleResultProcess(gameManager, code);
    }

    handlePlayerLeavingResult(socket, code, gameManager) {
        this.#io.to(code).emit("removed_player", { message: `Player ${gameManager.getPlayer(socket.id).name} has been disconnected during the result` });
    }

    /* ----- Submit an answer of a player ----- */

    handleSubmitAnswer(socket, answerIndex, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        const result = gameManager.submitAnswer(socket.id, answerIndex);

        if (!result.valid) {
            socket.emit("error", { message: "Invalid answer." });
            return;
        }

        socket.emit("submit_answers", result)
        this.handleResultProcess(gameManager, code);
    }

    /* ----- Result ----- */

    handleResultProcess(gameManager, code) {
        if (gameManager.hasEveryPlayerAnswered()) {
            gameManager.setResultState()
            this.#io.to(code).emit("show_results", {
                playerScore: gameManager.getScores(), /* [{name, score, domain} */
                question: gameManager.getCurrentQuestion()
            })
        }
    }

    /* ----- Emit the next question ----- */

    handleNextQuestion(socket, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
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