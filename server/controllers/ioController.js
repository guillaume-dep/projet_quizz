import GameManager from "../gameManager"

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
        socket.on("create_game")
        socket.on("join_game")
        socket.on("start_game")
        socket.on("submit_answer")
        socket.on("request_next_question")
    }

    handleCreateGame(socket, player_data) {

        const code = generateCode();
        const gameManager = new GameManager()

        gameManager.setHost(socket.id);
        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        this.#rooms.set(code, gameManager)
        socket.join(code)

        socket.emit("game_created", { code }) /* To print out the code */
    }

    handleJoinGame(socket, player_data, code) {
        const gameManager = this.#rooms.get(code);
        if (!gameManager) { /* Code doesn't exist*/
            socket.emit("error", { message: "Game not found ! Try another code." });
            return;
        }

        gameManager.addPlayer(socket.id, player_data.name, player_data.domain);
        socket.join(code);

        /* Inform that a player joined */
        this.io.to(code).emit("player_joined", { players: gameManager.players() });
    }

    handleStartGame() {

    }

    handleSubmitAnswer() {

    }

    handleNextQuestion() {

    }


}