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


}