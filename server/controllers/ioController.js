import GameManager from "../gameManager.js"
import { GAME_STATE } from "../utils/gameState.js"
import { SOCKET_EVENTS as SK } from "../../shared/socketEvents.js"
import generateCode from "../utils/utils.js"

/**
 * IOController class to manage the game connections 
 */
export default class IOController {
    #io
    #rooms
    #socket_to_room

    constructor(io) {
        this.#io = io
        this.#rooms = new Map() /* Map<code, GameManager> */
        this.#socket_to_room = new Map() /* Map<socket, code>*/
    }

    registerSocket(socket) {
        this.setupListeners(socket)
    }

    setupListeners(socket) {
        socket.on(SK.CREATE_GAME, (player_data) => this.handleCreateGame(socket, player_data))
        socket.on(SK.JOIN_GAME, (player_data, code) => this.handleJoinGame(socket, player_data, code))
        socket.on(SK.START_GAME, (code) => this.handleStartGame(socket, code))
        socket.on(SK.SUBMIT_ANSWER, (answerIndex, code) => this.handleSubmitAnswer(socket, answerIndex, code))
        socket.on(SK.REQUEST_NEW_QUESTION, (code) => this.handleNextQuestion(socket, code))
        socket.on(SK.DISCONNECT, () => this.handleDisconnect(socket))
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


        socket.emit(SK.GAME_CREATED, { code }) /* To print out the code */
    }

    /* ----- Start the game ----- */

    handleStartGame(socket, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (!gameManager.isHost(socket.id)) {
            socket.emit(SK.ERROR, { message: "You are not the host !" });
            return;
        }

        gameManager.startGame(socket.id);
        this.#socket_to_room.set(socket.id, code);
        this.#io.to(code).emit(SK.GAME_STARTED);
        this.#io.to(code).emit(SK.QUESTION_SENT, gameManager.getCurrentQuestion());
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
            socket.emit(SK.ERROR, { message: "Game already started ! Be aware next time." });
            return;
        }

        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        socket.join(code);
        this.#socket_to_room.set(socket.id, code);

        /* Inform that a player joined, return the list of player for sync */
        this.#io.to(code).emit(SK.PLAYER_JOINED, { players: gameManager.getPlayers() });
    }

    /* ----- Players leaving the game ----- */

    handleDisconnect(socket) {
        const code = this.#socket_to_room.get(socket.id);
        if (!code) return;

        const gameManager = this.#rooms.get(code);
        if (!gameManager) return;

        if (gameManager.isHost(socket.id)) {
            this.handleHostLeavingGame(code, gameManager);
            return;
        }

        const player = gameManager.getPlayer(socket.id);
        gameManager.removePlayer(socket.id);
        switch (gameManager.getGameState()) {
            case GAME_STATE.LOBBY:
                this.handlePlayerLeavingLobby(player, code, gameManager);
                break;
            case GAME_STATE.QUESTION:
                this.handlePlayerLeavingQuestion(player, code, gameManager);
                break;
            case GAME_STATE.RESULT:
                this.handlePlayerLeavingResult(player, code, gameManager);
                break;
        }

        this.#socket_to_room.delete(socket.id);
    }

    handleHostLeavingGame(code) {
        this.#io.to(code).emit(SK.ERROR, { message: "Host disconnected, game over !" });
        this.#rooms.delete(code);
    }

    handlePlayerLeavingLobby(player, code, gameManager) {
        this.#io.to(code).emit(SK.PLAYER_REMOVED, {
            message: `Player ${player.name} has been disconnected from the lobby`,
            players: gameManager.getPlayers()
        });
    }

    handlePlayerLeavingQuestion(player, code, gameManager) {
        this.#io.to(code).emit(SK.PLAYER_REMOVED, {
            message: `Player ${player.name} has been disconnected during the game`,
            players: gameManager.getPlayers()
        });
        this.handleResultProcess(gameManager, code);
    }

    handlePlayerLeavingResult(player, code, gameManager) {
        this.#io.to(code).emit(SK.PLAYER_REMOVED, {
            message: `Player ${player.name} has been disconnected during the result`,
            players: gameManager.getPlayers()
        });
    }

    /* ----- Submit an answer of a player ----- */

    handleSubmitAnswer(socket, answerIndex, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        const result = gameManager.submitAnswer(socket.id, answerIndex);

        if (!result.valid) {
            socket.emit(SK.ERROR, { message: "Invalid answer." });
            return;
        }

        socket.emit(SK.SUBMITTED_ANSWER, result)
        this.handleResultProcess(gameManager, code);
    }

    /* ----- Result ----- */

    handleResultProcess(gameManager, code) {
        if (gameManager.hasEveryPlayerAnswered()) {
            gameManager.setResultState()
            this.#io.to(code).emit(SK.SHOW_RESULTS, {
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
            socket.emit(SK.ERROR, { message: "You are not the host !" });
            return;
        }

        const question = gameManager.getNextQuestion();
        if (!question) {
            this.#io.to(code).emit(SK.GAME_OVER, gameManager.getScores());
            this.#rooms.delete(code);
            return;
        }

        this.#io.to(code).emit(SK.QUESTION_SENT, question);
    }


    /* ----- Error handler ----- */

    getGameOrEmitError(socket, code) {
        const gameManager = this.#rooms.get(code);

        if (!gameManager) {
            socket.emit(SK.ERROR, { message: "Game not found ! Try another code." });
            return null;
        }
        return gameManager;
    }
}