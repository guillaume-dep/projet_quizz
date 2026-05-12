import GameManager from "../gameManager.js"
import questions from "../data/questions.js"
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
        /*
        socket.on(SK.CONNECT, () => {
            const code = this.#socket_to_room.get(socket.id);
            if (code) {
                this.handleSync(socket, code);
            }
        });
        */
        socket.on(SK.CREATE_GAME, (player_data) => this.handleCreateGame(socket, player_data))
        socket.on(SK.JOIN_GAME, (player_data, code) => this.handleJoinGame(socket, player_data, code))
        socket.on(SK.START_GAME, (code) => this.handleStartGame(socket, code))
        socket.on(SK.SUBMIT_ANSWER, (answerIndex, code) => this.handleSubmitAnswer(socket, answerIndex, code))
        socket.on(SK.REQUEST_NEW_QUESTION, (code) => this.handleNextQuestion(socket, code))
        socket.on(SK.REQUEST_SHOW_RESULTS, (code) => this.handleRequestShowResults(socket, code))
        socket.on(SK.DISCONNECT, () => this.handleDisconnect(socket))
    }

    /* ----- Creation of the game ----- */

    handleCreateGame(socket, player_data) {

        const code = generateCode();
        const gameManager = new GameManager(questions, 2) /* A changer par des valeurs en input */

        gameManager.setHost(socket.id);
        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        this.#rooms.set(code, gameManager)
        console.log("\n Creation of the game :")
        console.log("Rooms", this.#rooms)

        socket.join(code)
        this.#socket_to_room.set(socket.id, code);

        console.log("Game created !")
        console.log(`Code : ${code}`)

        socket.emit(SK.GAME_CREATED, { code }) /* To print out the code */
        this.#io.to(code).emit(SK.PLAYER_JOINED, { players: gameManager.getPlayers(), code });

    }

    /* ----- Start the game ----- */

    handleStartGame(socket, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (!gameManager.isHost(socket.id)) {
            socket.emit(SK.ERROR, { message: "You are not the host !" });
            return;
        }
        console.log(`Game ${code} Started !`)


        gameManager.startGame(socket.id);
        this.#socket_to_room.set(socket.id, code);
        this.#io.to(code).emit(SK.GAME_STARTED, gameManager.getCurrentQuestion());

        console.log(`Envoie de la première question à ${code}`)
        const { id, text, theme, answers, correctIndex, value, coef } = gameManager.getCurrentQuestion();
        console.log(`Question : ${text}`)
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
        console.log("Currently trying to join a game", socket.id)
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (!gameManager.canJoin()) {
            socket.emit(SK.ERROR, { message: "Game already started ! Be aware next time." });
            return;
        }

        console.log(`Game ${code} joined by ${socket.id}`)


        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        socket.join(code);
        this.#socket_to_room.set(socket.id, code);

        /* Inform that a player joined, return the list of player for sync */
        this.#io.to(code).emit(SK.PLAYER_JOINED, { players: gameManager.getPlayers(), code });
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
        console.log(`Emitting HOST_LEFT to room ${code}`);
        this.#io.to(code).emit(SK.HOST_LEFT, { message: "Host disconnected, game over !" });
        console.log(`Host disconnected, game ${code} over !`)
        this.#rooms.delete(code);
    }

    handlePlayerLeavingLobby(player, code, gameManager) {
        console.log(`Player ${player.name} has been disconnected from the lobby ${code}`)
        this.#io.to(code).emit(SK.PLAYER_REMOVED, {
            message: `Player ${player.name} has been disconnected from the lobby`,
            players: gameManager.getPlayers()
        });
    }

    handlePlayerLeavingQuestion(player, code, gameManager) {
        console.log(`Player ${player.name} has been disconnected during the game ${code}`)
        this.#io.to(code).emit(SK.PLAYER_REMOVED, {
            message: `Player ${player.name} has been disconnected during the game`,
            players: gameManager.getPlayers()
        });
        this.handleResultProcess(gameManager, code);
    }

    handlePlayerLeavingResult(player, code, gameManager) {
        console.log(`Player ${player.name} has been disconnected during the result ${code}`)
        this.#io.to(code).emit(SK.PLAYER_REMOVED, {
            message: `Player ${player.name} has been disconnected during the result`,
            players: gameManager.getPlayers()
        });
    }

    /* ----- Submit an answer of a player ----- */

    handleSubmitAnswer(socket, answerIndex, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (gameManager.isHost(socket.id)) {
            socket.emit(SK.ERROR, { message: "Host cannot answer !" })
            return;
        }

        const result = gameManager.submitAnswer(socket.id, answerIndex);

        console.log(`Answer sent by ${socket.id}`)


        if (!result.valid) {
            socket.emit(SK.ERROR, { message: "Invalid answer." });
            return;
        }

        socket.emit(SK.SUBMITTED_ANSWER, result)

        if (gameManager.hasEveryPlayerAnswered()) {
            this.handleShowResults(gameManager, code);
        }
    }

    /* ----- Result ----- */

    handleRequestShowResults(socket, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;
        if (!gameManager.isHost(socket.id)) return;
        this.handleShowResults(gameManager, code);
    }

    handleShowResults(gameManager, code) {
        gameManager.setResultState()
        console.log("Envoie des résultats de la question, partie : ", code)
        this.#io.to(code).emit(SK.SHOWN_RESULTS, {
            playerScore: gameManager.getScores(), /* [{name, score, domain} */
            isLastQuestion: gameManager.isLastQuestion()
        })
    }

    /* ----- Emit the next question ----- */

    handleNextQuestion(socket, code) {
        const gameManager = this.getGameOrEmitError(socket, code);
        if (!gameManager) return;

        if (!gameManager.isHost(socket.id)) {
            socket.emit(SK.ERROR, { message: "You are not the host !" });
            return;
        }

        gameManager.markAnsweredEveryPlayer();

        const question = gameManager.getNextQuestion();
        if (!question) {
            this.#io.to(code).emit(SK.GAME_OVER, gameManager.getScores());
            /* this.#rooms.delete(code); */
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