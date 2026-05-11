/* Imports */
/* import questions from "./data/questions.js" */
import Player from "./utils/player.js"
import { GAME_STATE } from "./utils/gameState.js"

/**
 * GameManager manages the state according to the rules of the quizz game
 */
export default class GameManager {
    #game_state;
    #host_id;
    #players_map;
    #current_question_index;
    #questions;
    #numberOfQuestionsToPlayWith

    constructor(questions, numberOfQuestionsToPlayWith) {
        this.#game_state = GAME_STATE.LOBBY;
        this.#host_id = null; /* socket_id */
        this.#questions = questions;
        this.#players_map = new Map(); /* Map<socket_id, Player> */
        this.#current_question_index = 0;
        this.#numberOfQuestionsToPlayWith = Math.min(numberOfQuestionsToPlayWith ?? questions.length, questions.length);

    }

    /* ----- State ----- */

    getGameState() { return this.#game_state };

    /* ----- Players ----- */

    getPlayers() {
        return [...this.#players_map.values()].map(player => ({
            name: player.name,
            score: player.score,
            domain: player.domain
        }));
    }

    getPlayer(socket_id) {
        return this.#players_map.get(socket_id)
    }

    removePlayer(socket_id) {
        this.#players_map.delete(socket_id);
    }

    getNumberOfPlayers() {
        return this.#players_map.size;
    }

    getPlayersMap() {
        return this.#players_map;
    }

    setHost(socket_id) { this.#host_id = socket_id };
    isHost(socket_id) { return this.#host_id === socket_id }

    /**
     * Add a player to the map of players if not already in
     * @param {string} socket_id 
     * @param {string} name 
     * @param {string} player_domain
     */
    addPlayer(socket_id, name, player_domain) {
        if (this.#players_map.has(socket_id) || this.#game_state !== GAME_STATE.LOBBY) return;

        this.#players_map.set(socket_id, new Player(name, player_domain))
    }

    /* ----- Game ----- */

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
     */
    endGame() {
        this.#game_state = GAME_STATE.FINISHED;
    }

    /**
     * End the game by the host
     * @param {string} socket_id 
     */
    endGameByHost(socket_id) {
        if (socket_id !== this.#host_id) return;
        this.endGame();
    }

    /**
     * Reset the players' boolean condition for submitting again
     */
    resetAnsweredPlayers() {
        this.#players_map.forEach(player => player.resetAnswered());
    }

    /* ----- Questions ----- */

    /**
     * @return {Object} question object
     */
    getCurrentQuestion() {
        return this.#questions[this.#current_question_index]
    }

    /**
     * @param {Number} answerIndex 
     * @param {Object} question
     * @return {boolean} true if the answer is the right one else false
     */
    isRightAnswer(answerIndex, question) {
        return question.correctIndex === answerIndex;
    }

    /**
     * @return {Object} the next question object if it exists else null
     */
    getNextQuestion() {

        if (this.isLastQuestion()) {
            this.endGame();
            return null;
        }

        this.#current_question_index += 1;
        this.resetAnsweredPlayers()
        this.#game_state = GAME_STATE.QUESTION;

        return this.getCurrentQuestion();
    }

    isLastQuestion() {
        return this.#current_question_index >= this.#numberOfQuestionsToPlayWith - 1;
    }

    /* ----- Submitting ----- */

    /**
     * @return {boolean} true if every player has answered else false
     */
    hasEveryPlayerAnswered() {
        return [...this.#players_map.values()].every(player => player.hasAnswered())
    }

    /**
     * Submit the answer of the player
     * @param {string} socket_id the socket_id of the player
     * @param {Number} answerIndex the index of the answer
     * @return {Object} the object with the informations of the answer state
     */
    submitAnswer(socket_id, answerIndex) {
        if (this.#game_state !== GAME_STATE.QUESTION) return { valid: false };

        const question = this.getCurrentQuestion(); /* Can't be null due to state verification */
        const player = this.#players_map.get(socket_id);

        if (!player) return { valid: false };
        if (player.hasAnswered()) return { valid: false }

        player.markAnswered();
        const isCorrect = this.isRightAnswer(answerIndex, question)
        if (isCorrect) {
            player.incrementScoreDomain(question.value, question.coef, question.theme);
        }

        return {
            valid: true,
            correct: isCorrect,
            score: player.score
        }
    }

    /* ----- Connection ----- */

    /**
     * @return {boolean} true if the game can be joined else false
     */
    canJoin() {
        return this.#game_state === GAME_STATE.LOBBY
    }

    /**
     * Set the game state to RESULT
     */
    setResultState() {
        this.#game_state = GAME_STATE.RESULT;
    }

    /* ----- Scores ----- */

    getScores() {
        return [...this.#players_map.values()].map(player => ({
            name: player.name,
            score: player.score,
            domain: player.domain
        })).sort((a, b) => b.score - a.score)
    }

}