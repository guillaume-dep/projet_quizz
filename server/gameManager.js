/* Imports */
import questions from "./data/questions.js"
import { GAME_STATE } from "./utils/gameState.js"

/**
 * GameManager class to manage the actions of the client
 * It manages the actions according to the rules of the quizz game
 */
export default class GameManager {
    #game_state;
    #host_id;
    #players_map;
    #current_question_index;

    constructor(questions) {
        this.#game_state = GAME_STATE.LOBBY;
        this.#host_id = null; /* socket_id */
        this.#players_map = new Map(); /* Map<socket_id, {name, score} */
        this.#current_question_index = 0;
    }

    /**
     * Add a player to the map of players if not already in
     * @param {string} socket_id 
     * @param {string} name 
     */
    addPlayer(socket_id, name) {
        if (this.#players_map.has(socket_id)) return;

        this.#players_map.set(socket_id, {
            name,
            score: 0
        })
    }

    /**
     * Start the game if the input comes from the host
     * Modify the state of the game to : QUESTION
     * @param {string} socket_id 
     */
    startGame(socket_id) {
        if (socket_id !== this.#host_id) return;

        this.#game_state = GAME_STATE.QUESTION;
    }

    /**
     * End the game if the input comes from the host
     * Modify the state of the game to : FINISHED
     * @param {string} socket_id 
     */
    endGame(socket_id) {
        if (socket_id !== this.#host_id) return;

        this.#game_state = GAME_STATE.FINISHED;
    }

    /* ----- QUESTIONS ----- */

    /**
     * @return {Object} question object
     */
    getCurrentQuestion() {
        return questions[this.#current_question_index]
    }

    /**
     * @return {Object} the next question object if it exists else null
     */
    next_question() {
        this.#current_question_index += 1;
        if (this.#current_question_index >= questions.length) {
            this.endGame(this.#host_id);
            return null;
        }

        return this.getCurrentQuestion();
    }

    /**
     * Submit the answer of the player
     * @param {*} socket_id the socket_id of the player
     * @param {*} answerIndex the index of the answer
     */
    submitAnswer(socket_id, answerIndex) {

    }

}